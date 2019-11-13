import m from 'mithril';
import { Window, Tabs, Btn, Sidebar, Chart, VScroll} from '../ui';
import { MithrilTsxComponent as Component } from 'mithril-tsx-component';


interface IGenericAttrs {
    class?: string | string[];
    id?: string;
    onclick?: Function;
}

}
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
    changeBackground(vnode) {
        let graphicswindow = window.document.querySelector(".Graphics.vscroll");
        let background = vnode.attrs.background || "";
        if (background != "")
            graphicswindow.style.background = `url(${vnode.attrs.background})`;
            graphicswindow.style.backgroundSize = "cover";
            graphicswindow.style.backgroundRepeat = "no-repeat";
            graphicswindow.style.backgroundAttachment = "fixed";
            graphicswindow.style.backgroundPosition = "center center"
            graphicswindow.style.transition = "0.5s";
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
                    <button type="button" class={`Graphics nes-btn is-${btn}`} onclick={() => {self.selected = i; }}> {e.attrs.title}</button>
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

export class GraphicsButton extends Component<Sattrs>{
   view(vnode: m.Vnode<Sattrs>) {
        let extraclass = vnode.attrs.btn || "normal";
        let fonclick = vnode.attrs.onclick || ""
        return <button type="button" class={`Graphics nes-btn is-${extraclass}`} onclick={fonclick}>{vnode.children}</button>
    }
}
interface Gattrs{
    dados?: object;
}
export class Gerargraficos extends Component<Gattrs>{
     
	selected: number;
    constructor() {
        super()
        this.selected = -1
    }

    view(vnode: m.Vnode<Gattrs>){
    {
            let data = [];
            let buttons
            let graph
            let  graphdata = vnode.attrs.dados
            for (var ii in graphdata.data) {
                data.push(ii)
            }

            buttons = data.map((e, i) => {
                return <button type="button" class="Graphics nes-btn is-warning" onclick={() => { this.selected = i }}>{e}</button>
            })

            if (this.selected == -1) {
                let data1 = graphicData(graphdata, undefined);
                // para criar um grafico usamos a classe "chart" abaixo
                graph = <Chart type="line" data={data1} options={data1.options} height={75} />
            } else {
                graph = data.map((e, i) => {
                    if (this.selected == i) {
                        let data1 = graphicData(graphdata, e);
                        return <Chart type="line" data={data1} options={data1.options} height={75} />
                    }
                })
            }

            return <div> {graph}
                <div class="Graphics buttons">
                    <button type="button" class="Graphics nes-btn is-warning" onclick={() => { this.selected = -1 }}>Global</button>
                    {buttons}
                </div>
                <div class="Graphics audiobutton"><audio autoplay="true" src="http://soundbible.com/grab.php?id=1280&type=mp3" preload="auto" controls></audio></div>
            </div>

        }
    }
}
// essa a funçao que gera ordena os dados do grafico para depois inserir da classe "chart"
function graphicData(generalData, specificData) {
    let graphicdata = {
        // eixo x
        labels: generalData.labels,
        //dados
        datasets: [],
        //configuracoes do grafico
        options: {
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
        for (var i in generalData.data) {
            if (i == specificData) {
                graphicdata.datasets.push({
                    label: i,
                    data: generalData.data[i],
                    backgroundColor: generalData.backgroundColor,
                    borderColor: generalData.borderColor,
                    borderWidth: 5
                })
            }

        }
    } else {
        for (var i in generalData.data) {
            graphicdata.datasets.push({
                label: i,
                data: generalData.data[i],
                backgroundColor: generalData.backgroundColor,
                borderColor: generalData.borderColor,
                borderWidth: 5
            })
        }
    }
    return graphicdata;
}
