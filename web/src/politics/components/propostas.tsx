import m = require('mithril');
import {IGenericAttrs, Component, VScroll} from '../../ui';

type Law =  {
    support: boolean,
    name: string,
    description: string,
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

    view () {
        return <VScroll>
            <div class="Proposition">
                <h2>Lista de propostas</h2>
                {this.laws.map(x => m(PropositionCard, {law: x}))}
            </div>
        </VScroll>
    }
}

export class PropositionCard extends Component<IGenericAttrs> {
    law: Law;

    view(vnode) {
        let law = vnode.attrs.law;

        return <div class="nes-container is-rounded">
            <h2>{law.name}
                <button class="nes-btn is-error" 
                        style="float: right; top: -1rem; right: -1rem">v</button></h2>
            <div>
            <p>{law.description}</p>
            </div>
        </div>
    }
}


let laws : Law[] = [
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
    }
] 