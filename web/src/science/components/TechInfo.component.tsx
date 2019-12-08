import m from 'mithril';
import {MithrilTsxComponent as Component} from 'mithril-tsx-component'

interface InfoAttrs {

}

class TechInfo extends Component<InfoAttrs>{
    
    view(vnode) {
        var spec = vnode.attrs.spec;
        var title = vnode.attrs.title;
        var listInfo = vnode.attrs.listInfo;
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
        return (
          <div style="margin-right: auto; margin-left: auto;" class="nes-container with-title is-rounded scienceInfo">
              <div class="title" style={'display: flex; justify-content: space-between'}>
                <p style={'padding: .3rem; height: 2.5rem'} class="nes-container is-rounded">Info</p>
                <p style={'padding: .3rem; height: 2.5rem; color: rgb(120, 160, 65)'} class="nes-container is-rounded">${vnode.attrs.money}</p>
              </div>
              <h2>{`${titleDisplay}`}</h2>
              <p>{techDisplay}</p>
              {vnode.children}
          </div>
        )
    }
}

export default TechInfo;
