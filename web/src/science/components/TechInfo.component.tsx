import m from 'mithril';
import {MithrilTsxComponent as Component} from 'mithril-tsx-component'

interface InfoAttrs {

}

class TechInfo extends Component<InfoAttrs>{
    constructor(){
        super();
    }

    progress(prog) {
        if (prog >= 0 && prog <= 100) {
            return(<progress class="nes-progress is-success" value={prog} max="100"/>)
        }
    }
    
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
            {this.progress(vnode.attrs.progress)}
            <button type="button" onclick={vnode.attrs.add} class="nes-btn is-success">Aumenta progresso</button>
            <button type="button" onclick={vnode.attrs.minus} class="nes-btn is-error">Diminui progresso</button>
        </div>
    }
}

export default TechInfo;
