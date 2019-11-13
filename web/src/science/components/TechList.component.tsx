import m from 'mithril';

class TechList {
    view(vnode){
        return<div style="margin-top: 1rem" class="nes-container is-rounded with-title techlist">
            <div class="title nes-container is-rounded">Tecnologias disponíveis</div>
            <div class="listcontent">{vnode.children}</div>
        </div>
    }
}

export default TechList;