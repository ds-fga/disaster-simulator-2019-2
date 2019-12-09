import m from 'mithril';
import { MithrilTsxComponent as Component } from 'mithril-tsx-component';
import { model } from '../model'
import { pages } from '../main'
import ChartJS = require('chart.js');
import madokagif from './src/madokagifs.gif';
import mikigif from './src/mikigif.gif';
import homuragif from './src/homuragif.gif';
import tomoegif from './src/tomoegif.gif';
import dokidokigif from './src/dokidokigif.gif'
import madokamusic from './src/madokamusic.mp3';
import Gsbutton from './src/Gsbutton.mp3';
import posts from './src/posts.json';

interface IGenericAttrs {
    class?: string | string[];
    id?: string;
    onclick?: Function;
}
let colorButtons = [];
let colorButtonSelected = "";
let tabselected = 0;
// TABS
export class GraphicTabs extends Component<Sattrs> {
    selected: number;
    extraclass: string;
    constructor(vnode: m.Vnode<Sattrs>) {
        super();
        this.extraclass = vnode.attrs.extraclass;
        this.selected = vnode.attrs.selected || 0;
    }

    view(vnode) {
        return <div class="Tabs">
            {this.viewTabs(vnode)}
            {this.viewContent(vnode)}
        </div>
    }
    oncreate(vnode){
        vnode.children.map((e,i)=>{
            colorButtons.push(e.attrs.btn);
        })
        colorButtonSelected= vnode.attrs.btnselected || "primary";
        
    }
    onupdate(vnode){
        tabselected = this.selected;
    }
    viewTabs(vnode) {
        let selected = this.selected,
            self = this,
            titles = vnode.children.map((e, i) => {
                let cls = "Graphics Tabs-tab";
                cls += i == selected ? " is-selected" : "";
                let btn = e.attrs.btn || "warning";
                btn = i == selected ? colorButtonSelected : colorButtons[tabselected];
                return <div class={cls}>
                    <button type="button" class={`Graphics nes-btn is-${btn}`} onclick={() => {
                        self.selected = i;
                    }}> {e.attrs.title}</button>
                </div>

            });
        return <div class="Graphics Tab-head">{titles}</div>;
    }

    viewContent(vnode) {
        this.changeBackground(vnode.children[this.selected]);
        let extraclass = vnode.children[this.selected].attrs.title || "";
        return <div class={`Graphics Tabs-Content ${extraclass}`}>
            {vnode.children[this.selected]}
        </div>
    }

    changeBackground(vnode) {
        let graphicswindow = window.document.querySelector(`.${this.extraclass}.vscroll`);
        //let graphicswindow = window.document.querySelector(`.Graphics.vscroll`);
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
    btn?: "primary" | "success" | "warning" | "error" | "disabled" | "normal" | "GraphicsTab1" | "GraphicsTab2" | "GraphicsTab3" | "GraphicsTab4" | "GraphicsTab5";
    btnselected?: "primary" | "GraphicsSelected"; 
    title?: string;
    extraclass: string;
}

export class GraphicTab extends Component<Sattrs> {
    view(vnode) {
        return <div class="Graphics Gtab">
            {vnode.children}
        </div>
    }
}

// BUTOES
export class GraphicsButton extends Component<Sattrs> {
    view(vnode: m.Vnode<Sattrs>) {
        let extraclass = vnode.attrs.btn || "normal";
        let fonclick = vnode.attrs.onclick || "";
        return <button type="button" class={`Graphics nes-btn is-${extraclass}`}
            onclick={fonclick}>{vnode.children}</button>
    }
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
        ["type", "data", "options"].map(x => {
            delete attrs[x]
        });
        return <div class="Graphics chart-container">
            <div class="Chart" {...attrs} />
        </div>
    }
}

interface Gattrs {
    dados?: object;
    global?: string;
    personagem?: "MADOKA" | "HOMURA" | "TOMOE" | "MIKI" | "madoka" | "homura" | "tomoe" | "miki";
}
// CONTEUDO DAS TABS COM OS GRAFICOS
export class Gerargraficos extends Component<Gattrs> {

