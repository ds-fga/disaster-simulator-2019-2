import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Chart, VScroll, Component } from '../ui';
import './_graphics.scss';

/**
 * Componente para janela com informações e gráficos sobre o mundo.
 */
export class Graphics {
    /**Tabs e como se fosse uma lista de tabs, dai tem que colocar cada Tab dentro de Tabs */
    view() {
        return <Window>
            <VScroll id="Graphics-VScroll">
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
    clima: [20, 5, 30, 2, 20, 10],
    economia: [20, 5, 30, 2, 20],
    politica: [20, 5, 30, 2, 20],
    energia: [20, 5, 30, 2, 20],
};
// colunas
let labels = {
    clima: ['coluna1', 'coluna2', 'coluna3', 'coluna4'],
    economia: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    politica: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    energia: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
            let data1 = graphicData(pydata.clima, labels.clima);
            return <div>
                <Chart type="bar" data={data1} options={data1.options} height="75" />
                <div id="Graphics-buttons">
                    <GraphicsButton btn="primary">Botao1</GraphicsButton>
                    <GraphicsButton btn="normal">Botao1</GraphicsButton>
                    <GraphicsButton btn="warning">Botao1</GraphicsButton>

                </div></div>

        }
    }

class Economia {
    view() {
        {
            let data1 = graphicData(pydata.economia, labels.economia);
            return <div><Chart type="line" data={data1} options={data1.options} height="75" />
                <div id="Graphics-buttons">
                    <GraphicsButton btn="primary">Botao1</GraphicsButton>
                    <GraphicsButton btn="normal">Botao1</GraphicsButton>
                    <GraphicsButton btn="warning">Botao1</GraphicsButton>
                </div></div>
        }
    }

class Politica {
    view() {
        {
            let data1 = graphicData(pydata.politica, labels.politica);
            return <div><Chart type="radar" data={data1} options={data1.options} height="75" />
                <div id="Graphics-buttons">
                    <GraphicsButton btn="primary">Botao1</GraphicsButton>
                    <GraphicsButton btn="normal">Botao1</GraphicsButton>
                    <GraphicsButton btn="warning">Botao1</GraphicsButton>
                </div></div>
        }
    }

class Energia {

    view() {
        {
            let data1 = graphicData(pydata.energia, labels.energia);
            return <div><Chart type="bar" data={data1} options={data1.options} height="75" />
                <div id="Graphics-buttons">
                    <GraphicsButton btn="primary">Botao1</GraphicsButton>
                    <GraphicsButton btn="normal">Botao1</GraphicsButton>
                    <GraphicsButton btn="warning">Botao1</GraphicsButton>
                </div></div>
        }
    }

// configuraçoes dos graficos
function graphicData(data, labels) {
    let graphicdata = {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: [
                'hsl(0, 100%, 70%)',
                'rgba(54, 162, 235, 0.2)',
                'hsl(75, 100%, 70%)',
                'rgba(75, 192, 192, 0.2)',
                'hsl(155, 100%, 70%)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 10
        }],
        
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
                        fontColor:'white',
                    }
                }], // eixo x
                xAxes: [{
                    ticks: {
                        fontSize:25,
                        fontColor: 'white',
                        
                    }
                }]
            },

        }

    }
    return graphicdata;
}
