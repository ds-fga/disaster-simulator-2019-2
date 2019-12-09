import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, VScroll } from '../ui';
import EconomySidebarImage from '../economy/src/idosa.jpg';

var EconomyMoney;
var dataEconomy = [{
    lucro: [],
    prejuizo: [],
    investimentos: [],
    luxos: [],
    inventario: []
}];
let totalPoints = 5;

m.request({url: "http://127.0.0.1:5000/value/capital/"}).then(dados =>{
    EconomyMoney = dados.value
    console.log("Dinheiro Total: ", EconomyMoney)
})

m.request({url: "http://127.0.0.1:5000/economy/store-itens/"}).then(dados =>{
    dataEconomy[0].lucro = dados[0].lucro;
    dataEconomy[0].prejuizo = dados[0].prejuizo;
    dataEconomy[0].inventario = dados[0].inventario;
    dataEconomy[0].luxos = dados[0].luxos;
    dataEconomy[0].investimentos = dados[0].investimentos;
    console.log("Lucro: ", dataEconomy[0].lucro);
    console.log("prejuizo: ", dataEconomy[0].prejuizo);
    console.log("investimentos: ", dataEconomy[0].investimentos);
    console.log("luxos: ", dataEconomy[0].luxos);
    console.log("inventario: ", dataEconomy[0].inventario);
})

function createCard ({ title, description, attrs, compraDeItem }) {
    function viewAttr ({ name, color, points }) {
        return <tr style={color}><td>{name}</td><td>U${points}T</td></tr>
    }

    function createBotao (btn) {
        let {preco, btnAberto} = btn;

        function buying () {
            if (totalPoints >= preco) {
                totalPoints -= preco;
                btn.btnAberto = false;
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
    function createBotao (btn) {
        let {preco, btnAberto} = btn;

        function buying () {
            if (EconomyMoney >= preco) {
                EconomyMoney -= preco;
                btn.btnAberto = false;
            }
            else {
                return alert("ERROR: Dinheiro insuficiente. Tente novamente mais tarde.");       //tentar mudar para o nes-css
            }
        }

        if (btnAberto) {
            return <div> 
                <tr><h2>U${preco}T</h2></tr>
                <div>
                    <button class="nes-btn" onclick={buying}>
                        <span>Comprar</span>
                    </button>
                </div>
            </div>
        }
        else {
            return <div>
                <tr><h2>U${preco},00</h2></tr>
            </div>
        }
    }

    return <ExpandirCard title={title}>
        <h2>Descrição</h2>
        <p>{description}</p>
        <table>
            <thead>
                <tr><h3><th>Atributos adicionais</th></h3></tr>
                <p>{attrs}%</p>
            </thead>
            <tbody>
                <tr><h3><th>Preço</th></h3></tr>
                {compraDeItem.map(createBotao)}
            </tbody>
        </table>
    </ExpandirCard>
}

function createCardImage (moverInvetario) {
    let { title, description, imagemReferencia, compraDeItem } = moverInvetario;

    function createBotao (btn) {
        let {preco, btnAberto, titleBtn} = btn;

        function buying () {
            if (EconomyMoney >= preco && titleBtn === "Comprar") {
                EconomyMoney -= preco;
                btn.titleBtn = "Vender";
                let j = moverInvetario;
                dataEconomy[0].inventario.push(j);
                dataEconomy[0].luxos.splice(dataEconomy[0].luxos.indexOf(j), 1);
            }
            else if (EconomyMoney < preco && titleBtn === "Comprar"){
                return alert("ERROR: Dinheiro insuficiente. Tente novamente mais tarde.");       //tentar mudar para o nes-css
            }
            else if (titleBtn === "Vender"){
                EconomyMoney += preco/2;
                alert("Ao vender esse item, irá lhe recomensar metade do seu preço");
                btn.titleBtn = "Comprar";
                let j = moverInvetario;
                dataEconomy[0].luxos.push(j);
                dataEconomy[0].inventario.splice(dataEconomy[0].inventario.indexOf(j), 1);
            }
        }

        if (btnAberto) {
            return <div> 
                <tr><h2>U${preco}T</h2></tr>
                <div>
                    <button class="nes-btn" onclick={buying}>
                        <span>{titleBtn}</span>
                    </button>
                </div>
            </div>
        }
        else {
            return <div>
                <tr><h2>U${preco}T</h2></tr>
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
                <Sidebar title="Economia" points={totalPoints} src={EconomySidebarImage}/>
                <Tabs>
                    <Tab title={<button class="nes-btn">Ações</button>}>
                        <p>Dinheiro: U${EconomyMoney}T</p>
                        <div class="flex-container">
                            <div style="flex-grow: 1">
                                <VScroll>
                                    <div class="nes-container with-title is-centered is-rounded">
                                        <p class="title">Lucro</p>
                                            {dataEconomy[0].lucro.map(createCard)}
                                    </div>
                                </VScroll>
                            </div>
                            <div style="flex-grow: 1">
                                <VScroll>
                                    <div class="nes-container with-title is-centered is-rounded">
                                        <p class="title">Prejuízo</p>
                                            {dataEconomy[0].prejuizo.map(createCard)}
                                    </div>
                                </VScroll>
                            </div>
                        </div>
                    </Tab>

                    <Tab title={<button class="nes-btn">Mercado</button>}>
                        <p>Dinheiro: U${EconomyMoney}T</p>
                        <div class="flex-container">
                            <div style="flex-grow: 1">
                                <VScroll>
                                    <div class="nes-container with-title is-centered is-rounded">
                                        <p class="title">Investimentos</p>
                                            {dataEconomy[0].investimentos.map(createCardSimple)}
                                    </div>
                                </VScroll>
                            </div>
                            <div style="flex-grow: 1">
                                <VScroll>
                                    <div class="nes-container with-title is-centered is-rounded">
                                        <p class="title">Luxos</p>
                                            {dataEconomy[0].luxos.map(createCardImage)}
                                    </div>
                                </VScroll>
                            </div>
                        </div>
                    </Tab>

                    <Tab title={<button class="nes-btn">Inventário</button>}>
                        <p>Dinheiro: U${EconomyMoney}T</p>
                        <div class="flex-container">
                            <div style="flex-grow: 1">
                                <VScroll>
                                    <div class="nes-container with-title is-centered is-rounded">
                                        <p class="title">Luxos Comprados</p>
                                            {dataEconomy[0].inventario.map(createCardImage)}
                                    </div>
                                </VScroll>
                            </div>
                        </div>
                    </Tab>

                    <Tab title={<button class="nes-btn">?</button>}>
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