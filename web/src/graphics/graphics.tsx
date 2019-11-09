
import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Chart, VScroll, Component } from '../ui';
import './_graphics.scss';
import { GraphicsButton, GraphicTabs} from './UiGraphics.tsx';
/**
 * Componente para janela com informações e gráficos sobre o mundo.
 */
export class Graphics {
    /**Tabs e como se fosse uma lista de tabs, dai tem que colocar cada Tab dentro de Tabs */
    constructor(){
        
        
    }  
    view() {
        function mudabackground() {
            let a = window.document.querySelector("#GraphicsWindow");
            window.alert(a)
        }
        return <Window id="GraphicsWindow">
            <VScroll class="Graphics VScroll">
                <GraphicTabs>
                    <Tab title="Clima" btn="warning"><Clima></Clima></Tab>
                    <Tab title="Economia" btn="warning"><Economia></Economia></Tab>
                    <Tab title="Politica" btn="warning"><Politica></Politica></Tab>
                    <Tab title="Energia" btn="warning"><Energia></Energia></Tab>
                </GraphicTabs>
                
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
            CH4: [1, 100, 88, 21, 45, 110],
            Teste: [4, 9, 16, 25, 36]
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
            valor1: [20,5,6,4,8]
        }
    },
};


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
