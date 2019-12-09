export type Law = {
    support: boolean,
    name: string,
    description: string,
    observation?: string,
    cost: number,
    progress: number,
    actions: Action[],
    variants: Variant[],
}

type Variant = {
    name: string,
    support: boolean,
    actions: Action[],
}

type Action = {
    operation: string,
    variable: string,
    value: number,
    description: string,
}

const VARIABLES = {

}


/**
 * Lista de Leis
 */
export let laws: Law[] = [
    {
        name: "Taxa de Carbono",
        description:
            `Cria um imposto sobre a poluição de gases de efeito estufa para incentivar 
            os poluidores pararem de poluir.`,
        observation:
            `Poluidores precisam sentir no bolso!`,
        support: false,
        cost: 1000,
        progress: 0,
        actions: [],
        variants: [
            variant("Greenwashing (muita conversa, pouca mudança).", [
                action("abatement:add", 0.05)
            ]),
            variant("Corte substancial: reduz emissões em 25%", [
                action("abatement:add", 0.25)
            ]),
            variant("Solução radical: reduz emissões em 90%.", [
                action("abatement:add", 0.90)
            ]),
        ]
    },
    {
        name: "Cap'n Trade",
        description:
            `Cap'n Trade impõe limites para poluição de CO2 que podem ser
            negociados no mercado. Os poluidores podem continuar poluindo, mas agora
            precisam comprar o direito de poluir daqueles que não poluem.`,
        observation:
            `Quem sabe eles não compram de você? :)`,
        support: false,
        cost: 1000,
        progress: 0,
        actions: [],
        variants: [
            variant("Greenwashing (muita conversa, pouca mudança).", [
                action("abatement:add", 0.05)
            ]),
            variant("Corte substancial: reduz emissões em 25%", [
                action("abatement:add", 0.25)
            ]),
            variant("Solução radical: reduz emissões em 90%.", [
                action("abatement:add", 0.90)
            ]),
        ]
    },
    {
        name: "Renda básica universal",
        description:
            `Todo cidadão ganha um salário básico para não fazer nada. 
            Será necessário quando a automação acabar com todos empregos.`,
        observation:
            `Alguém tem que pagar essa mamata...`,
        support: false,
        cost: 1000,
        progress: 0,
        actions: [],
        variants: [
        ]
    },
    {
        name: "Vegetarianismo obrigatório",
        description:
            `O metano produzidos pelas vacas é um dos grandes causadores de 
            efeito estufa. Acabe com o mau pela raiz.`,
        observation:
            `Com esses preços, já não dá comprar carne de todo jeito.`,
        support: false,
        cost: 1000,
        progress: 0,
        actions: [],
        variants: [
        ]
    },
    {
        name: "Proibir usinas de carvão",
        description:
            `Proíbe a utilização de carvão mineral em usinas elétricas.`,
        observation:
            `Reduz drasticamente as emissões, mas deixa energia um pouco mais cara.`,
        support: false,
        cost: 1000,
        progress: 0,
        actions: [],
        variants: [
        ]
    },
    {
        name: "Saúde para todos",
        description:
            `Cria um sistema de saúde pública para todo mundo. `,
        observation:
            `Reduz drasticamente as emissões, mas deixa energia um pouco mais cara.`,
        support: false,
        cost: 1000,
        progress: 0,
        actions: [],
        variants: [
        ]
    },
    {
        name: "Bolsa empresário",
        description:
            `Diminui impostos de empresários para aumetar a margem de lucro. Isso vai 
            engordar sua conta na Suíça.`,
        observation:
            `No jornal a gente diz que é para gerar empregos e estimular a economia...`,
        support: false,
        cost: 1000,
        progress: 0,
        actions: [],
        variants: [
        ]
    },
    {
        name: "Fim das heranças",
        description:
            `Proíbe ou limita fortemente heranças para diminuir a desigualdade social.`,
        observation:
            `Reptilianos estão pouco se lixando pois não se apegam aos filhos...`,
        support: false,
        cost: 1000,
        progress: 0,
        actions: [],
        variants: [
        ]
    },
    {
        name: "Redução da jornada de trabalho",
        description:
            `Com os benefícios do computador e da automação, as pessoas não precisam trabalhar tanto
            para sobreviver. Diminui o PIB, mas aumenta a felicidade.`,
        observation:
            `A vida é muito importante para gastar trabalhando.`,
        support: false,
        cost: 1000,
        progress: 0,
        actions: [],
        variants: [
        ]
    },
    {
        name: "Aumento da jornada de trabalho",
        description:
            `Mais gente trabalhando = Mais PIB. É claro que isso não produz um 
            aumento correspondente de salários...`,
        observation:
            `Se Deus só descansou 1 dia, porque o trabalhador quer 2?`,
        support: false,
        cost: 1000,
        progress: 0,
        actions: [],
        variants: [
        ]
    },
];



/**
 * Cria uma nova ação.
 */
function action(spec: string, value: number, description?: string): Action {
    let [operation, variable] = spec.split(':');
    if (description === null) {
        let name = VARIABLES[variable.toLowerCase()];
        if (operation === "add" && value > 0 || operation === "multiply" && value > 1) {
            description = `Aumenta ${name}.`;
        }
        else if (operation === "add" && value < 0 || operation === "multiply" && value < 1) {
            description = `Diminui ${name}.`;
        }
    }
    return { operation: operation, variable: variable, value: value, description: description };
}

/**
 * Declara uma variante da lei.
 */
function variant(name: string, actions?: Action[]): Variant {
    return {
        name: name,
        support: false,
        actions: actions || [],
    }
}