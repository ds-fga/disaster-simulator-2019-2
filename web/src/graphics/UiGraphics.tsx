import m from 'mithril';
import { MithrilTsxComponent as Component } from 'mithril-tsx-component';
import { model } from '../model'
import { pages } from '../main'
import ChartJS = require('chart.js');
import madokagif from './src/madokagifs.gif'
import mikigif from './src/mikigif.gif'
import homuragif from './src/homuragif.gif'
import tomoegif from './src/tomoegif.gif'
import demoingif from './src/demoin.gif'

interface IGenericAttrs {
    class?: string | string[];
    id?: string;
    onclick?: Function;
}

// TABS
export abstract class Elem extends Component<Object> {
    // Classe abstrata
}

export class GraphicTabs extends Elem {
    selected: number;

    constructor(vnode) {
        super();
        this.selected = vnode.attrs.selected || 0;
    }

    view(vnode) {
        return <div class="Tabs">
            {this.viewTabs(vnode)}
            {this.viewContent(vnode)}
        </div>
    }
    viewTabs(vnode) {
        let selected = this.selected,
            self = this,
            titles = vnode.children.map((e, i) => {
                let cls = "Graphics Tabs-tab";
                cls += i == selected ? " is-selected" : "";
                let btn = e.attrs.btn || "warning";
                btn = i == selected ? "primary" : btn;
                return <div class={cls}>
                    <button type="button" class={`Graphics nes-btn is-${btn}`} onclick={() => { self.selected = i; }}> {e.attrs.title}</button>
                </div>

            });
        return <div class="Graphics Tab-head">{titles}</div>;
    }

    viewContent(vnode) {
        this.changeBackground(vnode.children[this.selected]);
        let extraclass = vnode.children[this.selected].attrs.title || ""
        return <div class={`Graphics Tabs-Content ${extraclass}`}>
            {vnode.children[this.selected]}
        </div>
    }

    changeBackground(vnode) {
        let graphicswindow = window.document.querySelector(".Graphics.vscroll");
        let background = vnode.attrs.background || "";
        if (background != "") {
            graphicswindow.style.background = `url(${vnode.attrs.background})`;
            graphicswindow.style.backgroundSize = "cover";
            graphicswindow.style.backgroundRepeat = "no-repeat";
            graphicswindow.style.backgroundAttachment = "fixed";
            graphicswindow.style.backgroundPosition = "center center";
            graphicswindow.style.transition = "all 0.5s ease";
        }
    }
}
interface Sattrs extends IGenericAttrs {
    background?: string;
    btn?: "primary" | "success" | "warning" | "error" | "disabled" | "normal";
    title?: string;

}

export class GraphicTab extends Component<Sattrs> {
    view(vnode) {
        return <div class="Tab">
            {vnode.children}
        </div>
    }
}
// BUTOES
export class GraphicsButton extends Component<Sattrs>{
    view(vnode: m.Vnode<Sattrs>) {
        let extraclass = vnode.attrs.btn || "normal";
        let fonclick = vnode.attrs.onclick || ""
        return <button type="button" class={`Graphics nes-btn is-${extraclass}`} onclick={fonclick}>{vnode.children}</button>
    }
}
interface Gattrs {
    dados?: object;
    global?: string;
}

// Classe dos graficos
interface IChartAttrs extends IGenericAttrs {
    type: string;
    data: object;
    options: object;
}
// GERA GRAFICO
export class GraphicsChart extends Component<IChartAttrs> {
    chart: any;

    oncreate(vnode: m.Vnode<IChartAttrs>) {
        let { type, data, options } = vnode.attrs,
            canvas = document.createElement('CANVAS'),
            dom: HTMLElement = vnode.dom;
        dom.appendChild(canvas);
        this.chart = new ChartJS(canvas, { type: type, data: data, options: options });
    }

    view(vnode: m.Vnode<IChartAttrs>) {
        let attrs = { ...vnode.attrs };
        ["type", "data", "options"].map(x => { delete attrs[x] });
        return <div class="Graphics chart-container">
            <div class="Chart" {...attrs}></div>
        </div >
    }
}

// CONTEUDO DAS TABS COM OS GRAFICOS
export class Gerargraficos extends Component<Gattrs>{

