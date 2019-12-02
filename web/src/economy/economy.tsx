import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, VScroll } from '../ui';
import exampleImg from '../economy/idosa.jpg';
//colocar imagem. exampleImg nome <img src={exampleImg}></img>

let data = {
    lucro: [
        {
            title: "Test sdse ",
            description: "dsjfoisdjfo si fasasfasfafs jfosij afsohfsauhifasuhosafhuohuoafshoasfhoifosi jfoisdj foisj dfois jdofisodjf osi jfos",
            attrs: [
                { name: "População", color: 'color: red', points: "-39%" },
                { name: "Economia", color: 'color: green', points: "+R$3000,00" },
            ],
            compraDeItem: [
                {btnAberto: true, preco: "1"}
            ],
        },
        {
            title: "Test sdse ",
            description: "dsjfoisdjfo si jfosij afsohfsauhifasuhosafhuohuoafshoasfhoifosi jfoisdj foisj dfois jdofisodjf osi jfos",
            attrs: [
                { name: "Ciência", color: 'color: red', points: "-20%" },
                { name: "Política", color: 'color: red', points: "-5%" },
                { name: "Economia", color: 'color: green', points: "+R$5000,00"}
            ],
            compraDeItem: [
                {btnAberto: true, preco: "3"}
            ],
        }
    ],
    prejuizo: [
        {
            title: "Test sdse ",
            description: "dsjfoisdjfo si jfosij afsohfsauhifasuhosafhuohuoafshoasfhoifosi jfoisdj foisj dfois jdofisodjf osi jfos",
            attrs: [
                { name: "attr1", color: 'color: red', points: "" },
                { name: "attr2", color: 'color: green', points: "" },
            ],
            compraDeItem: [
                {btnAberto: true, preco: "1"}
            ],
        },
    ],
    investimentos: [
        {
            title: "Test sdse ",
            description: "dsjfoisdjfo si jfosij afsohfsauhifasuhosafhuohuoafshoasfhoifosi jfoisdj foisj dfois jdofisodjf osi jfos",
            attrs: "aumenta sei la",
            compraDeItem: [
                {btnAberto: true, preco: "R$3000,00"}
            ],
        }
    ],
    luxos: [
        {
            title: "Test sdse ",
            //img: [
            //    {imagem: exampleImg, on: true}
            //],
            description: "dsjfoisdjfo si jfosij afsohfsauhifasuhosafhuohuoafshoasfhoifosi jfoisdj foisj dfois jdofisodjf osi jfos",
            attrs: "aumenta sei la",
            compraDeItem: [
                {btnAberto: true, preco: "R$500,00"}
            ],
        },
    ]
}

function createCard ({ title, description, attrs, compraDeItem }) {
    function viewAttr ({ name, color, points }) {
        return <tr style={color}><td>{name}</td> <td>{points}</td></tr>
    }

    function createBotao ({ btnAberto, preco }) {
        var points = 1;     //exportar do python
        function buying () {
            if (points >= preco) {
                points -= points;
                btnAberto = !btnAberto;     //alterar no json
            }
            else {
                return alert("ERROR: não há pontos suficiente. Tente novamente na rodada seguinte.");       //tentar mudar para o nes-css
            }
        }

        if (btnAberto) {
            return <div> 
                <tr><h2>{preco}</h2></tr>
                <div>
                    <div class="Economy-right-button">
                        <button class="nes-btn" onclick={buying}>
                            <span>Comprar</span>
                        </button>
                    </div>
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
                    <div class="Economy-right-button">
                        <button class="nes-btn" onclick={buying}>
                            <span>Comprar</span>
                        </button>
                    </div>
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

export class Economy {
    view() {
        return <div>
            <Window>
                <Sidebar title="Economia" points="4" src={exampleImg} />
                <Tabs>
                    <Tab title="Ações">
                        <div class="flex-container">
                            <div style="flex-grow: 1">
                                <h1>Lucro</h1>
                                {data.lucro.map(createCard)}
                            </div>
                            <div style="flex-grow: 1">
                                <h1>Prejuizo</h1>
                                {data.prejuizo.map(createCard)}
                            </div>
                        </div>
                    </Tab>

                    <Tab title="Mercado">
                    <div class="flex-container">
                            <div style="flex-grow: 1">
                                <h1>Invesitmentos</h1>
                                {data.investimentos.map(createCardSimple)}
                            </div>
                            <div style="flex-grow: 1">
                                <h1>Luxos</h1>
                                {data.luxos.map(createCardSimple)}
                            </div>
                        </div>
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

export class BotaoReserva {
    butaoOn: boolean;

    constructor (vnode) {
        this.butaoOn = true;
    }

    view (vnode) {
        if (this.butaoOn === false) {
            return ;
        }

        return <div class="Economy-right-button">
            <button class="nes-btn" onclick={() => {this.butaoOn = !this.butaoOn}}>
                <span>Comprar</span>
            </button>
        </div>
    }
}

//criar um div na window pq só le um filho
//vscroll rolamento
//vnode.attrs pegar algum atributo passado
//hr é a linha -----------
//constructor uma variável é criada localmente