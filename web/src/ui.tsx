import m = require('mithril');
import Prism = require('prismjs');
import ChartJS = require('chart.js');
import { classes } from './utils';
import { model } from './model';
import { MithrilTsxComponent as Component } from 'mithril-tsx-component';
import { type } from 'os';
export { MithrilTsxComponent as Component } from 'mithril-tsx-component';


/**
 * Classe base para os componentes genéricos.
 */
export abstract class Elem extends Component<Object> {
    // Classe abstrata
}

interface IGenericAttrs {
    class?: string | string[];
    id?: string;
    onclick?: Function;
}



//////////////////////////////////////////////////////////////////////////////
// BOTOES
//----------------------------------------------------------------------------

interface IBtnAttrs extends IGenericAttrs {
    btn?: "primary" | "success" | "warning" | "error" | "disabled" | "normal";
}

/**
 * Cria um botão com o estilo do NES.css
 */
export class Btn extends Component<IBtnAttrs> {
    view(vnode: m.Vnode<IBtnAttrs>) {
        let extraClasses = '';
        return <button class={`btn ${extraClasses}`}>{vnode.children}</button>
    }
}


//////////////////////////////////////////////////////////////////////////////
// BARRA LATERAL
//----------------------------------------------------------------------------

interface ISidebarAttrs extends IGenericAttrs {
    src: string;
    title?: string;
    back?: boolean;
    points?: number | string;
}

/**
 * Cria uma barra lateral que possui imagem de fundo 
 * 
 * Atributos
 */
export class Sidebar extends Component<ISidebarAttrs> {
    view(vnode: m.Vnode<ISidebarAttrs>) {
        let footer = () => {
            let pointsElem = null;
            if (back || points) {
                if (points !== undefined) {
                    pointsElem = <div class="Sidebar-points">+{points}</div>
                }
                return <div class="Sidebar-footer">
                    <div class="Sidebar-back">
                        <button>{"<"}</button>
                        <span>Voltar</span>
                    </div>
                    {pointsElem}
                </div>
            }
            return null;
        }

        let attrs = vnode.attrs,
            title = attrs.title,
            back = attrs.back,
            points = attrs.points,
            head = title ? m('.Sidebar-title', title) : null;

        return <div class={classes('Sidebar', attrs.class)}>
            {head}
            <img src={attrs.src} />
            {footer()}
        </div>
    }
}


//////////////////////////////////////////////////////////////////////////////
// TABS
//----------------------------------------------------------------------------

interface ITabAttrs extends IGenericAttrs {
    title: string;
}

export class Tabs extends Elem {
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
                return <div class={cls} 
                            onclick={() => {self.selected = i}}>
                            {e.attrs.title}</div>
            });
        return <div class="Tabs-head">{titles}</div>;
    }

    viewContent(vnode) {
        return <div class="Tabs-content">
            {vnode.children[this.selected]}
        </div>
    }
}


export class Tab extends Component<ITabAttrs> {
    title: string;

    constructor(vnode) {
        super();
        this.title = vnode.attrs.title || 'Tab';
    }

    view(vnode) {
        return <div class="Tab">
            {vnode.children}
        </div>
    }
};


//////////////////////////////////////////////////////////////////////////////
// JANELA PRINCIPAL
//----------------------------------------------------------------------------

export class Window extends Elem {
    view(vnode: m.Vnode) {
        let { children, attrs } = vnode,
            cls = classes('Window', attrs),
            hasSidebar = children[0].tag === Sidebar;
        if (hasSidebar) {
            cls = classes(cls, 'has-sidebar');
        }
        return <div {...attrs} class={cls}>{children}</div>
    }
}


//////////////////////////////////////////////////////////////////////////////
// OUTROS
//----------------------------------------------------------------------------

interface ICodeAttrs extends IGenericAttrs {
    lang: string;
}


export class Code extends Component<ICodeAttrs> {
    view(vnode: m.Vnode<ICodeAttrs>) {
        let { children, attrs } = vnode,
            lang = attrs.lang || 'html',
            src = Prism.highlight(children[0], Prism.languages[lang], lang);

        return <pre class={`language-${lang}`}>{m.trust(src)}</pre>
    }
}

interface IChartAttrs extends IGenericAttrs {
    type: string;
    data: object;
    options: object;
    width?: number;
    height?: number;
}

export class Chart extends Component<IChartAttrs> {
    chart: any;

    oncreate(vnode: m.Vnode<IChartAttrs>) {
        let {type, data, options} = vnode.attrs,
            canvas = document.createElement('CANVAS'),
            dom: HTMLElement = vnode.dom;
        canvas.setAttribute('width', (vnode.attrs.width || 190).toString());
        canvas.setAttribute('height', (vnode.attrs.height || 90).toString());
        dom.appendChild(canvas);
        this.chart = new ChartJS(canvas, {type: type, data: data, options: options});
    }

    view(vnode: m.Vnode<IChartAttrs>) {
        let attrs = {...vnode.attrs};
        ["type", "data", "options", "width", "height"].map(x => {delete attrs[x]});
        return <div class="Chart" {...attrs}></div>
    }
}


//////////////////////////////////////////////////////////////////////////////
// COMPONENTES DE ESTILO
//----------------------------------------------------------------------------

export let VScroll = 'div.VScroll';