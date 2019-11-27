import m from 'mithril';
import { MithrilTsxComponent as Component } from 'mithril-tsx-component';
import { VScroll } from '../../ui';

interface IGenericAttrs {
    class?: string | string[];
    id?: string;
    onclick?: Function;
}

export class Tabs extends Component<IGenericAttrs> {
    selected: number;

    constructor(vnode) {
        super();
        this.selected = vnode.attrs.selected || 0;
    }

    view(vnode) {
        return <div class="Tabs">
            {this.viewTabs(vnode)}
            {this.viewContent(vnode)}
        </div>
    }

    changeBackground(vnode) {
        let tabview = document.querySelector(".scienceContent") as HTMLElement;
        if(tabview !== null){
            let background = vnode.attrs.background || "";
            let style = tabview.style;
            if (background !== ""){
                style.backgroundImage = `url(${vnode.attrs.background})`;
                style.backgroundRepeat = "repeat";
                style.backgroundSize = "100%";
                style.backgroundPosition = "top left"
                style.transition = "0.5s";
            } else{
                style.backgroundColor = '#fff';
            }
        }
    }

    viewTabs(vnode) {
        let selected = this.selected,
            self = this,
            titles = vnode.children.map((e, i) => {
                let cls = "Tabs-tab scienceTabs";
                    cls += i == selected ? " is-selected" : "";
                return <div class={cls} 
                            onclick={() => {self.selected = i}}>
                            {e.attrs.title}</div>
            });
    return <div class="Tab-head scienceHead">{titles}</div>;
    }
    
    viewContent(vnode) {
        this.changeBackground(vnode.children[this.selected]);
        return <div class="Tabs-Content">
            {vnode.children[this.selected]}
        </div>
    }
}


interface Sattrs extends IGenericAttrs {
    title: string;
    background?: string;
}

export class Tab extends Component<Sattrs> {
    title: string;

    constructor(vnode) {
        super();
        this.title = vnode.attrs.title || 'Tab';
    }

    view(vnode) {
        return <div class="Tab scienceTab">
                {vnode.children}
            </div>
    }
};