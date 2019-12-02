import m from 'mithril';


class TechInfo{
    view(vnode) {
        var spec = vnode.attrs.spec;
        var title = vnode.attrs.title;
        var techDisplay;
        var titleDisplay;

        if (spec !== ""){
            techDisplay = spec;
            titleDisplay = title;
        } else {
            techDisplay = "Selecione uma tecnologia para saber os seus detalhes";
            titleDisplay = "Nenhuma tecnologia selecionada";
        }

        return (<div class="nes-container with-title is-rounded">
            <p class="title nes-container is-rounded">Info</p>
            <h2>{`${titleDisplay}`}</h2>
            {techDisplay}
            {vnode.children}
        </div>)
    }
}

export default TechInfo;