    selected: number;
    constructor(vnode: m.Vnode<Gattrs>) {
        super()
        this.selected = vnode.attrs.global == "false" ? 0 : -1
    }

    view(vnode: m.Vnode<Gattrs>) {
        {
            let corbotao = 'warning'
            let data = [];
            let graph
            let graphdata = vnode.attrs.dados;
            let globalbotao = vnode.attrs.global;
            for (let ii in graphdata.data) {
                data.push(ii)
            }
            let buttons = data.map((e, i) => {
                corbotao = 'warning'
                if (this.selected == i) {
                    corbotao = 'primary'
                }
                return <button type="button" class={`Graphics nes-btn is-${corbotao}`} onclick={() => { this.selected = i }}>{e}</button>
            })
            corbotao = 'warning'
            if (this.selected != -1) {
                corbotao = 'warning'
                graph = data.map((e, i) => {
                    if (this.selected == i) {
                        let data1 = this.graphicData(graphdata, e);
                        return <GraphicsChart type="line" data={data1} options={data1.options} />
                    }
                })
            }
            if (globalbotao == 'true') {
                let gbutton = <button type="button" class={`Graphics nes-btn is-${corbotao}`} onclick={() => { this.selected = -1 }}>Global</button>

                if (this.selected == -1) {
                    corbotao = 'primary'
                    gbutton = <button type="button" class={`Graphics nes-btn is-${corbotao}`} onclick={() => { this.selected = -1 }}>Global</button>
                    let data1 = this.graphicData(graphdata, undefined);
                    graph = <GraphicsChart type="line" data={data1} options={data1.options} />
                }
            } else {
                if (this.selected == -1) {
                    corbotao = 'primary'
                    let data1 = this.graphicData(graphdata, undefined);
                    graph = <GraphicsChart type="line" data={data1} options={data1.options} />
                }

            }
            return <div> {graph}
                <div class="Graphics buttons">
                    {gbutton}
                    {buttons}
                </div>
                <div class="Graphics audiobutton"><audio autoplay="true" src="http://soundbible.com/grab.php?id=1280&type=mp3" preload="auto" controls></audio></div>
            </div>

        }
    }


    graphicData(generalData, specificData) {
        let graphicdata = {
            // eixo x
            labels: generalData.labels,
            //dados
            datasets: [],
            //configuracoes do grafico
            options: {
                maintainAspectRatio: false,
                responsiveAnimationDuration: 100,
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 10,
                        bottom: 0
                    }
                },
                // legendas
                legend: {
                    labels: {
                        fontSize: 20,
                        fontColor: 'white',
                    }
                },
                scales: {
                    // eixo y
                    yAxes: [{
                        ticks: {
                            fontSize: 25,
                            fontColor: 'white',
                        }
                    }],
                    // eixo x
                    xAxes: [{
                        ticks: {
                            fontSize: 25,
                            fontColor: 'white',

                        }
                    }]
                },

            }

        }

        if (specificData != undefined) {
            for (let i in generalData.data) {
                if (i == specificData) {
                    graphicdata.datasets.push({
                        label: i,
                        data: generalData.data[i],
                        backgroundColor: generalData.backgroundColor[i],
                        borderColor: generalData.borderColor[i],
                        borderWidth: 5
                    })
                }

            }
        } else {
            for (let i in generalData.data) {
                graphicdata.datasets.push({
                    label: i,
                    data: generalData.data[i],
                    backgroundColor: generalData.backgroundColor[i],
                    borderColor: generalData.borderColor[i],
                    borderWidth: 5
                })
            }
        }
        return graphicdata;
    }
}


// botao voltar
interface Backattrs {
    exception?: string;
}

