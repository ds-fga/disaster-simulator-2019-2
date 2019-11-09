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

    viewTabs(vnode) {
        let selected = this.selected,
            self = this,
            titles = vnode.children.map((e, i) => {
                let cls = "Tabs-tab";
                    cls += i == selected? " is-selected": "";
                let id = e.attrs.title || "";
                return <div id={`Graphics-Tab-${id}`} class={cls} 
                            onclick={() => {self.selected = i}}>
                            {e.attrs.title}</div>
            });
        return <div class="Tabs-head" id="Graphics-Tabs-Head">{titles}</div>;
    }

    viewContent(vnode) {
        let id = vnode.children[this.selected].attrs.title || ""
        return <div class="Tabs-Content" id={`Tabs-Content-Graphics-${id}`}>
            {vnode.children[this.selected]}
        </div>
    }
}


interface ITabAttrs extends IGenericAttrs {
    title: string;
}

export class Tab extends Component<ITabAttrs> {

    
        view(vnode) {
            return <div class="Tab">
                {vnode.children}
            </div>
        }
    };

    // tipos de butoes
interface Gbtn extends IGenericAttrs {
    btn?: "primary" | "success" | "warning" | "error" | "disabled" | "normal";
}

export class GraphicsButton extends Component<Gbtn>{
    view(vnode: m.Vnode<Gbtn>) {
        let extraclass = vnode.attrs.btn;
        return <button type="button" class={`nes-btn is-${extraclass}`}>{vnode.children}</button>
    }