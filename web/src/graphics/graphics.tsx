import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Chart, VScroll, Component } from '../ui';
import './_graphics.scss';

/**
 * Componente para janela com informações e gráficos sobre o mundo.
 */
export class Graphics {
    /**Tabs e como se fosse uma lista de tabs, dai tem que colocar cada Tab dentro de Tabs */
    view() {
        return <Window id="GraphicsWindow">
            <VScroll class="Graphics VScroll">
                <Tabs>
                    <Tab title="Clima"><Clima></Clima></Tab>
                    <Tab title="Economia"><Economia></Economia></Tab>
                    <Tab title="Politica"><Politica></Politica></Tab>
                    <Tab title="Energia"><Energia></Energia></Tab>
                </Tabs>
            </VScroll>
        </Window>
    }
}



// dados do grafico
let pydata = {
    clima: {
        labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        data: {
            Co2: [20, 5, 30, 2, 20, 10],
            h2o: [25, 10, 3, 2, 5, 100],
            CH4: [1, 100, 88, 21, 45, 110]
        }
    },
    economia: {
        labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        data:
        {
            Valor1: [20, 5, 30, 2, 20]
        }
    },
    politica: {
        labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        data: {
            Valor1: [20, 5, 30, 2, 20]
        }
    },
    energia: {
        labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        data: {
            valor1: [20, 5, 30, 2, 20]
        }
    },
};


interface IGenericAttrs {
    class?: string | string[];
    id?: string;
    onclick?: Function;
}
// tipos de butoes
interface Gbtn extends IGenericAttrs {
    btn?: "primary" | "success" | "warning" | "error" | "disabled" | "normal";
}

class GraphicsButton extends Component<Gbtn>{
    view(vnode: m.Vnode<Gbtn>) {
        let extraclass = vnode.attrs.btn;
        return <button type="button" class={`nes-btn is-${extraclass}`}>{vnode.children}</button>
    }

}

class Clima {
    view() {
        {
            let data1 = graphicData(pydata.clima);
            return <div>
                <Chart type="line" data={data1} options={data1.options} height="75" />
                <div class="Graphics buttons">
                    <GraphicsButton btn="primary">Botao1</GraphicsButton>
                    <GraphicsButton btn="normal">Botao1</GraphicsButton>
                    <GraphicsButton btn="warning">Botao1</GraphicsButton>
                    <GraphicsButton btn="warning">Botao1</GraphicsButton>

                </div></div>

        }
    }

class Economia {
    view() {
        {
            let data1 = graphicData(pydata.economia);
            return <div>
                <Chart type="line" data={data1} options={data1.options} height="75" />
                <div class="Graphics buttons">
                    <GraphicsButton btn="primary">Botao1</GraphicsButton>
                    <GraphicsButton btn="normal">Botao1</GraphicsButton>
                    <GraphicsButton btn="warning">Botao1</GraphicsButton>
                </div></div>
        }
    }

class Politica {
    view() {
        {
            let data1 = graphicData(pydata.politica);
            return <div><Chart type="line" data={data1} options={data1.options} height="75" />
                <div class="Graphics buttons">
                    <GraphicsButton btn="primary">Botao1</GraphicsButton>
                    <GraphicsButton btn="normal">Botao1</GraphicsButton>
                    <GraphicsButton btn="warning">Botao1</GraphicsButton>
                </div></div>
        }
    }

class Energia {

    view() {
        {
            let data1 = graphicData(pydata.energia);
            return <div>
                <Chart type="line" data={data1} options={data1.options} height="75" />
                <div class="Graphics buttons">
                    <GraphicsButton btn="primary">Botao1</GraphicsButton>
                    <GraphicsButton btn="normal">Botao1</GraphicsButton>
                    <GraphicsButton btn="warning">Botao1</GraphicsButton>
                </div></div>
        }
    }

// configuraçoes dos graficos
function graphicData(data) {

    let graphicdata = {
        // eixo x
        labels: data.labels,
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
                }
            },
            scales: {
                // eixo y

                yAxes: [{
                    ticks: {
                        fontSize: 25,
                        fontColor: 'white',
                    }
                }], // eixo x
                xAxes: [{
                    ticks: {
                        fontSize: 25,
                        fontColor: 'white',

                    }
                }]
            },

        }

    }

    for (var i in data.data) {
        graphicdata.datasets.push({
            label: i,
            data: data.data[i],
            backgroundColor: [
                'rgba(255, 0, 0, 0.1)',
            ],
            borderColor: [
                'hsl(0, 100%, 30%)',
            ],
            borderWidth: 5
        })
    }
    return graphicdata;
}
