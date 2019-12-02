import m from 'mithril';
import { MithrilTsxComponent as Component } from 'mithril-tsx-component';

interface ListAttrs {
    title: string;
}

class TechList extends Component<ListAttrs> {
    view(vnode){
        return<div style="margin-top: 1rem; margin-right: auto; margin-left: auto;" class="nes-container is-rounded with-title techlist">
            <div class="title nes-container is-rounded">{vnode.attrs.title}</div>
            {vnode.children}
        </div>
    }
}

export default TechList;