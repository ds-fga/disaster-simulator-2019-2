# Status: "available", "purchased", "blocked"
import os, json

original = {   
    #NUCLEAR ----------------------------
    'Conhecimento atômico': {
        'title': "Conhecimento atômico",
        'price': 50,
        'type': "is-warning",
        'spec': "Estudos necessários para entender melhor o funcionamento das partículas atômicas e subatômicas e como promover mudanças ambientalmente favoráveis.",
        'type_tech': "nuclear",
        'status': 'available',
        'unlock': 'Usinas nucleares',
        'affects': ['ABATEMENT', 'PRODUCTION', 'EMISSIONS', 'CARBON_INTENSITY', 'CARBON_BACKSTOP_PRICE'],
        'how': [1.01, 1.05, .95, .9, .9]
    },
    'Usinas nucleares': {
        'title': "Usinas nucleares",
        'price': 350,
        'type': "is-warning",
        'spec': "Criação de polos de usinas nucleares para produzirem mais energia com um imacto ambiental menor.",
        'type_tech': "nuclear",
        'status': 'blocked',
        'unlock': 'Geradores nucleares',
        'affects': ['ABATEMENT', 'PRODUCTION', 'EMISSIONS', 'CARBON_INTENSITY', 'CARBON_BACKSTOP_PRICE'],
        'how': [1.01, 1.05, .95, .9, .9]
    },
    'Geradores nucleares': {
        'title': "Geradores nucleares",
        'price': 700,
        'type': "is-warning",
        'spec': "Diminui a demanda energética de combustíveis fósseis em 20% da população ao produzir um novo gerador de energia elétrica pessoal com elementos radioativos.",
        'type_tech': "nuclear",
        'status': 'blocked',
        'unlock': 'Comida irradiada',
        'affects': ['ABATEMENT', 'PRODUCTION', 'EMISSIONS', 'CARBON_INTENSITY', 'CARBON_BACKSTOP_PRICE'],
        'how': [1.01, 1.05, .95, .9, .9]
    },
    'Comida irradiada': {
        'title': "Comida irradiada",
        'price': 1500,
        'type': "is-warning",
        'spec': "Produção de alimentos com o uso de irradiação na agricultura a fim de prevenir a proliferação de pragas, diminuindo o uso de agrotóxicos que liberam gases estufa.",
        'type_tech': "nuclear",
        'status': 'blocked',
        'affects': ['ABATEMENT', 'PRODUCTION', 'EMISSIONS', 'CARBON_INTENSITY', 'CARBON_BACKSTOP_PRICE'],
        'how': [1.05, 1.1, .9, .8, .8]
    },

    # BIOLÓGICO ---------------------
    
    'Conhecimento molecular': {
        'title': "Conhecimento molecular",
        'price': 50,
        'type': "is-success",
        'spec': "Estudos necessários para entender melhor o funcionamento da microbiologia e como promover mudanças ambientalmente favoráveis.",
        'type_tech': "biológico",
        'status': 'available',
        'unlock': 'Melhor sistema de reflorestamento',
        'affects': ['C_ATM', 'ABATEMENT'],
        'how': [.9, 1.5]
    },
    'Melhor sistema de reflorestamento': {
        'title': "Melhor sistema de reflorestamento",
        'price': 350,
        'type': "is-success",
        'spec': "Aumenta a plantação de árvores no planeta Terra, fazendo com que o sequestro de carbono (CO2) aumente em 15%.",
        'type_tech': "biológico",
        'status': 'blocked',
        'unlock': 'Biofiltro de algas',
        'affects': ['C_ATM', 'ABATEMENT'],
        'how': [.9, 1.5]
    },
    'Biofiltro de algas': {
        'title': "Biofiltro de algas",
        'price': 700,
        'type': "is-success",
        'spec': "Biofiltros formados por microalgas aumentam a absorção de CO2 da atmosfera em um nível 100 vezes mais alto que as árvores, podendo melhorar a qualidade de vida na Terra.",
        'type_tech': "biológico",
        'status': 'blocked',
        'unlock': 'Árvores geneticamente modificadas',
        'affects': ['C_ATM', 'ABATEMENT'],
        'how': [.9, 1.5]
    },
    'Árvores geneticamente modificadas': {
        'title': "Árvores geneticamente modificadas",
        'price': 1500,
        'type': "is-success",
        'spec': "Elaboração, em laboratório, de árvores com DNA modificado para terem um rendimento fotossintetizante mais alto que o normal, aumentando a absorção de CO2 na atmosfera.",
        'type_tech': "biológico",
        'status': 'blocked',
        'affects': ['C_ATM', 'ABATEMENT'],
        'how': [.9, 1.5]
    },

    # TRANSPORTE --------------------
    
    'Conhecimento de energias renováveis': {
        'title': "Conhecimento de energias renováveis",
        'price': 50,
        'type': "is-error",
        'spec': "Estudos necessários para fazer meios de transporte serem menos agressivos ambientalmente.",
        'type_tech': "transporte",
        'status': 'available',
        'unlock': 'Carro movido a motor de hidrogênio',
        'affects': ['PRODUCTIVITY', 'ABATEMENT', 'PRODUCTION'],
        'how': [1.1, 1.2, 1.2]
    },
    'Carro movido a motor de hidrogênio': {
        'title': "Carro movido a motor de hidrogênio",
        'price': 350,
        'type': "is-error",
        'spec': "Liberação do motor movido a hidrogênio a preços acessíveis para a população, reduzindo a produção de CO2.",
        'type_tech': "transporte",
        'status': 'blocked',
        'unlock': 'Uberdrone',
        'affects': ['PRODUCTIVITY', 'ABATEMENT', 'PRODUCTION'],
        'how': [1.1, 1.2, 1.2]
    },
    'Uberdrone': {
        'title': "Uberdrone",
        'price': 700,
        'type': "is-error",
        'spec': "Criação do app Uberdrone que permite com que cidadãos realizem corridas econômicas e mais rápidas, diminuindo o uso de carros para a locomoção.",
        'type_tech': "transporte",
        'status': 'blocked',
        'unlock': 'Aerobus',
        'affects': ['PRODUCTIVITY', 'ABATEMENT', 'PRODUCTION'],
        'how': [1.1, 1.2, 1.2]
    },
    'Aerobus': {
        'title': "Aerobus",
        'price': 1500,
        'type': "is-error",
        'spec': "Ônibus voadores são desenvolvidos como alternativa para o transporte público. Como possui preço acessível, permitiu o o transporte mais rápido e eficiente entre os locais para a população, diminuindo em massa o uso de ônibus terrestres.",
        'type_tech': "transporte",
        'status': 'blocked',
        'affects': ['PRODUCTIVITY', 'ABATEMENT', 'PRODUCTION'],
        'how': [1.1, 1.2, 1.2]
    },
    
        # ENERGÉTICO ---------------------
    
    'Conhecimentos sobre o fluxo energético': {
        'title': "Conhecimentos sobre o fluxo energético",
        'price': 50,
        'type': "is-primary",
        'spec': "Estudos necessários para promover o uso energético mais eficiente e menos poluente.",
        'type_tech': "energético",
        'status': 'available',
        'unlock': 'Usinas eólicas',
        'affects': ['ABATEMENT', 'PRODUCTION', 'EMISSIONS'],
        'how': [1.1, 1.2, .85]
    },
    'Usinas eólicas': {
        'title': "Usinas eólicas",
        'price': 350,
        'type': "is-primary",
        'spec': "Instalação de usinas eólicas para maior produção energética.",
        'type_tech': "energético",
        'status': 'blocked',
        'unlock': 'Giroplacas',
        'affects': ['PRODUCTIVITY', 'ABATEMENT', 'PRODUCTION'],
        'how': [1.1, 1.2, 1.2]
    },
    'Giroplacas': {
        'title': "Giroplacas",
        'price': 700,
        'type': "is-primary",
        'spec': "Desenvolvimento de sistema de placas solares autônomas que orbitam a Terra, de forma a garantir que os raios solares ao longo do dia sejam absorvidos pelas placas solares.",
        'type_tech': "energético",
        'status': 'blocked',
        'unlock': 'Fazendas de armazenamento de energia',
        'affects': ['PRODUCTIVITY', 'ABATEMENT', 'PRODUCTION'],
        'how': [1.1, 1.2, 1.2]
    },
    'Fazendas de armazenamento de energia': {
        'title': "Fazendas de armazenamento de energia",
        'price': 1500,
        'type': "is-primary",
        'spec': "Armazenamento da produção energética excedente para evitar demanda desigual ao longo do dia.",
        'type_tech': "energético",
        'status': 'blocked',
        'affects': ['PRODUCTIVITY', 'ABATEMENT', 'PRODUCTION'],
        'how': [1.1, 1.2, 1.2]
    },

        # INDUSTRIAL -----------------------
    
    'Conhecimentos industriais': {
        'title': "Conhecimentos industriais",
        'price': 50,
        'type': "industry",
        'spec': "Estudos necessários ara promover uma produção industrial ambientalmente melhor.",
        'type_tech': "industrial",
        'status': 'available',
        'unlock': 'Reciclagem otimizada',
        'affects': ['PRODUCTION', 'EMISSIONS', 'CARBON_BACKSTOP_PRICE'],
        'how': [1.3, 1.2, .85]
    },
    'Reciclagem otimizada': {
        'title': "Reciclagem otimizada",
        'price': 350,
        'type': "industry",
        'spec': "Produção industrial mais eficiente, fazendo com que a produção de lixo seja menor e ambientalmente favorável.",
        'type_tech': "industrial",
        'status': 'blocked',
        'unlock': 'Eficiência industrial',
        'affects': ['PRODUCTION', 'EMISSIONS', 'CARBON_BACKSTOP_PRICE'],
        'how': [1.3, 1.2, .85]
    },
    'Eficiência industrial': {
        'title': "Eficiência industrial",
        'price': 700,
        'type': "industry",
        'spec': "Aumento da eficiência da produção industrial, fazendo com que menos energia seja gasta para produzir os produtos.",
        'type_tech': "industrial",
        'status': 'blocked',
        'unlock': 'Catalisadores inerentes',
        'affects': ['PRODUCTION', 'EMISSIONS', 'CARBON_BACKSTOP_PRICE'],
        'how': [1.3, 1.2, .85]
    },
    'Catalisadores inerentes': {
        'title': "Catalisadores inerentes",
        'price': 1500,
        'type': "industry",
        'spec': "Veículos utilitários terão catalisadores acoplados de forma obrigatória e gratuita para diminuir a emissão dos gases estufa.",
        'type_tech': "industrial",
        'status': 'blocked',
        'affects': ['PRODUCTION', 'EMISSIONS', 'CARBON_BACKSTOP_PRICE'],
        'how': [1.3, 1.2, .85]
    },
}

data = original

def list_techs():
    return [sc for sc in data.values() if sc["status"] == "available"]


def save_techs():
    path = os.path.abspath('techs.json')
    techs = data
    with open(path, 'w') as fd:
        json.dump(techs, fd)

def load_techs():
    global data
    path = os.path.abspath('techs.json')
    with open(path, 'r') as fd:
        techs = json.load(fd)
    data = techs

def buy_tech(id):
    data[id]["status"] = "purchased"
    for tech in data.values():
        if "unlock" in data[id]:
            if(tech["title"] == data[id]["unlock"]):
                tech["status"] = "available"
    return data[id]

def get_type(type):
    techs = data.values()
    techreturn = []
    for tech in techs:
        if tech['type_tech'] == type:
            techreturn.append(tech)
    return techreturn


