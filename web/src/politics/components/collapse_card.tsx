import {VScroll} from '../../ui';


export class CollapseCard {
    expand: boolean; 

    constructor(vnode) {
        this.expand = false;
    }

    view (vnode) {
        var content;
        var btnClass = "nes-btn is-error PoliticsCard-button";
        if (this.expand) {
            content = vnode.children;
            btnClass += " is-rotated"
        }
        else {
            content = "";
        }


        return <VScroll class="PoliticsCard">
            <div class="PoliticsCard-title" 
                 onclick={() => { this.expand = !this.expand;}}>
                {vnode.attrs.title}
                <button type="button" class={btnClass}>
                    <span>&lt;</span>
                </button>
                <hr></hr>
            </div>
            <div class="PoliticsCard-content">
                {content}
            </div>
        </VScroll>
    }
}
