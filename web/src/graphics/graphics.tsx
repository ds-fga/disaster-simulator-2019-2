import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Chart, VScroll, Component } from '../ui';
import './_graphics.scss';
<<<<<<< HEAD
import { GraphicsButton, GraphicTabs, GraphicTab, Gerargraficos, BackButton } from './UiGraphics';
import telaback from './src/telaback.jpg';
import climaback from './src/climaback.jpg';
import economiaback from './src/economiaback.jpg';
import populacaoback from './src/populacaoback.jpg';
import energiaback from './src/energiaback.jpg';

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
            "Telainicial": telaback,
            "Clima": climaback,
            "Economia": economiaback,
            "Populacao": populacaoback,
            "Energia": energiaback,
        }
    }
    // a funcao this é a funcao principal que retorna o conteudo da classe
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
                    <BackButton exception="Graphics"></BackButton>
                    <GraphicTabs>
                        <GraphicTab title="Tela Principal" btn="warning" background={this.background.Telainicial}><Tela></Tela></GraphicTab>
                        <GraphicTab title="Clima" btn="warning" background={this.background.Clima}><Clima></Clima></GraphicTab>
                        <GraphicTab title="Economia" btn="warning" background={this.background.Economia}><Economia></Economia></GraphicTab>
                        <GraphicTab title="População" btn="warning" background={this.background.Populacao}><População></População></GraphicTab>
                        <GraphicTab title="Energia" btn="warning" background={this.background.Energia}><Energia></Energia></GraphicTab>
                    </GraphicTabs>
                    <GraphicsAudio></GraphicsAudio>
                </div>
=======

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
>>>>>>> att graficos
            </VScroll>
        </Window>
    }
}
// algumas dessas classes acima nao estao nesse documento, elas podem ser encontradas no UiGraphics.tsx


<<<<<<< HEAD
// essa eh a variavel que guarda os dados dos graficos
let pydata = {
    clima: {
        labels: ['2000', '2005', '2010', '2015', '2020'],
        data: {
            "CO2": [20, 5, 30, 2, 20, 10],
            "Temperatura Atmosférica": [25, 10, 3, 2, 5, 100],
            "Temperatura Oceânica": [1, 100, 88, 21, 45, 110],
            "Dano Climático": [10, 22, 15, 12, 14],
        },
        backgroundColor: {
            "CO2": "rgba(214, 66, 153, 0.4)",
            "Temperatura Atmosférica":  "rgba(157, 60, 150, 0.4)",
            "Temperatura Oceânica": "rgba(150, 70, 150, 0.4)",
            "Dano Climático": "rgba(100, 20, 153, 0.4)",
        },
        borderColor: {
            "CO2": "rgba(214, 66, 153, 1)",
            "Temperatura Atmosférica": "rgba(210, 60, 150, 1)",
            "Temperatura Oceânica": "rgba(150, 70, 150, 1)",
            "Dano Climático": "rgba(100, 20, 153, 1)",
        }
    },
     Economia: {
        labels: ['2000', '2005', '2010', '2015', '2020'],
        data:
        {
            "Pib": [20, 5, 30, 2, 20],
            "Custo do carbono": [10, 15, 22, 10, 14],
        },
        backgroundColor: {
            "Pib": "rgba(233, 235, 141, 0.4)"
            "Custo do carbono":"rgba(233, 235, 141, 0.4)"
        },
        borderColor: {
            "Pib": "rgba(233, 235, 141, 1)"
            "Custo do carbono":"rgba(233, 235, 141, 0.4)"
        }
    },
    Populacao: {
        labels: ['2000', '2005', '2010', '2015', '2020'],
        data: {
            "Feliz": [20, 5, 30, 2, 20],
            "Indiferente": [30, 13, 10, 34, 33],
            "Infeliz": [12, 22, 25, 26, 33],
            "Revoltado": [10, 12, 9, 10, 12],
        },
        backgroundColor: {
            "Feliz": "rgba(214, 66, 153, 0.4)",
            "Indiferente": "rgba(210, 60, 150, 0.4)",
            "Infeliz": "rgba(150, 70, 150, 0.4)",
            "Revoltado": "rgba(100, 20, 153, 0.4)"
        },
        borderColor: {
            "Feliz": "rgba(214, 66, 153, 1)",
            "Indiferente": "rgba(210, 60, 150, 1)",
            "Infeliz": "rgba(150, 70, 150, 1)",
            "Revoltado": "rgba(100, 20, 153, 1)"
        }
    },
    Energia: {
        labels: ['2000', '2005', '2010', '2015', '2020'],
        data: {
            "Renováveis": [20, 5, 6, 4, 8],
            "Não Renováveis": [10, 5, 7, 13, 14],
        },
        backgroundColor: {
            "Renováveis": "rgba(255,0,0,0.4)",
            "Não Renováveis": "rgba(255,100,10,0.4)",
        },
        borderColor: {
            "Renováveis": "rgba(255,0,0, 1)",
            "Não Renováveis": "rgba(255,100,10,1)",
        }
    },
=======

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
>>>>>>> att graficos
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
    view() {
        {
            return <div>
                <div class="Gerargraficos">
                    <Gerargraficos dados={pydata.clima} global='false'></Gerargraficos>
                </div>
            </div>

        }
    }

}
// eessas abaixos sao semelhante a classe acima
class Economia {
    view() {
        {
            return <div>
                <div class="Gerargraficos">
                    <Gerargraficos dados={pydata.Economia} global='false'></Gerargraficos>
                </div>
            </div>

        }
    }

}
class População {
    view() {
        {
            return <div>
                <div class="Gerargraficos">
                    <Gerargraficos dados={pydata.Populacao} global='true'></Gerargraficos>
                </div>
            </div>

<<<<<<< HEAD
        }
    }

}
class Energia {
    view() {
        {
            return <div>
                <div class="Gerargraficos">
                    <Gerargraficos dados={pydata.Energia} global='true'></Gerargraficos>
                </div>
            </div>

        }
    }
}
class GraphicsAudio {
    audio:number
    constructor(){
        this.audio=1
    }
    view() {
let musica
        if (this.audio==1){ 
            musica=  <div class="Graphics audio"><audio autoplay="true" src="https://www.freesoundtrackmusic.com/previews/camelot-enriclo_altavilla_CLIP.mp3" preload="auto" controls></audio></div>   
        }
        else{
            musica=""
        }

        return <div>

            <div class="Graphics Teste">
                <div class="Graphics buttonsom" onclick={()=> 
                { if(this.audio==1){
                    this.audio=0
                }
                else{
                    this.audio=1
                }}}>Som
                 </div>
                {musica}
            </div>    
        </div>

    }
}

=======

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
                    fontColor: 'white',
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
>>>>>>> att graficos
