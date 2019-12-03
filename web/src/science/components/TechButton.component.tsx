import m from 'mithril';

const TechButton = {
  view: function(vnode) {
    return (
      <button onclick={vnode.attrs.onclick} type="button" class="nes-btn is-primary">
        {vnode.children}
      </button>
    )
  }
}

export default TechButton;