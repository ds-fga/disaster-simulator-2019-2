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
                                    <DescricaoDoItem color="red" src={exampleImg}/>
                                </ExpandirCard>
                            </div>

                            <div style="flex-grow: 1">
                                <h1>Prejuizo</h1>
                                <ExpandirCard title="teste ">
                                    <DescricaoDoItem color="red" desc="teste"/>
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
        var color; //aplicar no texto com class={color}

        //dependendo do attribute (0 ou 1) ele fica verde ou vermelho
        vnode.attrs.color === "red" ? color = "Economy-bad-color" : color = "Economy-good-color";

        return <div>
            <div class="flex-container">

                <div style="justify-content: flex-start">
                    <img src={vnode.attrs.src}></img>
                </div>

                <div style="flex-grow: 1">
                    <h3>Descrição:</h3>
                    <p>{vnode.attrs.desc}</p>
                    
                </div>
                <div style="justify-content: flex-end">
                    <h3>Atributos:</h3>
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