    selected: number;
    errotext: string;
    constructor(vnode: m.Vnode<Gattrs>) {
        super();
        this.selected = vnode.attrs.global == "false" ? 0 : -1
        this.errotext = "Você sabia?? Que se você se alimentar saudavelmente. Dormir bem, praticar exercícios regularmente. Não consumir álcool,tabaco ou drogas ilícitas. E sempre beber bastante água. Você vai morrer do mesmo jeito?"
    }

    view(vnode: m.Vnode<Gattrs>) {
        let corbotao = colorButtons[tabselected];
        let data = [];
        let graph: any[];
        let graphdata = vnode.attrs.dados;
        let globalbotao = vnode.attrs.global;
        for (let ii in graphdata.data) {
            data.push(ii)
        }
        let buttons = data.map((e, i) => {
            corbotao = this.selected == i ? colorButtonSelected : colorButtons[tabselected];
            return <button type="button" class={`Graphics nes-btn is-${corbotao}`} onclick={() => {
                this.selected = i
            }}>{e}</button>
        });
        corbotao = this.selected == -1 ? colorButtonSelected : colorButtons[tabselected];

        let gbutton = globalbotao == "true" ? <button type="button" class={`Graphics nes-btn is-${corbotao}`} onclick={() => {
            this.selected = -1;
        }}>Global</button> : null;

        if (this.selected != -1) {
            graph = data.map((e, i) => {
                if (this.selected == i) {
                    let data1 = this.graphicData(graphdata, e);
                    return <GraphicsChart type="line" data={data1} options={data1.options} />
                }
            })
        } else {
            let data1 = this.graphicData(graphdata, undefined);
            graph = <GraphicsChart type="line" data={data1} options={data1.options} />
        }
        return <div class="Graphics gerargraficos"> {graph}
            <div class="Graphics buttons">
                {gbutton}
                {buttons}
            </div>
            <Leftinfo personagem={vnode.attrs.personagem}>{graphdata.info[data[this.selected]]}</Leftinfo>
            <div class="Graphics gaudio">
                <audio autoplay="true" src={Gsbutton} preload="auto" controls volume="0.2"></audio>
            </div>
        </div>

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

        };

