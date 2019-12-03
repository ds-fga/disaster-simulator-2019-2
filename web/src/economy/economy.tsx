import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, VScroll } from '../ui';
import sidebarImage from '../economy/idosa.jpg';
import testImage from '../economy/testando.jpg';
import dataEconomy from '../economy/economyData.json';
//colocar imagem. exampleImg nome <img src={exampleImg}></img>

function createCard ({ title, description, attrs, compraDeItem }) {
    var points = 1;     //exportar do python

    function viewAttr ({ name, color, points }) {
        return <tr style={color}><td>{name}</td> <td>{points}</td></tr>
    }

    function createBotao ({ btnAberto, preco }) {
        function buying () {
            if (points >= preco) {
                points -= preco;
                dataEconomy.compraDeItem[btnAberto] = false;     //alterar no json
            }
            else {
                return alert("ERROR: não há pontos suficiente. Tente novamente na rodada seguinte.");       //tentar mudar para o nes-css
            }
        }

        if (btnAberto) {
            return <div> 
                <tr><h2>{preco}</h2></tr>
                <div>
                    <button class="nes-btn" onclick={buying}>
                        <span>Comprar</span>
                    </button>
                </div>
            </div>
        }
        else {
            return <div>
                <tr><h2>{preco}</h2></tr>
            </div>
        }
    }

    return <ExpandirCard title={title}>
        <h2>Descrição</h2>
        <p>{description}</p>
        <table>
            <thead>
                <tr><h3><th>Atributos</th></h3></tr>
                {attrs.map(viewAttr)}
            </thead>
            <tbody>
                <tr><h3><th>Preço</th></h3></tr>
                {compraDeItem.map(createBotao)}
            </tbody>
        </table>
        
    </ExpandirCard>
}

function createCardSimple ({ title, description, attrs, compraDeItem }) {
    function createBotao ({ btnAberto, preco }) {
        var points = 1;     //exportar do python
        function buying () {
            if (points >= preco) {
                points -= points;
                btnAberto = !btnAberto;     //alterar no json
            }
            else {
                return alert("ERROR: dinheiro insuficiente. Tente novamente mais tarde.");       //tentar mudar para o nes-css
            }
        }

        if (btnAberto) {
            return <div> 
                <tr><h2>{preco}</h2></tr>
                <div>
                    <button class="nes-btn" onclick={buying}>
                        <span>Comprar</span>
                    </button>
                </div>
            </div>
        }
        else {
            return <div>
                <tr><h2>{preco}</h2></tr>
            </div>
        }
    }

    return <ExpandirCard title={title}>
        <h2>Descrição</h2>
        <p>{description}</p>
        <table>
            <thead>
                <tr><h3><th>Atributos adicionais</th></h3></tr>
                <p>{attrs}</p>
            </thead>
            <tbody>
                <tr><h3><th>Preço</th></h3></tr>
                {compraDeItem.map(createBotao)}
            </tbody>
        </table>
    </ExpandirCard>
}

function createCardImage ({ title, description, imagemReferencia, compraDeItem }) {
    function createBotao ({ btnAberto, preco, titleBtn }) {
        var points = 1;     //exportar do python
        function buying () {
            if (points >= preco) {
                points -= points;
                btnAberto = !btnAberto;     //alterar no json
            }
            else if (points < preco && titleBtn === "Comprar"){
                return alert("ERROR: dinheiro insuficiente. Tente novamente mais tarde.");       //tentar mudar para o nes-css
            }
            else if (titleBtn === "Vender"){
                return alert("Ao vender esse item, irá lhe recomensar metade do seu preço");
            }
        }

        if (btnAberto) {
            return <div> 
                <tr><h2>R${preco},00</h2></tr>
                <div>
                    <button class="nes-btn" onclick={buying}>
                        <span>{titleBtn}</span>
                    </button>
                </div>
            </div>
        }
        else {
            return <div>
                <tr><h2>R${preco},00</h2></tr>
            </div>
        }
    }

    return <ExpandirCard title={title}>
        <table>
            <thead>
                <td class="EconomyDesc-Image">
                    <img src={imagemReferencia}></img>
                </td>
                <td>
                    <h2>Descrição</h2>
                    <p>{description}</p>
                </td>
                    <tr><h3><th>Preço</th></h3></tr>
                    {compraDeItem.map(createBotao)}
            </thead>
        </table>
    </ExpandirCard>
}

export class Economy {
    view() {
        return <div>
            <Window>
                <Sidebar title="Economia" points="4" src={sidebarImage} />
                <Tabs>
                    <Tab title="Ações">
                        <div class="flex-container">
                            <div style="flex-grow: 1">
                                <h1>Lucro</h1>
                                {dataEconomy.lucro.map(createCard)}
                            </div>
                            <div style="flex-grow: 1">
                                <h1>Prejuizo</h1>
                                {dataEconomy.prejuizo.map(createCard)}
                            </div>
                        </div>
                    </Tab>

                    <Tab title="Mercado">
                        <div class="flex-container">
                            <div style="flex-grow: 1">
                                <h1>Investimentos</h1>
                                {dataEconomy.investimentos.map(createCardSimple)}
                            </div>
                            <div style="flex-grow: 1">
                                <h1>Luxos</h1>
                                {dataEconomy.luxos.map(createCardImage)}
                            </div>
                        </div>
                    </Tab>

                    <Tab title="Inventário">
                        <div class="flex-container">
                            <div style="flex-grow: 1">
                                <h1>Luxos Comprados</h1>
                                {dataEconomy.inventario.map(createCardImage)}
                            </div>
                        </div>
                    </Tab>

                    <Tab title="?">
                    </Tab>
                </Tabs>
            </Window>
        </div>
    }
}

export class ExpandirCard {
    expand: boolean;

    constructor(vnode) {
        this.expand = false;
    }

    view(vnode) {
        var buttonOn = "nes-btn scroll-btn Economy-button";
        var content;

        if (this.expand) {
            content = vnode.children;
            buttonOn += " Economy-button-on"
        }
        else {
            content = "";
        }

        return <div class="EconomyCard">
            <div class="nes-container with-title is-rounded">
                <div class="EconomyCard-title">
                    {vnode.attrs.title}
                    <button type="button" class={buttonOn} onclick={() => { this.expand = !this.expand }}>
                        <span>&lt;</span>
                    </button>
                    <hr></hr>
                </div>

                <div class="EconomyCard-content">
                    {content}
                </div>
            </div>
        </div>
    }
}

//criar um div na window pq só le um filho
//vscroll rolamento
//vnode.attrs pegar algum atributo passado
//hr é a linha -----------
//constructor uma variável é criada localmente
