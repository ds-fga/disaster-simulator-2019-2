import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Chart, VScroll, Component } from '../ui';
import './_graphics.scss';
import { GraphicsButton, GraphicTabs, GraphicTab, Gerargraficos, BackButton, Leftinfo } from './UiGraphics';
import telaback from './src/telaback.jpg';
import climaback from './src/climaback.jpg';
import economiaback from './src/economiaback.jpg';
import populacaoback from './src/populacaoback.jpg';
import energiaback from './src/energiaback.jpg';
import demoingif from './src/demoin.gif';

/* essa eh a classe principal que vai mostrar todo o conteudo que vai mostrar na tela
classe seria coisas como <div> <span> <audio> <ul> <li> que podem ser personalizadas a gosto
nesse caso a pagina inicial estaria requisitando nossa pagina usando <Graphics></Graphics>*/
export class Graphics {
    //essa primeira parte eh onde se declara as variaveis que seram usadas internamente na classe
    // defino o nome da variavel e o tipo
    background: object;
    infotext: string;
    data: any;
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
        pyrequest();
    }
    view() {
        return <Window id="GraphicsWindow">
            <VScroll class="Graphics vscroll" >
                <div class="Graphics overlay">
                    <BackButton exception="Graphics"></BackButton>
                    <GraphicTabs extraclass="Graphics">
                        <GraphicTab title="Tela Principal" btn="warning" background={this.background.Telainicial}><Tela /></GraphicTab>
                        <GraphicTab title="Clima" btn="warning" background={this.background.Clima}><Clima /></GraphicTab>
                        <GraphicTab title="Economia" btn="warning" background={this.background.Economia}><Economia /></GraphicTab>
                        <GraphicTab title="População" btn="warning" background={this.background.Populacao}><População /></GraphicTab>
                    </GraphicTabs>
                </div>
            </VScroll>
        </Window>
    }
}
function pyrequest() {
    m.request({ url: "http://127.0.0.1:5000/series/time/" }).then(x => {
        pydata.clima.labels = x.time;
        m.request({ url: "http://127.0.0.1:5000/series/t_atm/" }).then(x => {
            pydata.clima.data["Temperatura Atmosférica"] = x.data;
        })

        m.request({ url: "http://127.0.0.1:5000/series/t_ocean/" }).then(x => {
            pydata.clima.data["Temperatura Oceânica"] = x.data;
        })

        m.request({ url: "http://127.0.0.1:5000/series/c_atm/" }).then(x => {
            pydata.clima.data["Carbono na Atmosfera"] = x.data;
        })

        m.request({ url: "http://127.0.0.1:5000/series/c_ocean/" }).then(x => {
            pydata.clima.data["Carbono nos Oceanos Rasos"] = x.data;
        })

        m.request({ url: "http://127.0.0.1:5000/series/c_deep/" }).then(x => {
            pydata.clima.data["Carbono nos Oceanos Profundos"] = x.data;
        })

        m.request({ url: "http://127.0.0.1:5000/series/emissions/" }).then(x => {
            pydata.clima.data["Emissões de CO2"] = x.data;
        })
    })
    m.request({ url: "http://127.0.0.1:5000/series/time/" }).then(x => {
        pydata.Economia.labels = x.time;

        m.request({ url: "http://127.0.0.1:5000/series/production/" }).then(x => {
            pydata.Economia.data["Pib"] = x.data;
        })

        m.request({ url: "http://127.0.0.1:5000/series/capital/" }).then(x => {
            pydata.Economia.data["Capital"] = x.data;
        })
    })
    m.request({ url: "http://127.0.0.1:5000/series/population/" }).then(x => {
        pydata.Populacao.labels = x.time;
        pydata.Populacao.data["População Global"] = x.data;

        m.request({ url: "http://127.0.0.1:5000/series/SATISFACTION/" }).then(x => {
            pydata.Populacao.data["Satisfação"] = x.data;
        })
        m.request({ url: "http://127.0.0.1:5000/series/HAPPINESS/" }).then(x => {
            pydata.Populacao.data["Felicidade"] = x.data;
        })
        m.request({ url: "http://127.0.0.1:5000/series/revolt/" }).then(x => {
            pydata.Populacao.data["Revolta"] = x.data;
        })

    })
    return
}