        if (specificData != undefined) {
            for (let i in generalData.data) {
                if (i == specificData) {
                    let a = i
                        a = generalData.legenda[i]
                    graphicdata.datasets.push({
                        label: a,
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
export class GraphicsMusics {
    audio: boolean
    constructor() {
        this.audio = true;
    }
    view() {
        // outro metodo de escrever ifs
        // se this.audio for verdadeiro, entao musica vai ser igual ao html
        // senao ":" musica recebe "" nada
        let musica = this.audio ?
            <div class="Graphics gaudio"><audio autoplay="true" src={madokamusic} preload="auto" controls volume="0.01"></audio></div>
            : null;
        return <div class="Graphics audiobutton">
            <button class="Graphics nes-btn is-error" onclick={() => { this.audio = !this.audio }}>Musica
                 </button>
            {musica}
        </div>

    }
}


// botao voltar
interface Backattrs {
    exception?: string;
}

export class BackButton extends Component<Backattrs> {
    hidebutton: string;
    btn: string;
    nomepagina;
    open: boolean;

    constructor() {
        super();
        this.open = false;
        this.btn = "warning";
        this.nomepagina = ["Inicio", "Introdução", "Eventos", "Estilo",
            "Ciência", "Política", "Economia", "Conspiração", "Cultura", "Gráficos",
            "Illuminati", "População"];
    }

    view(vnode: m.Vnode<Backattrs>) {
        let paginas = [];
        let linkpagina = [];
        let color: string;
        let corbotao = false;
        let buttons: any[];
        for (let ii in pages) {
            paginas.push(ii);
            linkpagina.push(pages[ii])
        }
        buttons = paginas.map((e, i) => {
            if (e !== "Initial" && e !== "Intro" && e !== "Style" && e !== vnode.attrs.exception) {
                color = corbotao == false ? colorButtons[tabselected] || "warning" : colorButtonSelected;
                corbotao = !corbotao;
                return <div>
                    <GraphicsButton btn={color} onclick={() => {
                        model.window = linkpagina[i]
                    }}>{this.nomepagina[i]}</GraphicsButton>
                    <br />
                </div>
            }
        });
        return <div class="Graphics back-Button" onmouseenter={() => {
            this.open = true;
            this.btn = colorButtonSelected || "primary";
        }}
            onmouseleave={() => {
                this.open = false;
                this.btn =  colorButtons[tabselected] || "warning";
            }}>
            <button type="button" class={`Graphics nes-btn is-${this.btn}`} onclick={() => {
                model.menu()
            }}>Inicio
            </button>
            <div class={`Graphics back-Button show`}>
                {buttons}
                <GraphicsMusics />
            </div>
        </div>
    }

    onupdate(vnode) {
        let y = this.open ? "0%" : "-100%";
        let visibility = this.open ? "visible" : "hidden";
        let opacity = this.open ? "100%" : "0";
        vnode.dom.children[1].style.visibility = visibility;
        vnode.dom.children[1].style.transform = `translateY(${y})`;
        vnode.dom.children[1].style.opacity = opacity;
    }

    oncreate(vnode) {
        setTimeout(() => {
            this.btn = colorButtons[tabselected] || "warning";
        }, 50);
        vnode.dom.children[1].style.visibility = "hidden";
        vnode.dom.children[1].style.transform = "translateY(-100%)";
        vnode.dom.children[1].style.opacity = "0";
        vnode.dom.children[1].style.transition = "all 0.5s ease";
    }
}
let girls = {
    MADOKA: {
        firsttime: true,
        img: madokagif,
        title: "Madoka Kaname",
        background: "rgba(172, 30, 85, 0.6)",
    },
    HOMURA: {
        firsttime: true,
        img: homuragif,
        title: "Homura Akemi",
        background: "rgba(42, 238, 248, 0.6)",
    },
    TOMOE: {
        firsttime: true,
        img: tomoegif,
        title: "Mami Tomoe",
        background: "rgba(173, 98, 36, 0.6)",
    },
    MIKI: {
        firsttime: true,
        img: mikigif,
        title: "Sayaka Miki",
        background: "rgba(32, 23, 156, 0.6)",
    },
    DOKIDOKI:{
        firsttime: true,
        img: dokidokigif,
        title: "ERROR",
        background: "red",
    }
}

// Caixa de informação
interface AttrsInfo extends IGenericAttrs {
    personagem?: "MADOKA" | "HOMURA" | "TOMOE" | "MIKI" | "madoka" | "homura" | "tomoe" | "miki";
}

export class Leftinfo extends Component<AttrsInfo> {
    open: boolean;
    translatexclose: string;
    translatexopen: string;
    constructor() {
        super();
        this.translatexclose = "-100%"
        this.translatexopen = "-10%"
        this.open = false;

    }

    view(vnode: m.Vnode<AttrsInfo>) {
        let person = vnode.attrs.personagem.toUpperCase();
        return <div class="Graphics Leftinfo" onmouseenter={() => this.open = true}
            onmouseleave={() => this.open = false}>
            <div class="Graphics nes-container with-title is-centered Lefttext">
                <p class="title">{girls[person].title}</p>
                <img src={girls[person].img} class="Graphics Leftimage"></img>
                <p>{vnode.children}</p>
            </div>
        </div>
    }

    onupdate(vnode) {
        if (this.open) {
            this.oopen(vnode);
        } else {
            this.close(vnode);
        }
    }
    oncreate(vnode: m.Vnode<AttrsInfo>) {
        vnode.dom.style.color = girls[vnode.attrs.personagem.toUpperCase()].background;
        vnode.dom.style.transition = "all 1s ease";
        vnode.dom.style.backgroundColor = girls[vnode.attrs.personagem.toUpperCase()].background;

        let tempoescrita = -2000;
        let firsttimee = girls[vnode.attrs.personagem.toUpperCase()].firsttime;
        if (firsttimee) {
            setTimeout(() => { this.oopen(vnode) }, 1000);
            tempoescrita = this.writetext(vnode);
        }
        girls[vnode.attrs.personagem.toUpperCase()].firsttime = false;
        // fecha caixa
        setTimeout(() => { this.close(vnode) }, tempoescrita + 3000);
    }
    oopen(vnode) {
        setTimeout(() => {
            vnode.dom.style.transform = `translateX(${this.translatexopen})`
        }, 100);
    }
    close(vnode) {
        setTimeout(() => {
            vnode.dom.style.transform = `translateX(${this.translatexclose})`
        }, 100)
    }
    writetext(vnode) {
        // escrita do texto
        let textorigin = vnode.dom.children[0].children[2];
        let text = vnode.children[0].split('');
        //limpa texto
        textorigin.innerHTML = "";
        //adiciona texto
        text.map((element, index) => {
            setTimeout(() => textorigin.innerHTML += element, index * 75);
        });
        return text.length * 75;
    }
}

let text = "alguma coisaaaaalguma coisaaaaalguma coisaaaaalguma coisaaaa"
export class BottomInfo {
    translateopen: string;
    translateclosed: string;
    oopen: boolean;
    reopen: number;
    reopentime: number;
    constructor() {
        this.translateclosed = "60%"
        this.translateopen = "0%";
        // quantidade de vezes que abrirá novamente
        this.reopen = 10;
        //tempo entre cada vez que abre em ms
        this.reopentime = 1 * 60000;

    }
    view(vnode) {
        return <div class="Graphics BottomInfo" onmouseenter={() => this.open(vnode)}
            onmouseleave={() => this.close(vnode)}>
            <img src={girls.MADOKA.img} class="Graphics Bottomimg"></img>
            <div class="Graphics nes-container with-title is-centered bottomNesContainer">
                <p style="color: red; font-size: 18px;text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5); margin-bottom: 5px;">
                    {girls["MADOKA"].title}
                </p>
                <p style="font-size: 14px">O que somos nós para ele, a não ser suportes no roteiro de uma peça?</p>
            </div>
        </div>
    }
    oncreate(vnode) {
        vnode.dom.style.transition = "all 2s ease";
        let girlsname = [];
        for (let i in girls) {
            girlsname.push(i);
        }
        let number = this.randomnumber(girlsname);
        this.choosegirl(vnode, girlsname, number);
        let tempoescrita = this.textwrite(vnode, number);
        setTimeout(() => { this.open(vnode) }, 2000);
        setTimeout(() => { this.close(vnode); this.openagain(vnode, girlsname) }, tempoescrita + 3000);
    }
    open(vnode) {
        setTimeout(() => {
            vnode.dom.style.transform = `translateY(${this.translateopen})`;
        }, 50)
    }
    close(vnode) {
        setTimeout(() => {
            vnode.dom.style.transform = `translateY(${this.translateclosed})`;
        }, 50)
    }
    randomnumber(girlsname) {
        let number = [Math.floor(Math.random() * (girlsname.length)),
        Math.floor(Math.random() * (posts["Frases"].length))];
        return number;
    }
    choosegirl(vnode, girlsname, number) {
        let auxgirl = girls[girlsname[number[0]]]
        let img = vnode.dom.children[0];
        img.src = auxgirl.img;
        if (girlsname[number[0]] == "HOMURA") {
            img.style.height = "250px";
        } else if (girlsname[number[0]] == "MIKI") {
            img.style.height = "135px";
        }else if(girlsname[number[0]] == "DOKIDOKI"){
            img.style.height = "160px";
        }else {
            img.style.height = "200px";
        }
        let title = vnode.dom.children[1].children[0];
        title.innerHTML = auxgirl.title;
        title.style.color = auxgirl.background;
        vnode.dom.style.background = auxgirl.background;
    }
    textwrite(vnode, number) {
        let origintext = vnode.dom.children[1].children[1];
        origintext.innerHTML = "";
        let splittext = posts["Frases"][number[1]].split('');
        setTimeout(() => {
            splittext.map((e, i) => {
                setTimeout(() => {
                    origintext.innerHTML += e;
                }, i * 100)
            })
        },
            2000)
        return splittext.length * 100;
    }
    openagain(vnode, girlsname) {
        let number: any;
        let tempoescrita: number;
        for (let i = 1; i <= this.reopen; i++) {
            setTimeout(() => {
                number = this.randomnumber(girlsname);
                this.choosegirl(vnode, girlsname, number);
                tempoescrita = this.textwrite(vnode, number);
                setTimeout(() => { this.open(vnode) }, 2000);
                setTimeout(() => { this.close(vnode) }, tempoescrita + 3000);
            }, i * this.reopentime);
        }
    }

}
