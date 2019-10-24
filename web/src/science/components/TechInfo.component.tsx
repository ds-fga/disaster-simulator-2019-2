import m from 'mithril';

class TechInfo{

    view(vnode) {
        return <div class="nes-container with-title is-rounded">
            <p class="title nes-container is-rounded">Info</p>
            <h2>{`${vnode.attrs.title}`}</h2>
            {vnode.children}
        </div>
    }
}

export default TechInfo;
