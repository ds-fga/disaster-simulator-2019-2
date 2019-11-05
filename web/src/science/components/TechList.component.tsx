import m from 'mithril';

class TechList {
    view(vnode){
        return <div style="margin-top: 1rem" class="nes-container is-rounded with-title ">
            <div class="title nes-container is-rounded">Tecnologias disponíveis</div>
            {vnode.children}
        </div>
    }
}

export default TechList;