export class BackButton extends Component<Backattrs> {
    hidebutton: string;
    btn: string;
    nomepagina
    open: boolean;
    constructor() {
        super()
        this.open = false;
        this.btn = "warning";
        this.nomepagina = ["Inicio", "Introdução", "Eventos", "Estilo",
            "Ciência", "Política", "Economia", "Conspiração", "Cultura", "Gráficos",
            "Illuminati", "População"];
    }
    view(vnode: m.Vnode<Backattrs>) {
        let paginas = []
        let linkpagina = []
        let color: string;
        let corbotao = false;
        let buttons: HTMLElement
        for (let ii in pages) {
            paginas.push(ii);
            linkpagina.push(pages[ii])
        }
        //if (this.hidebutton == "show") {
        buttons = paginas.map((e, i) => {
            if (e !== "Intro" && e !== "Style" && e !== vnode.attrs.exception) {
                color = corbotao == false ? "warning" : "primary";
                corbotao = !corbotao;
                return <div>
                    <GraphicsButton btn={color} onclick={() => { model.window = linkpagina[i] }}>{this.nomepagina[i]}</GraphicsButton>
                    <br />
                </div>
            }
        })
        //}
        return <div class="Graphics back-Button" onmouseenter={() => { this.open = true; this.btn = "primary" }}
            onmouseleave={() => { this.open = false; this.btn = "warning" }} >
            <button type="button" class={`Graphics nes-btn is-${this.btn}`} onclick={() => { window.close() }}>Fechar</button>
            <div class={`Graphics back-Button show`}>
                {buttons}
            </div>
        </div>
    }
    onupdate(vnode) {
        let y = this.open ? "0%" : "-100%";
        let visibility = this.open ? "visible" : "hidden";
        let opacity = this.open ? "100%" : "0"
        vnode.dom.children[1].style.visibility = visibility;
        vnode.dom.children[1].style.transform = `translateY(${y})`
        vnode.dom.children[1].style.opacity = opacity;
    }
    oncreate(vnode) {
        vnode.dom.children[1].style.visibility = "hidden";
        vnode.dom.children[1].style.transform = "translateY(-100%)"
        vnode.dom.children[1].style.opacity = "0";
        vnode.dom.children[1].style.transition = "all 0.5s ease";
    }
}
let firsttime = {
    MADOKA: true,
    HOMURA: true,
    TOMOE: true,
    MIKI: true
}
// Caixa de informação
interface AttrsInfo extends IGenericAttrs {
    personagem?: "MADOKA" | "HOMURA" | "TOMOE" | "MIKI";
}

export class Leftinfo extends Component<AttrsInfo>{
    open: boolean
    personagens: object;
    titles: object
    constructor() {
        super()
        this.open = false;
        this.personagens = {
            MADOKA: madokagif,
            HOMURA: homuragif,
            TOMOE: tomoegif,
            MIKI: mikigif
        }
        this.titles = {
            MADOKA: "Madoka Kaname",
            HOMURA: "Homura Akemi",
            TOMOE: "Mami Tomoe",
            MIKI: "Sayaka Miki"
        }
    }
    view(vnode: m.Vnode<AttrsInfo>) {
        let person = vnode.attrs.personagem.toUpperCase();
        return <div class="Graphics Leftinfo" onmouseenter={() => this.open = true} onmouseleave={() => this.open = false}>
            <div class="Graphics nes-container with-title is-centered Lefttext">
                <p class="title">{this.titles[person]}</p>
                <img src={this.personagens[person]} class="Graphics Leftimage"></img>
                <p>{vnode.children}</p>
            </div>
        </div >
    }
    onupdate(vnode) {
        let x = this.open ? "-15%" : "-105%";
        vnode.dom.style.transform = `translateX(${x})`
    }
    oncreate(vnode: m.Vnode<AttrsInfo>) {
        console.log(vnode)

        let firsttimee = firsttime[vnode.attrs.personagem.toUpperCase()]
        let tempoescrita = -2000;
        if (firsttimee) {
            setTimeout(() => {
                vnode.dom.style.transform = "translateX(-15%)"
            }, 1000)
            // escrita do texto
            let textorigin = vnode.dom.children[0].children[2];
            let text = vnode.children[0].split('');
            console.log(text)
            console.log(textorigin)
            //limpa texto
            textorigin.innerHTML = "";
            //adiciona texto
            text.map((element, index) => {
                setTimeout(() => textorigin.innerHTML += element, index * 75)
                tempoescrita = index * 75;
            });
        }
        firsttime[vnode.attrs.personagem.toUpperCase()] = false;
        // fecha a caixa de informação
        setTimeout(() => {
            vnode.dom.style.transform = "translateX(-105%)"
        }, tempoescrita + 2000)

    }
}
