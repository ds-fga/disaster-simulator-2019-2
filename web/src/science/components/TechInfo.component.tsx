import m from 'mithril';

class TechInfo{
    view(vnode) {

        var spec = vnode.attrs.spec;
        var title = vnode.attrs.title;
        var techDisplay;
        var titleDisplay;
        var effect1 = vnode.attrs.effect1;
        var effect2 = vnode.attrs.effect2;

        if (spec !== ""){
            techDisplay = spec;
            titleDisplay = title;
        } else {
            techDisplay = "Selecione uma tecnologia para saber os seus detalhes";
            titleDisplay = "Nenhuma tecnologia selecionada";
        }

        return <div style="margin-right: auto; margin-left: auto;" class="nes-container with-title is-rounded scienceInfo">
            <p class="title nes-container is-rounded">Info</p>
            <h2>{`${titleDisplay}`}</h2>
            {techDisplay}
        </div>
    }
}

export default TechInfo;
