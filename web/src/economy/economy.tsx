import m from 'mithril';
import {Window, Tab, Tabs, Btn, Sidebar, VScroll} from '../ui';
import exampleImg from '../../src/economy/teste.jpg';
//colocar imagem. exampleImg nome <img src={exampleImg}></img>

export class Economy {
    view () {
        return <div>
            <Window>
                <Sidebar title="Economia" points="4" src={exampleImg}/>
                <Tabs>
                    <Tab title="Ações">
                        <div class="flex-container">
                            <div style="flex-grow: 1">
                                <h1>Lucro</h1>
                                <ExpandirCard title="Título ">
                                    <DescricaoDoItem/>
                                </ExpandirCard>
                            </div>

                            <div style="flex-grow: 1">
                                <h1>Prejuizo</h1>
                                <ExpandirCard title="teste ">
                                    <DescricaoDoItem/>
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

export class DescricaoDoItem {
    view (vnode) {
        var attribute; //dependendo do attribute (0 ou 1) ele fica verde ou vermelho
        var color; //aplicar no texto com class={color}

        attribute == 0 ? color = "Economy-bad-color" : color = "Economy-good-color";

        return <div>
            <div class="flex-container">
                <div style="justify-content: flex-start">
                    <img src={exampleImg}></img>
                </div>
                <div style="flex-grow: 1">
                    <p>alguma descrição boa</p>
                </div>
                <div style="justify-content: flex-end">
                    <p>Atributos: </p>
                    <p class={color}>Coisa boa</p>
                    <p class={color}>Coisa ruim</p>
                </div>
            </div>
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