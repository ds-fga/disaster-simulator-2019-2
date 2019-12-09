import m from 'mithril';
import { MithrilTsxComponent as Component } from 'mithril-tsx-component';

interface TechAttrs {
    title: string;
    money: string;
}

class Tech extends Component<TechAttrs> {
    
    constructor(vnode){
        super();
    }

    showMoney(status, money){
        if(status !== "purchased"){
            return("$" + money);
        }
    }

    view(vnode){

        var isDisabled;
        if (vnode.attrs.status === "blocked"){
            isDisabled = " unTech";
        }else{
            isDisabled = "";
        }

        return <button id={vnode.attrs.title} onclick={vnode.attrs.changeHandler} ondblclick={vnode.attrs.dbclick} class={`nes-btn tech-btn ${vnode.attrs.type} ${isDisabled}`}>
            <div class="TechText"><p class="TechTitle">{vnode.attrs.title}</p>
            <p>{this.showMoney(vnode.attrs.status, vnode.attrs.money)}</p></div>
        </button>
    }
}

export default Tech;
