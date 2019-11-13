import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Chart, VScroll, Component } from '../ui';
import './_graphics.scss';
import { GraphicsButton, GraphicTabs, GraphicTab, Gerargraficos } from './UiGraphics';
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
            "Populacao": "https://images6.alphacoders.com/993/thumb-1920-993435.jpg",
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
                    <div class="Graphics audio"><audio autoplay="true" src="https://www.freesoundtrackmusic.com/previews/camelot-enriclo_altavilla_CLIP.mp3" preload="auto" controls></audio></div>
                    <GraphicTabs>
                        <GraphicTab title="Tela Principal" btn="error" background={this.background.Telainicial}><Tela></Tela></GraphicTab>
                        <GraphicTab title="Clima" btn="warning" background={this.background.Clima}><Clima></Clima></GraphicTab>
                        <GraphicTab title="Economia" btn="warning" background={this.background.Economia}><Economia></Economia></GraphicTab>
                        <GraphicTab title="População" btn="warning" background={this.background.Populacao}><População></População></GraphicTab>
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
            "Co2": [20, 5, 30, 2, 20, 10],
            "Temperatura Atmosférica": [25, 10, 3, 2, 5, 100],
            "Temperatura Oceânica": [1, 100, 88, 21, 45, 110],
            "Dano Climático": [10, 22, 15, 12, 14],
        },
        backgroundColor: ['rgba(214, 66, 153, 0.4)'],
        borderColor: ['rgba(214, 66, 153, 1)'],
    }
    ,
    Economia: {
        labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        data:
        {
            "Pib": [20, 5, 30, 2, 20],
        },
        backgroundColor: ['rgba(233, 235, 141, 0.4)'],
        borderColor: ['rgba(233, 235, 141, 1)'],
    },
    Populacao: {
        labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        data: {
            Feliz: [20, 5, 30, 2, 20],
            Indiferente: [30, 13, 10, 34, 33],
            Infeliz: [12, 22, 25, 26, 33],
            Revoltado: [10, 12, 9, 10, 12],
        },
        backgroundColor: ['rgba(25, 106, 228, 0.4)'],
        borderColor: ['rgb(255, 255, 255)'],
    },
    Energia: {
        labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        data: {
            Renováveis: [20, 5, 6, 4, 8],
            "Não Renováveis": [10, 5, 7, 13, 14],
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
    view (){
        { return <div>
            <div class= "Gerargraficos">
                <Gerargraficos dados= {pydata.clima}></Gerargraficos>
            </div>
        </div>

    }
}
   
}
// eessas abaixos semelhante a classe acima
// mas ainda falta colar o sistema de botoes e graficos aqui
// estamos melhorando a de cima pra depois colar ela aqui
class Economia {
    view (){
        { return <div>
            <div class= "Gerargraficos">
                <Gerargraficos dados= {pydata.Economia}></Gerargraficos>
            </div>
        </div>

    }
}
   
}
class População {
    view (){
        { return <div>
            <div class= "Gerargraficos">
                <Gerargraficos dados= {pydata.Populacao}></Gerargraficos>
            </div>
        </div>

    }
}
   
}
class Energia {
    view (){
        { return <div>
            <div class= "Gerargraficos">
                <Gerargraficos dados= {pydata.Energia}></Gerargraficos>
            </div>
        </div>

    }
}
}
