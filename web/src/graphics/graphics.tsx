import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Chart, VScroll, Component } from '../ui';
import './_graphics.scss';
import { GraphicsButton, GraphicTabs, GraphicTab, Gerargraficos, BackButton, Leftinfo } from './UiGraphics';
import telaback from './src/telaback.jpg';
import climaback from './src/climaback.jpg';
import economiaback from './src/economiaback.jpg';
import populacaoback from './src/populacaoback.jpg';
import energiaback from './src/energiaback.jpg';
import madokamusic from './src/madokamusic.mp3'

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
            </VScroll>
        </Window>
    }
}

// algumas dessas classes acima nao estao nesse documento, elas podem ser encontradas no UiGraphics.tsx
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
            "Temperatura Atmosférica": "rgba(157, 60, 150, 0.4)",
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
            "Custo do carbono": "rgba(233, 235, 141, 0.4)"
        },
        borderColor: {
            "Pib": "rgba(233, 235, 141, 1)"
            "Custo do carbono": "rgba(233, 235, 141, 0.4)"
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
};
// essa classe eh o conteudo da tela principal
class Tela {
    view() {
        return <div class="Graphics tela">
            <h1 class="Graphics Tela Title">Aqui o caos pode ser contemplado</h1>
              <h2 class="Graphics Tela Content">Nunca é demais lembrar o peso e o significado destes problemas, 
            uma vez que a percepção das dificuldades representa uma abertura para a 
            melhoria dos níveis de motivação departamental. 
            </h2>
        </div>
    }
    oncreate(vnode) {
        console.log(vnode)
        vnode.instance.children.map((e, i) => {
            if (e.dom.innerHTML != undefined) {
                let texto = e.dom.innerHTML.split('');
                e.dom.innerHTML = ""
                setTimeout(()=>{
                        texto.forEach((element, index) => {
                            setTimeout(() => e.dom.innerHTML += element, 75 * index)
                        })
                    let hiddentext = "HELP ME".split('')
                        setTimeout(() => {
                            e.dom.innerHTML += "<br/>"
                            hiddentext.forEach((element, index) => {
                                setTimeout(() => e.dom.innerHTML += element, 650 * index)
                            })
                        }, 50000 / 2)
                }, 500);
            }
        })
    }
}
/* essa classe eh o conteudo da tab clima
    o conteudo eh formado por um grafico global mais diversos botoes que direcionam para graficos especificos
    */
class Clima {
    infotext: string;
    constructor() {
    }
    view() {
        return <div>
            <div class="Gerargraficos">
                <Gerargraficos dados={pydata.clima} global='false'></Gerargraficos>
            </div>
             <Leftinfo personagem={"madoka"}>
                Você já sentiu que não existem motivos reais para você estar vivo?
                Eu não quero dizer no sentido de suicídio. Só quero dizer como nada que fazemos é especial.
                Só estar na escola ou trabalhar em algum emprego para alguma companhia.
                É como se você fosse completamente substituível e o mundo não sentiria falta se você sumisse.
                Isso me fez querer mudar o mundo após eu me graduar. Mas quanto mais velha eu fico,
                mais eu percebo que é uma forma imatura de se pensar.
            </Leftinfo>
        </div>
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
                <Leftinfo personagem={"homura"}>   
                Já perdi a fome
                A  vontade de viver
                Já perdi o mundo
                E um motivo pra morrer
                Não é a tristeza que me mata.
                Nem a alegria que me faz viver. 
                É apenas um vazio... 
                que me deixa assim. 
                Longe de todos e até de mim.
            </Leftinfo>
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
                 <Leftinfo personagem={"miki"}>
                  Estou enlouquecendo,
                  Estou perdendo as estribeiras
                  Não sei quais vão ser as consequências
                  Só sei, que serei punida, por minha mente suicida.
                  Cansei de ser julgada,
                  Eu quero ser compreendida
                  Não aguento mais tanta dor,mas já que não conheço o amor
                  só cultivarei a dor.
                  
            </Leftinfo>
            </div>

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
                <Leftinfo personagem={"tomoe"}>  
                Você sabia??
                Que se você se alimentar saudavelmente
                Dormir bem, praticar exercícios regularmente
                Não consumir álcool,tabaco ou drogas ilícitas
                E sempre beber bastante água
                Você vai morrer do mesmo jeito?
            </Leftinfo>
            </div>

        }
    }
}
class GraphicsAudio {
    audio: boolean
    constructor() {
        this.audio = true;
    }
    view() {
        // outro metodo de escrever ifs
        // se this.audio for verdadeiro, entao musica vai ser igual ao html
        // senao ":" musica recebe "" nada
        let musica = this.audio ?
            <div class="Graphics audio"><audio autoplay="true" src={madokamusic} preload="auto" controls volume="0.4"></audio></div>
            : ""
        return <div>
            <div class="Graphics Teste">
                <div class="Graphics buttonsom" onclick={() => { this.audio = !this.audio }}>Musica
                 </div>
                {musica}
            </div>
        </div>

    }
}
