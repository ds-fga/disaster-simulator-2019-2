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

        var isDisabled;
        if (vnode.attrs.status === "2"){
            isDisabled = " unTech";
        }else{
            isDisabled = "";
        }

        return <button onclick={vnode.attrs.changeHandler} class={`nes-btn tech-btn ${vnode.attrs.type} ${isDisabled}`} data-tilt>
            <div class="TechText"><p class="TechTitle">{vnode.attrs.title}</p>
            <p>R${`${vnode.attrs.money}`}</p></div>
        </button>
    }
}

export default Tech;
