import math

# =============================================================================
# Índices de cada variável da simulação
# =============================================================================
_idx0 = -1
_start = []


def value(x):
    """Retorna idx, valor para o argumento dado. Incrementa o índice 
    automaticamente a cada execução, começando com o valor de 0."""
    global _idx0
    _idx0 += 1
    _start.append(x)
    return _idx0


# Tempo de simulação (anos)
TIME = value(2015)

# Anomalia da temperatura atmosférica e dos oceanos (K)
T_ATM = value(0.8)
T_OCEAN = value(0.5)

# Estoque de carbono na atmosfera, oceanos rasos e profundos (GtC)
# https://earthobservatory.nasa.gov/features/CarbonCycle
# http://www.econ.yale.edu/~nordhaus/homepage/homepage/DICE2016R-091916ap.gms
C_ATM = value(851)
C_OCEAN = value(460)
C_DEEP = value(1740)  # Valores diferem enormente entre a ref. da Nasa e do Norhaus ;)

# População (em milhões de pessoas)
POPULATION = value(7403)

# Crescimento populacional (fração/ano)
POPULATION_GROWTH = value(0.0108)

# Parcela do dia que o trabalhador médio passa trabalhando (0-1)
# Referência é uma semana média de 40h de trabalho
LABOR_INTENSITY = value(40 / (24 * 7))

# Porcentagem da população que faz parte da força de trabalho (0-1)
# Ref.: Na falta de dados globais, usamos os EUA 
# - https://en.wikipedia.org/wiki/File:US_Employment_Statistics_-_March_2015.png
LABOR_FORCE = value(258 / 327)

# Participação da força produtiva/parcela da população economicamente ativa
# que está de fato empregada
LABOR_PARTICIPATION = value(163 / 258)

# Produtividade que relaciona trabalho, capital com produção/PIB
# Valor escolhido para fornecer o PIB de 2015 com os valores iniciais
# de trabalho e capital
PRODUCTIVITY = value(0.180)

# Total em bens de capital (Trilhões de U$)
CAPITAL = value(223)

# Depreciação do capital devido ao uso e desgaste (fração/ano)
CAPITAL_DECAY = value(0.05)

# Fração da produção redirecionada para a produção de capital (0-1)
SAVINGS_RATE = value(0.25)

# Expoente do termo de capital na produtividade (0-1)
# Este expoente reflete a importancia relativa entre capital e trabalho
# na produção. Automação aumenta o valor do expoente.
CAPITAL_ELASTICITY = value(0.3)

# Fração de carbono eliminada por ações de conservação como uso de 
# tecnologias renováveis, escolha de métodos mais ecológicos, plantar 
# árvores etc. Corresponte somente às ações ecológicas que aumentam o 
# custo de produção. (0-1)
ABATEMENT = value(0.0)

# PIB do mundo em (trilhões de U$)
PRODUCTION = value(105)

# Fração do PIB perdido para custos de abatimento + temperatura
CLIMATE_LOSS = value(0.0)

# Emissões de gás carbônico (GtC / ano)
EMISSIONS = value(9.45)

# Intensidade de carbono da economia. Pode reduzir com o desenvolvimento
# de tecnologias ecologicamente corretas. (GtC / tri U$)
CARBON_INTENSITY = value(9.45 / 105)  # 0.09 GtC/ tri U$

# Custo de limpar completamente as emissões de carbono (tri U$ / GtC)
# Ou custo adicional para trocar uma tecnologia poluente por tecnologia 
# completamente limpa. 
# U$ 550 / tCO2 = tri U$ 0.550 / GtCO2 = tri U$ 2.01 / GtC
CARBON_BACKSTOP_PRICE = value(2.01)

# Inicializamos com o estado inicial
data = [_start]
var_names = sorted((v, k) for k, v in globals().items() if k.isupper())
var_names = [k for _, k in var_names]


# =============================================================================
# Parâmetros da simulação
# =============================================================================

# Estoques de carbono no equilíbrio
c_atm_eq = 588
c_ocean_eq = 360
c_deep_eq = 1720

# Fluxos de carbono entre reservatórios (GtC/ano)
# Dividimos por 5 porque o DICE utiliza um passo de 5 anos
a = 0.12 / 5
c = 0.07 / 5
a, b, c, d = a, a * c_atm_eq / c_ocean_eq, c, c * c_ocean_eq / c_deep_eq
phi = [
    [-a, b, 0],
    [a, -b - c, d],
    [0, c, -d],
]

# Parâmetros da função de danos
damage_coeff = 0.01
damage_exp = 2

# Parâmetros da função de custo de abatimento
abate_exp = 2.6

