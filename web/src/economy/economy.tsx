import m from 'mithril';
import {Window, Tab, Tabs, Btn, Sidebar, VScroll} from '../ui';
//import exampleImg from './teste.jpg";
//colocar imagem. exampleImg nome <img src={exampleImg}></img>

/**
 * Componente para janela de economia.
 */
export class Economy {
    view () {
        return <div>
            <Window>
                <Sidebar title="Economia" points="4"/>
                <Tabs>
                    <Tab title="Ações">
                        <div class="flex-container">
                            <div style="flex-grow: 1">
                                <p>Lucro</p>
                                <ExpandirCard title="teste ">
                                    <h1>aaaaaaa</h1>
                                </ExpandirCard>
                            </div>
                            <div style="flex-grow: 1">
                                <p>Prejuizo</p>
                                <ExpandirCard title="teste2 ">
                                    <h1>aaaaaaa</h1>
                                </ExpandirCard>
                            </div>
                        </div>

                    </Tab>

                    <Tab title="Mercado">
                    </Tab>

                    <Tab title="Inventário">
                    </Tab>

                    <Tab title="?">
                    </Tab>
                </Tabs>
            </Window>
        </div>
    }
}

export class ExpandirCard {
    constructor(vnode) {
        this.expand = false;
    }

    view (vnode) {
        var buttonOn = "nes-btn scroll-btn Economy-button";
        var content;
        
        if(this.expand) {
            content = vnode.children;
            buttonOn += " Economy-button-on"
        }
        else {
            content = "";
        }

        return <VScroll class="EconomyCard">
            <div class="nes-container with-title is-rounded">   
                <div class="EconomyCard-title">
                    {vnode.attrs.title}
                    <button type="button" class={buttonOn} onclick={() => {this.expand = !this.expand}}>
                        <span>&lt;</span>
                    </button>
                    <hr></hr>
                </div>
            
                <div class="EconomyCard-content">
                    {content}
                </div> 
            </div>
        </VScroll>
    }
}

//criar um div na window pq só le um filho
//vscroll rolamento
//vnode.attrs pegar algum atributo passado
//hr é a linha -----------
//constructor uma variável é criada localmente