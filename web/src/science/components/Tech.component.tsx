import m from 'mithril';
import { MithrilTsxComponent as Component } from 'mithril-tsx-component';


class Tech extends Component {
    title: string;
    money: string;
    myClass: string;

    constructor(vnode){
        super();
    }

    view(vnode){
        return <button onclick={vnode.attrs.changeHandler} class={`nes-btn tech-btn ${vnode.attrs.type}`}>
            <p>{vnode.attrs.title}</p>
            <p>R${`${vnode.attrs.money}`}</p>
        </button>
    }
}

export default Tech;