# Parâmetros da dinâmica de temperatura
c1 = 0.01
c2 = 0.001
c3 = 0.01
rf_coeff = 4 / math.log(2)
sensitivity = 0.2


def step(dt=1):
    """
    Avança a simulação por um passo e salva o resultado na lista global data.
    """
    now = data[-1]
    new = now.copy()
    new[TIME] = now[TIME] + dt

    # Variáveis da simulação
    t_atm = now[T_ATM]
    t_ocean = now[T_OCEAN]

    c_atm = now[C_ATM]
    c_ocean = now[C_OCEAN]
    c_deep = now[C_DEEP]

    abatement = now[ABATEMENT]
    population = now[POPULATION]
    population_growth = now[POPULATION_GROWTH]

    capital = now[CAPITAL]
    capital_decay = now[CAPITAL_DECAY]
    alpha = now[CAPITAL_ELASTICITY]
    savings_rate = now[SAVINGS_RATE]

    abate_coeff = now[CARBON_BACKSTOP_PRICE] * now[CARBON_INTENSITY] / abate_exp

    damage = damage_coeff * t_atm ** damage_exp
    abatement_cost = abate_coeff * abatement ** abate_exp
    loss = 1 - (1 - damage) * (1 - abatement_cost)

    # Variáveis derivadas
    labor = now[LABOR_FORCE] * now[LABOR_INTENSITY] * now[
        LABOR_PARTICIPATION] * population
    production = now[PRODUCTIVITY] * capital ** alpha * labor ** (1 - alpha)
    emissions = now[CARBON_INTENSITY] * (1 - abatement) * production

    rf_atm = rf_coeff * math.log(c_atm / c_atm_eq)

    # Ambiente
    new[C_ATM] = c_atm + dt * (phi[0][0] * c_atm + phi[0][1] * c_ocean + phi[0][
        2] * c_deep) + emissions * dt
    new[C_OCEAN] = c_ocean + dt * (
                phi[1][0] * c_atm + phi[1][1] * c_ocean + phi[1][2] * c_deep)
    new[C_DEEP] = c_deep + dt * (
                phi[2][0] * c_atm + phi[2][1] * c_ocean + phi[2][2] * c_deep)

    new[T_ATM] = t_atm - dt * c1 * (t_atm - t_ocean) + sensitivity * rf_atm + c3 * t_atm
    new[T_OCEAN] = t_ocean - dt * c2 * (t_ocean - t_atm)

    new[EMISSIONS] = emissions
    new[CLIMATE_LOSS] = loss

    # Economia
    new[CAPITAL] = capital + dt * (
            1 - loss) * savings_rate * production - capital_decay * capital
    new[POPULATION] = population + dt * population * population_growth
    new[PRODUCTION] = production

    # Salva resultado
    data.append(new)
    return new


def steps(n, dt=1.0):
    """
    Avança a simulação por vários passos de uma única vez.

    >>> steps(10)  # Avança 10 anos
    [2025, ...,]
    """
    for _ in range(n):
        result = step(dt)
    return result


def restart():
    """
    Reinicia a simulação para o ponto inicial.
    
    >>> restart()
    [2015, ...]
    """
    data[:] = [data[0]]
    return data[0]


def get_var(name):
    """
    Retorna o valor da variável com o nome dado.

    >>> get_var('C_ATM')
    851
    """
    idx = globals()[name.upper()]
    return data[-1][idx]


def get_vars():
    """
    Retorna dicionário com todas as variáveis de simulação.
    """
    names = map(str.lower, var_names)
    return dict(zip(names, data[-1]))


def set_var(name, value):
    """
    Salva o valor da variável a partir do seu nome.

    >>> set_var('C_ATM', 1000)
    """
    idx = globals()[name.upper()]
    data[-1][idx] = value


def get_series(name):
    """
    Retorna série de valores para variável.
    """
    idx = globals()[name.upper()]
    return [st[idx] for st in data]


def multiply_var(name, value):
    """
    Multiplica variável por valor.
    """
    new = get_var(name) * value
    set_var(name, new)
    return new


def add_var(name, value):
    """
    Soma variável com valor.
    """
    new = get_var(name) + value
    set_var(name, new)
    return new


def get_game_state():
    """
    Retorna estado completo do jogo.
    """
    return {'data': data}


def set_game_state(state):
    """
    Recupera simulação a partir do estado fornecido.
    """
    global data

    data[:] = state['data']


def plot(name):
    """
    Faz um gráfico da variável dada.
    """
    from matplotlib import pyplot as plt

    time = get_series('time')
    value = get_series(name)
    plt.plot(time, value, label=name)
