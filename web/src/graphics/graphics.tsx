
import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Chart, VScroll, Component } from '../ui';
import './_graphics.scss';
import { GraphicsButton, GraphicTabs, GraphicTab } from './UiGraphics';
import '../model';
import { model } from '../model';

/* essa eh a classe principal que vai mostrar todo o conteudo que vai mostrar na tela
classe seria coisas como <div> <span> <audio> <ul> <li> que podem ser personalizadas a gosto
nesse caso a pagina inicial estaria requisitando nossa pagina usando <Graphics></Graphics>*/
export class Graphics {
    //essa primeira parte eh onde se declara as variaveis que seram usadas internamente na classe
    // defino o nome da variavel e o tipo
    background: object;
    // a funcao constructor eh onde damos os valores iniciais as variaveis
    constructor() {
        // para referencia a variaveis, usamos o prefixo "this"
        this.background = {
            "Telainicial": "https://blog-imgs-30-origin.fc2.com/t/a/k/take0000/mahousyoujomadokamagika057.jpg",
            "Clima": "https://wallpapertag.com/wallpaper/full/0/6/0/380558-free-madoka-magica-wallpaper-1920x1080-ipad-pro.jpg",
            "Economia": "https://images4.alphacoders.com/296/thumb-1920-296026.jpg",
            "Politica": "https://images6.alphacoders.com/993/thumb-1920-993435.jpg",
            "Energia": "http://pds22.egloos.com/pds/201207/17/88/b0040388_5005599932d5b.jpg",
        }
    }
    // a funcao this e a funcao principal que retorna o conteudo da classe
    view() {
        /* estamos retornando a pagina inteira, entao tudo estara aqui
         podemos escrever o html direto aqui, no entando, para fins de organizacao,
        criamos "subclasses" como a classe "GraphicsTabs", "Tab", "Clima", etc
         cada Tab tem o seu titulo que sera mostrado em cima e seu conteudo que esta dentro de si
         exemplo <Tab title="exemplo" btn="error" background=****> {===CONTEUDO===} </Tab>
         ondeo title é o titulo da tab, btn é o tipo do butao e background a imagem que sera mostrada quando clicar na tab
         poderiamos colocar o conteudo direto dentro dela, mas criamos outras classes, que estao mais abaixo no codigo, para melhor organizacao
         esses conteudos seriam essas classes "Tela", "Clima", "Economia", "Politica", "Energia". quando eu clicar na tab ele ira mostrar esse conteudo
        */
        return <Window id="GraphicsWindow">
            <VScroll class="Graphics vscroll" >
                <div class="Graphics overlay">
                    <span class="Graphics back-Button">
                        <GraphicsButton btn="error" onclick={() => { model.window = null }}>Voltar</GraphicsButton>
                    </span>
                    <GraphicTabs>
                        <GraphicTab title="Tela Principal" btn="error" background={this.background.Telainicial}><Tela></Tela></GraphicTab>
                        <GraphicTab title="Clima" btn="warning" background={this.background.Clima}><Clima></Clima></GraphicTab>
                        <GraphicTab title="Economia" btn="warning" background={this.background.Economia}><Economia></Economia></GraphicTab>
                        <GraphicTab title="Politica" btn="warning" background={this.background.Politica}><Politica></Politica></GraphicTab>
                        <GraphicTab title="Energia" btn="warning" background={this.background.Energia}><Energia></Energia></GraphicTab>
                    </GraphicTabs>
                </div>
            </VScroll>
        </Window>
    }
}
// algumas dessas classes acima nao estao nesse documento, elas podem ser encontradas no UiGraphics.tsx


// essa e a variavel que guarda os dados dos graficos
let pydata = {
    clima: {
        labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        data: {
            "CO2": [20, 5, 30, 2, 20, 10],
            "H2O": [25, 10, 3, 2, 5, 100],
            "CH4": [1, 100, 88, 21, 45, 110],
            "CFC": [4, 9, 16, 25, 36],
        },
        backgroundColor: ['rgba(214, 66, 153, 0.4)'],
        borderColor: ['rgba(214, 66, 153, 1)'],
    }
    ,
    economia: {
        labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        data:
        {
            "Dólar": [20, 5, 30, 2, 20],
        },
        backgroundColor: ['rgba(233, 235, 141, 0.4)'],
        borderColor: ['rgba(233, 235, 141, 1)'],
    },
    politica: {
        labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        data: {
            "Trump": [20, 5, 30, 2, 20],
            "Bolsonaro": [30, 13, 10, 34, 33],
            "Lula": [12, 22, 25, 26, 33],
        },
        backgroundColor: ['rgba(25, 106, 228, 0.4)'],
        borderColor: ['rgb(255, 255, 255)'],
    },
    energia: {
        labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        data: {
            "Renováveis": [20, 5, 6, 4, 8],
            "NãoRenováveis": [10, 5, 7, 13, 14],
        },
        backgroundColor: ['rgba(255,0,0,0.4)'],
        borderColor: ['rgba(255,0,0,0.9) '],
    },
};
// essa classe eh o conteudo da tela principal
class Tela {
    view() {
        return <div>
            <br />
            <h1><center> <font size="5px"> <font color="red"> Aqui o caos pode ser contemplado</font></font></center> </h1>
            <h2><font color="white"> Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a percepção das dificuldades representa uma abertura para a melhoria dos níveis de motivação departamental.</font></h2>
        </div>
    }
}
/* essa classe eh o conteudo da tab clima
    o conteudo eh formado por um grafico global mais diversos botoes que direcionam para graficos especificos
    */
class Clima {
    selected: number;
    constructor() {
        this.selected = -1
    }

    view() {
        {
            let data = [];
            let buttons
            let graph
            let graphdata = pydata.clima
            for (var ii in graphdata.data) {
                data.push(ii)
            }
            
            buttons = data.map((e, i) => {
                return <button type="button" class="Graphics nes-btn is-primary" onclick={() => { this.selected = i }}>{e}</button>
            })
            
            if (this.selected == -1) {
                let data1 = graphicData(graphdata, undefined);
                // para criar um grafico usamos a classe "chart" abaixo
                graph = <Chart type="line" data={data1} options={data1.options} height={75} />
            } else {
                graph = data.map((e, i) => {
                    if (this.selected == i) {
                        let data1 = graphicData(pydata.clima, e);
                        return <Chart type="line" data={data1} options={data1.options} height={75} />
                    }
                })
            }

            return <div> {graph}
                <div class="Graphics buttons">
                    <button type="button" class="Graphics nes-btn is-primary" onclick={() => { this.selected = -1 }}>Global</button>
                    {buttons}
                </div>
            </div>

        }
    }
}
// eessas abaixos semelhante a classe acima
// mas ainda falta colar o sistema de botoes e graficos aqui
// estamos melhorando a de cima pra depois colar ela aqui
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
