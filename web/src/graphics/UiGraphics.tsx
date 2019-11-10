import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Chart, VScroll, Component } from '../ui';
import { MithrilTsxComponent as Component } from 'mithril-tsx-component';


interface IGenericAttrs {
    class?: string | string[];
    id?: string;
    onclick?: Function;
}

}
export abstract class Elem extends Component<Object> {
    // Classe abstrata
}

export class GraphicTabs extends Elem {
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
        let graphicswindow = window.document.querySelector("#GraphicsWindow");
        let background = vnode.attrs.background || "";
        if (background != "")
            graphicswindow.style.background = `url(${vnode.attrs.background})`;
    }

    viewTabs(vnode) {
        let selected = this.selected,
            self = this,
            titles = vnode.children.map((e, i) => {
                let cls = "Graphics Tabs-tab";
                cls += i == selected ? " is-selected" : "";
                let btn = e.attrs.btn || "warning";
                btn = i == selected ? "primary" : btn;
                return <div class={cls}
                    onclick={() => {self.selected = i; }}>
                    <GraphicsButton btn={btn} onclick={e.attrs.onclick || ""}>{e.attrs.title}</GraphicsButton>
                </div>
            });
    return <div class="Graphics Tab-head">{titles}</div>;
    }
    
    viewContent(vnode) {
        this.changeBackground(vnode.children[this.selected]);
        let extraclass = vnode.children[this.selected].attrs.title || ""
        return <div class={`Graphics Tabs-Content ${extraclass}`}>
            {vnode.children[this.selected]}
        </div>
    }
}


interface Sattrs extends IGenericAttrs {
    btn?: "primary" | "success" | "warning" | "error" | "disabled" | "normal";
    title: string;
    background?: string;
}

export class Tab extends Component<Sattrs> {


    view(vnode) {
        return <div class="Tab">
            {vnode.children}
        </div>
    }
};

// tipos de butoes


export class GraphicsButton extends Component<Sattrs>{
   view(vnode: m.Vnode<Sattrs>) {
        let extraclass = vnode.attrs.btn || "normal";
        let fonclick = vnode.attrs.onclick || ""
        return <button type="button" class={`Graphics nes-btn is-${extraclass}`} onclick={fonclick}>{vnode.children}</button>
    }
