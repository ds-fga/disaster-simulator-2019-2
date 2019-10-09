import m from 'mithril';
import { Window, Code, Sidebar, VScroll } from './ui';
import terminatorImg from '../img/events/terminator.jpg';

let show = {
    titles: false,
    sidebar: false,
};

/**
 * Componente para janela com árvore tecnológica e de desenvolvimento científico.
 */
export class Style {
    view(vnode) {
        return <Window {...vnode.attrs}>
            <VScroll>
                <h1>Estilos do HTML</h1>

                <h2>Elementos</h2>
                {code('Tipografia', 'titles',
                    `<h1>Título h1</h1>
<h2>Título h2</h2>
<h3>Título h3</h3>
<h4>Título h4</h4>
<h5>Título h5</h5>
<h6>Título h6</h6>`)}

                <h2>Componentes</h2>
                {code('Sidebar', 'sidebar', 
                      `<Sidebar title="Style" points="2" src="image.jpg"/>`, 
                      <Sidebar title="Style" points="2" src={terminatorImg}/>)}
            </VScroll>
        </Window>
    }
}


function code(title, id, html, rendered=undefined) {
    function toggle() {
        show[id] = !isExpanded;
    }

    let isExpanded = show[id] || false,
        showCode = <button class="nes-btn is-primary showcode" onclick={toggle}>{"<>"}</button>,
        code = isExpanded ? [showCode, <div><Code lang="html">{html}</Code></div>] : showCode;
    rendered = rendered || m.trust(html);

    return <div class="nes-container with-title">
        <h3 class="title">{title}</h3>
        <div>{rendered}</div>
        {code}
    </div>
}