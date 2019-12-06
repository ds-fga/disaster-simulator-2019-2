import m = require('mithril');
import { IGenericAttrs, Component, VScroll } from '../../ui';

type Law = {
    support: boolean,
    name: string,
    description: string,
    observation?: string,
    cost: number,
    variants: Variant[],
}

type Variant = {
    name: string,
    support: boolean,
}


/**
 * Componente que mostra as leis aprovadas
 */
export class Propostas extends Component<IGenericAttrs> {
    laws: Law[];

    constructor() {
        super();
        this.laws = laws;
    }

    view() {
        return <VScroll>
            <div class="Propositions">
                <h2>Lista de propostas</h2>
                {this.laws.map(x => m(PropositionCard, { law: x }))}
            </div>
        </VScroll>
    }
}

export class PropositionCard extends Component<IGenericAttrs> {
    law: Law;
    collapsed: boolean = true;

    constructor(vnode) {
        super();
        this.collapsed = vnode.attrs.collapsed !== false;
        this.law = vnode.attrs.law;
    }

    view(vnode) {
        let classes = ["PropositionCard", "nes-container", "is-rounded"];
        if (this.collapsed) {
            classes.push("is-collapsed");
        }

        return <div class={classes.join(" ")} {...vnode.attrs}>
            <h2>
                <i class="fas fa-globe-americas" />{" "}
                {this.law.name}
                <button
                    class="nes-btn is-error"
                    style="float: right; top: -1rem; right: -1rem"
                    onclick={() => { this.collapsed = !this.collapsed }}
                >v</button>
            </h2>
            {this.collapsed ? null : this.viewContent(vnode)}
        </div>
    }

    viewContent(vnode) {
        let observation = this.law.observation? <p>{this.law.observation}</p>: null;

        return <div class="PropositionCard-content">
            <p>{this.law.description}</p>
            {observation}
            <form onsubmit={() => null}>
                <p><strong>Qual a sua opinião?</strong></p>
                <label>
                    <input type="radio" class="nes-radio" name="choice" checked />
                    <span>Neutro</span>
                </label>
                <label>
                    <input type="radio" class="nes-radio" name="choice" />
                    <span>Aprovar</span>
                </label>
                <label>
                    <input type="radio" class="nes-radio" name="choice" />
                    <span>Sabotar</span>
                </label>

                <div style="display: flex">
                    <progress class="nes-progress is-primary" value="50" max="100" style="flex: 1"></progress>
                    <button class="nes-btn is-primary">lobby</button>
                </div>
            </form>
        </div >
    }
}


let laws: Law[] = [
    {
        name: "Taxa de Carbono",
        description:
            `Cria um imposto sobre a utilização de carbono. Acredita-se que a criação de 
            uma taxa de carbono pode ser uma política eficiente para incentivar a utilização 
            de energias mais limpas e corrigir distorções fazendo os poluidores pagarem um 
            prejuízo por sua poluição`,
        support: false,
        cost: 1000,
        variants: [
        ]
    },
    {
        name: "Cap'n Trade",
        description:
            `O sistema Cap'n Trade estabelece limites para poluição de CO2 que podem ser
            negociados no mercado. Os poluidores podem continuar poluindo, mas agora
            tem que pagar por isso.`,
        observation: `Quem sabe pagam para você! :)`,
        support: false,
        cost: 1000,
        variants: [
        ]
    },
    {
        name: "Renda básica universal",
        description:
            `Todo cidadão ganha um salário básico para não fazer nada. 
            Será necessário quando a automação acabar com todos empregos.`,
        observation: `Alguém tem que pagar essa mamata...`,
        support: false,
        cost: 1000,
        variants: [
        ]
    },
    {
        name: "Vegetarianismo obrigatório",
        description:
            `O metano produzidos pelas vacas é um dos grandes causadores de 
            efeito estufa. Acabe com o mau pela raiz.`,
        observation: `(O pobre já não consegue comprar carne de todo jeito...)`,
        support: false,
        cost: 1000,
        variants: [
        ]
    },
    {
        name: "Proibir usinas de carvão",
        description:
            `Proíbe a utilização de carvão mineral em usinas elétricas.`,
        observation: `Reduz drasticamente as emissões, mas deixa energia um pouco mais cara.`,
        support: false,
        cost: 1000,
        variants: [
        ]
    },
    {
        name: "Saúde para todos",
        description:
            `Cria um sistema de saúde pública para todo mundo. `,
        observation: `Reduz drasticamente as emissões, mas deixa energia um pouco mais cara.`,
        support: false,
        cost: 1000,
        variants: [
        ]
    },
    {
        name: "Bolsa empresário",
        description:
            `Diminui impostos de empresários para aumetar a margem de lucro.`,
        observation: `No jornal a gente diz que é para gerar empregos e estimular a economia...`,
        support: false,
        cost: 1000,
        variants: [
        ]
    },
    {
        name: "Fim das heranças",
        description:
            `Proíbe ou limita fortemente heranças para diminuir a desigualdade social.`,
        observation: `Reptilianos estão pouco se lixando pois não cuidam dos filhos...`,
        support: false,
        cost: 1000,
        variants: [
        ]
    },
    {
        name: "Redução da jornada de trabalho",
        description:
            `Com os benefícios do computador e da automação, as pessoas não precisam trabalhar tanto
            para sobreviver.`,
        observation: `A vida é muito importante para gastar trabalhando.`,
        support: false,
        cost: 1000,
        variants: [
        ]
    },
    {
        name: "Aumento da jornada de trabalho",
        description:
            `Mais gente trabalhando = Mais PIB. É claro que isso não produz um aumento de salários...`,
        observation: `Se Deus só descansou 1 dia, porque o trabalhador quer 2?`,
        support: false,
        cost: 1000,
        variants: [
        ]
    },
] 