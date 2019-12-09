export class Card {
    expanded: boolean;

    constructor(vnode) {
        this.expanded = vnode.attrs.expanded;
    }

    view (vnode) {
        
        let btn_expnd = vnode.attrs.btn_expnd;
        let title = vnode.attrs.title || "Sem título";
        let imagem = vnode.attrs.img;
        let children = vnode.children;
        let childrenStyle;

        if (this.expanded) {
            childrenStyle = "";
        } 
        else {
            childrenStyle = "display: none";
        }

        return <div class="nes-container is-rounded">
            <div>
                <h2>
                    <img src={imagem} width="350" height="350"></img>
                    <div class="card_title">
                        {title}
                    </div>
                </h2>
                    <button class="nes-btn is-error" style="float: right; right: -1rem; top: -2rem;" onclick={() => { this.expanded = !this.expanded; }}>{btn_expnd}</button>
            </div>
            <div style={childrenStyle}>
                {children}
            </div>
        </div>
    }
}
export class CardTEXTO {
    expanded: boolean;

    constructor(vnode) {
        this.expanded = vnode.attrs.expanded;
    }

    view (vnode) {
        
        let btn_expnd = vnode.attrs.btn_expnd;
        let title = vnode.attrs.title || "Sem título";
        let imagem = vnode.attrs.img;
        let children = vnode.children;
        let childrenStyle;

        if (this.expanded) {
            childrenStyle = "";
        } 
        else {
            childrenStyle = "display: none";
        }

        return <div class="nes-container is-rounded">
            <div>
                <h2><img src={imagem} widht="50" height="50"></img>{title}</h2>
                    <button class="nes-btn is-error" style="float: right; right: -1rem; top: -2rem;" onclick={() => { this.expanded = !this.expanded; }}>{btn_expnd}</button>
            </div>
            <div style={childrenStyle}>
                {children}
            </div>
        </div>
    }
}