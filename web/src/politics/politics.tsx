import m from 'mithril';
import {Window, Tab, Tabs, Btn, Sidebar, VScroll} from '../ui';
import exampleImg from './example.jpeg';

/**
 * Componente que mostra janela de política
 */
export class Politics {
    view () {
        return <Window>
            <div>
                <h1>Politica</h1>
                <CollapseCard title="Hello Card!">
                    <h2>Hello World!</h2>
                    <img src={exampleImg}></img>
                </CollapseCard>

                <CollapseCard title="Card2">
                    <h2>Hello 2!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt lorem velit, non vulputate risus posuere sit amet. Ut at ultricies neque, et elementum ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque porttitor sapien mi, eu pellentesque metus lacinia in. Suspendisse cursus, felis sollicitudin porta consequat, velit lorem imperdiet neque, vel sollicitudin lacus urna vitae dolor. Vivamus pharetra accumsan posuere. Vestibulum porta massa ut scelerisque hendrerit. Sed fermentum mi non est feugiat fermentum non id purus. Aliquam gravida lectus tristique efficitur rhoncus. Cras vestibulum rhoncus malesuada. Etiam vitae orci ac justo laoreet tempus a nec urna. Fusce mattis porta sapien, eget scelerisque est. Vestibulum vel eros aliquam, elementum purus ornare, porta nibh. Quisque gravida eu lectus a ultricies.</p>
                </CollapseCard>
            </div>
        </Window>
    }
}


export class CollapseCard {
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
