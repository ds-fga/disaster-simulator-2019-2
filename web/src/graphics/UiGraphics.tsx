import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Chart, VScroll, Component } from '../ui';
import { MithrilTsxComponent as Component } from 'mithril-tsx-component';

interface IGenericAttrs {
    class?: string | string[];
    id?: string;
    onclick?: Function;
}
// tipos de butoes
interface Gbtn extends IGenericAttrs {
    btn?: "primary" | "success" | "warning" | "error" | "disabled" | "normal";
}

export class GraphicsButton extends Component<Gbtn>{
    view(vnode: m.Vnode<Gbtn>) {
        let extraclass = vnode.attrs.btn;
        return <button type="button" class={`nes-btn is-${extraclass}`}>{vnode.children}</button>
    }

}