let pydata = {
    clima: {
        labels: [],
        data: {
            "Temperatura Atmosférica": [],
            "Temperatura Oceânica": [],
            "Carbono na Atmosfera": [],
            "Carbono nos Oceanos Rasos": [],
            "Carbono nos Oceanos Profundos": [],
            "Emissões de CO2": [],
        },
        backgroundColor: {
            "Temperatura Atmosférica": "rgba(214, 66, 153, 0.4)",
            "Temperatura Oceânica": "rgba(157, 60, 150, 0.4)",
            "Carbono na Atmosfera": "rgba(150, 70, 150, 0.4)",
            "Carbono nos Oceanos Rasos": "rgba(100, 20, 153, 0.4)",
            "Carbono nos Oceanos Profundos": "rgba(100, 20, 153, 0.4)",
            "Emissões de CO2": "rgba(100, 20, 153, 0.4)",
        },
        borderColor: {
            "Temperatura Atmosférica": "rgba(214, 66, 153, 1)",
            "Temperatura Oceânica": "rgba(210, 60, 150, 1)",
            "Carbono na Atmosfera": "rgba(150, 70, 150, 1)",
            "Carbono nos Oceanos Rasos": "rgba(100, 20, 153, 1)",
            "Carbono nos Oceanos Profundos": "rgba(100, 20, 153, 1)",
            "Emissões de CO2": "rgba(100, 20, 153, 1)",
        },
        info: {
            "Temperatura Atmosférica": "Anomalia da Temperatura Atmosférica em Kelvin (k)",
            "Temperatura Oceânica": "Anomalia da Temperatura dos oceanos em Kelvin (k)",
            "Carbono na Atmosfera": "Estoque de carbono na atmosfera em gigatonelada de carbono (GtC",
            "Carbono nos Oceanos Rasos": "Estoque de carbono nos Oceanos Rasos em gigatonelada de carbono (GtC)",
            "Carbono nos Oceanos Profundos": "Estoque de carbono nos Oceanos Profundos em gigatonelada de carbono (GtC)",
            "Emissões de CO2": "Emissões de carbono em gigatonelada de carbono por ano (GtC / ano",
        }
    },
    Economia: {
        labels: [],
        data:
        {
            "Pib": [],
            "Capital": [],
        },
        backgroundColor: {
            "Pib": "rgba(233, 235, 141, 0.4)",
            "Capital": "rgba(233, 235, 141, 0.4)",
        },
        borderColor: {
            "Pib": "rgba(233, 235, 141, 1)",
            "Capital": "rgba(233, 235, 141, 1)",
        },
        info: {
            "Pib": "PIB do mundo em Trilhões de U$",
            "Capital": "Total em bens de capital em Trilhões de U$",
        }
    },
    Populacao: {
        labels: [],
        data: {
            "População Global": [],
            "Felicidade": [],
            "Satisfação": [],
            "Revolta": [],
        },
        backgroundColor: {
            "População Global": "rgba(214, 66, 153, 0.4)",
            "Felicidade": "rgba(214, 66, 153, 0.4)",
            "Satisfação": "rgba(210, 60, 150, 0.4)",
            "Revolta": "rgba(150, 70, 150, 0.4)",
        },
        borderColor: {
            "População Global": "rgba(214, 66, 153, 1)",
            "Felicidade": "rgba(214, 66, 153, 1)",
            "Satisfação": "rgba(210, 60, 150, 1)",
            "Revolta": "rgba(150, 70, 150, 1)",
        },
        info: {
            "População Global": "População do mundo em milhões de pessoas",
            "Felicidade": "Distribuição de felicidade derivada de satisfação e dos revoltados",
            "Satisfação": "Nível de satisfação da população. É um número de (0, oo) onde em oo a população fica inteiramente feliz, e 0 inteiramente descontente. Um valor de 1.0 representa uma população com 50% das pessoas contentes (felizes ou neutras).",
            "Revolta": "Nível de revolta da população. Contabiliza, entre os descontentes, o quão engajados estão em tentar sabotar e destruir o sistema atual. Também é medido de (0, oo), com REVOLT=1 representando o caso em que metade da população descontente tramando algum tipo de sabotagem. Se mais de 1/3 da população total estiver revoltada, entra em um estado de guerra civil. ",
        }
    },
    /*Energia: {
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
        },
        info:{
            "Renováveis": "rgba(255,0,0, 1)",
            "Não Renováveis": "rgba(255,100,10,1)",   
        }
    },/*/
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
            <img src={demoingif} height={173} ></img>
        </div>
    }

    oncreate(vnode) {
        let demonio = vnode.dom.children[2]
        demonio.style.transform = "translate(-200%, -10%)"
        demonio.style.opacity = "0";
        setTimeout(() => {
            demonio.style.transition = "all 5s ease"
            demonio.style.transform = "translate(0%)"
            demonio.style.opacity = "100%";
        }, 1000)

        let sizetext = []
        vnode.instance.children.map((e, i) => {
            if (e.dom.innerHTML != undefined) {
                let texto = e.dom.innerHTML.split('');
                e.dom.innerHTML = ""
                let tempoescrita = sizetext.length == 0 ? 500 : (sizetext[sizetext.length - 1] + 10) * 75
                sizetext.push(texto.length)
                setTimeout(() => {
                    texto.forEach((element, index) => {
                        setTimeout(() => e.dom.innerHTML += element, 75 * index)
                    })
                    let hiddentext = "HELP".split('')
                    setTimeout(() => {
                        e.dom.innerHTML += "<br/>"
                        hiddentext.forEach((element, index) => {
                            setTimeout(() => e.dom.innerHTML += element, 650 * index)
                        })
                    }, 50000 / 1)
                }, tempoescrita)

            }
        })
    }
}
/* essa classe eh o conteudo da tab clima
    o conteudo eh formado por um grafico global mais diversos botoes que direcionam para graficos especificos
    */
class Clima {
    view() {
        return <div class="Graphics Gcontent">
            <Gerargraficos dados={pydata.clima} global='false' personagem="madoka"></Gerargraficos>
        </div>
    }
}
// eessas abaixos sao semelhante a classe acima
class Economia {
    view() {
        {
            return <div class="Graphics Gcontent">
                <Gerargraficos dados={pydata.Economia} global='false' personagem="HOMURA"></Gerargraficos>
            </div>
        }
    }
}
class População {
    view() {
        {
            return <div class="Graphics Gcontent">
                <Gerargraficos dados={pydata.Populacao} global='false' personagem="MIKI"></Gerargraficos>
            </div>
        }
    }

}
/*
class Energia {
    view() {
        {
            return <div class="Graphics Gcontent">
                <Gerargraficos dados={pydata.Energia} global='true'></Gerargraficos>
                <Leftinfo personagem={"tomoe"}>
                Você sabia??
                Que se você se alimentar saudavelmente.
                Dormir bem, praticar exercícios regularmente.
                Não consumir álcool,tabaco ou drogas ilícitas.
                E sempre beber bastante água.
                Você vai morrer do mesmo jeito?
            </Leftinfo>
            </div>

        }
    }
}
*/