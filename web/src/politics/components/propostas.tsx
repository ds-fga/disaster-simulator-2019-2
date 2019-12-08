import m = require('mithril');
import { IGenericAttrs, Component, VScroll } from '../../ui';
import { Law, laws } from '../laws';



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