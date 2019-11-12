import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Chart, VScroll, Component } from '../ui';
import './_graphics.scss';
import { GraphicsButton, GraphicTabs} from './UiGraphics.tsx';
import '../model';
import { model } from '../model';
/**
 * Componente para janela com informações e gráficos sobre o mundo.
 */
export class Graphics {
    /**Tabs e como se fosse uma lista de tabs, dai tem que colocar cada Tab dentro de Tabs */
    background: object;
    constructor() {
        this.background = {
            "Telainicial": "https://blog-imgs-30-origin.fc2.com/t/a/k/take0000/mahousyoujomadokamagika057.jpg",
            "Clima": "https://wallpapertag.com/wallpaper/full/0/6/0/380558-free-madoka-magica-wallpaper-1920x1080-ipad-pro.jpg",
            "Economia": "https://images4.alphacoders.com/296/thumb-1920-296026.jpg",
            "Politica": "https://images6.alphacoders.com/993/thumb-1920-993435.jpg",
            "Energia": "http://pds22.egloos.com/pds/201207/17/88/b0040388_5005599932d5b.jpg",
        }
    }
    view() {
        return <Window>
            <VScroll class="Graphics vscroll" >
                <div class="Graphics overlay">
                <span class="Graphics back-Button"><GraphicsButton btn="error" onclick={()=> {model.window = null}}>Voltar</GraphicsButton></span>
                <GraphicTabs>
                    <Tab title="Tela Principal" btn="error" background={this.background.Telainicial}><Tela></Tela></Tab>
                    <Tab title="Clima" btn="warning" background={this.background.Clima}><Clima></Clima></Tab>
                    <Tab title="Economia" btn="warning" background={this.background.Economia}><Economia></Economia></Tab>
                    <Tab title="Politica" btn="warning" background={this.background.Politica}><Politica></Politica></Tab>
                    <Tab title="Energia" btn="warning" background={this.background.Energia}><Energia></Energia></Tab>
                </GraphicTabs>
                </div>
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
            CFC: [4, 9, 16, 25, 36]
        }
    },
    economia: {
        labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        data:
        {
            Dólar: [20, 5, 30, 2, 20]
        }
    },
    politica: {
        labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        data: {
            Trump: [20, 5, 30, 2, 20],
            Bolsonaro: [30,13,10,34,33],
            Lula: [12,22,25,26,33],
        }
    },
    energia: {
        labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        data: {
            Renováveis: [20,5,6,4,8],
            NãoRenováveis: [10,5,7,13,14],
        }
    },
};

class Tela{
    view(){
       return <div> 
            <br /> 
           <h1><center> <font size="5px"> <font color="red"> Aqui o caos pode ser contemplado</font></font></center> </h1>
         <h2><font color="white"> Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a percepção das dificuldades representa uma abertura para a melhoria dos níveis de motivação departamental.</font></h2>
  </div> 
    }
}

class Clima {
    view() {
        {
            let data1 = graphicData(pydata.clima);
            return <div>
                <Chart type="line" data={data1} options={data1.options} height="75" />
                <div class="Graphics buttons">
                    <GraphicsButton btn="primary" onclick={()=>{window.alert("teste")}}>Botao1</GraphicsButton>
                    <GraphicsButton btn="normal">Botao2</GraphicsButton>
                    <GraphicsButton btn="warning">Botao3</GraphicsButton>

                </div></div>

        }
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
                    <GraphicsButton btn="normal">Botao2</GraphicsButton>
                    <GraphicsButton btn="warning">Botao3</GraphicsButton>
                </div></div>
        }
    }
}
class Politica {
    view() {
        {
            let data1 = graphicData(pydata.politica);
            return <div><Chart type="line" data={data1} options={data1.options} height="75" />
                <div class="Graphics buttons">
                    <GraphicsButton btn="primary">Botao1</GraphicsButton>
                    <GraphicsButton btn="normal">Botao2</GraphicsButton>
                    <GraphicsButton btn="warning">Botao3</GraphicsButton>
                </div></div>
        }
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
                    <GraphicsButton btn="normal">Botao2</GraphicsButton>
                    <GraphicsButton btn="warning">Botao3</GraphicsButton>
                </div></div>
        }
    }
}
// configuraçoes dos graficos
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
