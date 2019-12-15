import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Chart, VScroll, Component } from '../ui';
import './_graphics.scss';
import { GraphicsButton, GraphicTabs, GraphicTab, Gerargraficos, BackButton, Leftinfo, BottomInfo } from './UiGraphics';
import telaback from './src/telaback.jpg';
import Atmosferaback from './src/Atmosferaback.jpg';
import economiaback from './src/economiaback.jpg';
import populacaoback from './src/populacaoback.jpg';
import Oceanosback from './src/Oceanosback.jpg';
import demoin from './src/demoin01.gif';
import demoin2 from './src/demoin02.gif';


export class Graphics {
    background: object;
    infotext: string;
    data: any;
    constructor() {
        this.background = {
            "Telainicial": telaback,
            "Atmosfera": Atmosferaback,
            "Economia": economiaback,
            "Populacao": populacaoback,
            "Oceanos": Oceanosback,
        }
        pyrequest();
    }
    view() {
        return <Window id="GraphicsWindow">
            <VScroll class="Graphics vscroll" >
                <div class="Graphics overlay">
                    <BackButton exception="Graphics"></BackButton>
                    <GraphicTabs extraclass="Graphics" btnselected="GraphicsSelected">
                        <GraphicTab title="Tela Principal" btn="GraphicsTab1" background={this.background.Telainicial}><Tela></Tela></GraphicTab>
                        <GraphicTab title="Atmosfera" btn="GraphicsTab2" background={this.background.Atmosfera}><Atmosfera></Atmosfera></GraphicTab>
                        <GraphicTab title="Oceanos" btn="GraphicsTab3" background={this.background.Oceanos}><Oceanos></Oceanos></GraphicTab>
                        <GraphicTab title="Economia" btn="GraphicsTab4" background={this.background.Economia}><Economia></Economia></GraphicTab>
                        <GraphicTab title="População" btn="GraphicsTab5" background={this.background.Populacao}><População></População></GraphicTab>
                    </GraphicTabs>
                </div>
                <BottomInfo />
            </VScroll>
        </Window>
    }
}
function pyrequest() {
    m.request({ url: "http://127.0.0.1:5000/series/time/" }).then(x => {
        pydata.Oceanos.labels = x.time;
        pydata.Economia.labels = x.time;
        pydata.Populacao.labels = x.time;
        pydata.Atmosfera.labels = x.time;
        m.request({ url: "http://127.0.0.1:5000/series/t_atm/" }).then(x => {
            pydata.Atmosfera.data["Temperatura Atmosférica"] = x.data;
        })
        m.request({ url: "http://127.0.0.1:5000/series/c_atm/" }).then(x => {
            pydata.Atmosfera.data["Carbono na Atmosfera"] = x.data;
        })
        m.request({ url: "http://127.0.0.1:5000/series/emissions/" }).then(x => {
            pydata.Atmosfera.data["Emissões de CO2"] = x.data;
        })
    })

    m.request({ url: "http://127.0.0.1:5000/series/c_deep/" }).then(x => {
        pydata.Oceanos.data["Carbono nos Oceanos Profundos"] = x.data;

        m.request({ url: "http://127.0.0.1:5000/series/c_ocean/" }).then(x => {
            pydata.Oceanos.data["Carbono nos Oceanos Rasos"] = x.data;
        })

        m.request({ url: "http://127.0.0.1:5000/series/t_ocean/" }).then(x => {
            pydata.Oceanos.data["Temperatura Oceânica"] = x.data;
        })
    })

    m.request({ url: "http://127.0.0.1:5000/series/production/" }).then(x => {
        pydata.Economia.data["Pib"] = x.data;

        m.request({ url: "http://127.0.0.1:5000/series/capital/" }).then(x => {
            pydata.Economia.data["Capital"] = x.data;
        })
        m.request({ url: "http://127.0.0.1:5000/series/LABOR_FORCE/" }).then(x => {
            pydata.Economia.data["Intensidade do Trabalho"] = x.data;
        })
    })

    m.request({ url: "http://127.0.0.1:5000/series/population/" }).then(x => {
        pydata.Populacao.data["População Global"] = x.data;

        m.request({ url: "http://127.0.0.1:5000/series/SATISFACTION/" }).then(x => {
            pydata.Populacao.data["Satisfação"] = x.data;
        })
        m.request({ url: "http://127.0.0.1:5000/series/HAPPINESS/" }).then(x => {
            pydata.Populacao.data["Felicidade"] = x.data.map((e, i) => {
                return e[0];
            });
        })

        m.request({ url: "http://127.0.0.1:5000/series/revolt/" }).then(x => {
            pydata.Populacao.data["Revolta"] = x.data;
        })

    })
    return
}


let pydata = {
    Atmosfera: {
        labels: [],
        data: {
            "Temperatura Atmosférica": [],
            "Carbono na Atmosfera": [],
            "Emissões de CO2": [],
        },
        backgroundColor: {
            "Temperatura Atmosférica": "rgba(214, 66, 153, 0.4)",
            "Carbono na Atmosfera": "rgba(150, 70, 150, 0.4)",
            "Emissões de CO2": "rgba(100, 20, 153, 0.4)",
        },
        borderColor: {
            "Temperatura Atmosférica": "rgba(214, 66, 153, 1)",
            "Carbono na Atmosfera": "rgba(150, 70, 150, 1)",
            "Emissões de CO2": "rgba(100, 20, 153, 1)",
        },
        info: {
            "Temperatura Atmosférica": "A temperatura atmosférica pode ser alterada por fatores como a radiação 		solar,umidade e altitude. Porém é a ação humana que mais vem alterando esses valores, com a queima incansável de combustíveis fósseis, liberando gases do efeito estufa.",
            "Carbono na Atmosfera": "Sem interferência humana, o carbono dos combustíveis fósseis vazaria lentamente na atmosfera através da atividade vulcânica ao longo de milhões de anos no lento ciclo do carbono. Ao queimar carvão, petróleo e gás natural, aceleramos o processo, liberando vastas quantidades de carbono (carbono que levou milhões de anos para acumular) na atmosfera todos os anos.",
            "Emissões de CO2": "A emissão de CO2 está relacionada à queima de combustíveis fósseis e ao desmatamento.",
        },
        legenda: {
            "Temperatura Atmosférica": "Anomalia da Temperatura Atmosférica em Kelvin (k)",
            "Carbono na Atmosfera": "Estoque de carbono na atmosfera em gigatonelada de carbono (GtC)",
            "Emissões de CO2": "Emissões de carbono em gigatonelada de carbono por ano (GtC / ano)",
        }
    },
    Economia: {
        labels: [],
        data:
        {
            "Pib": [],
            "Capital": [],
            "Intensidade do Trabalho": [],
        },
        backgroundColor: {
            "Pib": "rgba(42, 238, 248, 0.4)",
            "Capital": "rgba(10, 270, 248, 0.4)",
            "Intensidade do Trabalho": "rgba(5, 320, 248, 0.4)",
        },
        borderColor: {
            "Pib": "rgba(42, 238, 248, 1)",
            "Capital": "rgba(10, 270, 248, 0.4)",
            "Intensidade do Trabalho": "rgba(5, 320, 248, 0.4)",
        },
        info: {
            "Pib": "O Produto Interno Bruto(Pib) é considerado o termômetro da economia,é calculado a partir da soma de todos os produtos e serviços finais produzidos em um país.",
            "Capital": "Na economia, capital é qualquer ativo capaz de gerar um fluxo de rendimentos ao longo do tempo por meio de sua aplicação na produção. Esse conceito inclui não apenas o dinheiro propriamente dito, mas também os investimentos financeiros, os estoques e os bens que podem ser aplicados para gerar riqueza, dentre outros.",
            "Intensidade do Trabalho": "Parcela do dia que o trabalhador médio passa trabalhando (0-1). Referência é uma semana média de 40h de trabalho",
        },
        legenda: {
            "Pib": "PIB do mundo em Trilhões de U$",
            "Capital": "Total em bens de capital em Trilhões de U$",
            "Intensidade do Trabalho": "Parcela do dia que o trabalhador médio passa trabalhando (0-1)",
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
            "População Global": "rgba(64, 55, 245, 0.4)",
            "Felicidade": "rgba(64, 55, 245, 0.4)",
            "Satisfação": "rgba(71, 21, 177, 0.4)",
            "Revolta": "rgba(7, 5, 163, 0.4)",
        },
        borderColor: {
            "População Global": "rgba(64, 55, 245, 1)",
            "Felicidade": "rgba(64, 55, 245, 1)",
            "Satisfação": "rgba(71, 21, 177, 1)",
            "Revolta": "rgba(7, 5, 163, 1)",
        },
        info: {
            "População Global": "População do mundo em milhões de pessoas",
            "Felicidade": "Distribuição de felicidade derivada de satisfação e dos revoltados",
            "Satisfação": "Nível de satisfação da população. É um número de (0, oo), onde em oo a população fica inteiramente feliz, em 0 inteiramente descontente. Um valor de 1.0 representa uma população com 50% das pessoas contentes (felizes ou neutras).",
            "Revolta": "Nível de revolta da população. Contabiliza, entre os descontentes, o quão engajados estão em tentar sabotar e destruir o sistema atual. Também é medido de (0, oo), com REVOLT=1 representa o caso em que metade da população descontente está tramando algum tipo de sabotagem. Se mais de 1/3 da população total estiver revoltada, entra em um estado de guerra civil.",
        },
        legenda: {
            "População Global": "População do mundo em milhões de pessoas",
            "Felicidade": "Distribuição de felicidade derivada de satisfação e dos revoltados",
            "Satisfação": "Nível de satisfação da população",
            "Revolta": "Nível de revolta da população",
        }
    },
    Oceanos: {
        labels: [],
        data: {
            "Temperatura Oceânica": [],
            "Carbono nos Oceanos Rasos": [],
            "Carbono nos Oceanos Profundos": [],
        },
        backgroundColor: {
            "Temperatura Oceânica": "rgba(260, 200, 9, 0.4)",
            "Carbono nos Oceanos Rasos": "rgba(228, 239, 9, 0.4)",
            "Carbono nos Oceanos Profundos": "rgba(200, 260, 9, 0.4)",
        },
        borderColor: {
            "Temperatura Oceânica": "rgba(260, 200, 9, 1)",
            "Carbono nos Oceanos Rasos": "rgba(228, 239, 9, 1)",
            "Carbono nos Oceanos Profundos": "rgba(200, 260, 9, 1)",
        },
        info: {
            "Temperatura Oceânica": "Intensificado pela ação humana o aquecimento oceânico desencadeia uma série de efeitos secundários de grande impacto por si mesmos, como a subida do nível do mar, mudanças na salinidade, oxigenação e estratificação das massas de água, prejuízos à biodiversidade, dentre outros.",
            "Carbono nos Oceanos Rasos": "Estoque de carbono nos Oceanos Rasos em gigatonelada de carbono (GtC)",
            "Carbono nos Oceanos Profundos": "Estoque de carbono nos Oceanos Profundos em gigatonelada de carbono (GtC)",
        },
        legenda: {
            "Temperatura Oceânica": "Anomalia da Temperatura dos oceanos em Kelvin (k)",
            "Carbono nos Oceanos Rasos": "Estoque de carbono nos Oceanos Rasos em gigatonelada de carbono (GtC)",
            "Carbono nos Oceanos Profundos": "Estoque de carbono nos Oceanos Profundos em gigatonelada de carbono (GtC)",
        }
    },
};

class Tela {
    view() {
        return <div class="Graphics tela">
            <h1 class="Graphics Tela Title">Aqui o caos pode ser contemplado</h1>
            <h2 class="Graphics Tela Content">Nunca é demais lembrar o peso e o significado destes problemas,
                uma vez que a percepção das dificuldades representa uma abertura para a
                melhoria dos níveis de motivação departamental. Desta maneira, a contínua expansão de nossa atividade talvez venha
                a ressaltar a relatividade da gestão inovadora da qual fazemos parte.
            </h2>
            <img src={demoin} height={173} ></img>
        </div>
    }
    oncreate(vnode) {
        this.demoinanimation(vnode)
        this.writetext(vnode)
    }
    writetext(vnode) {
        let sizetext = []
        vnode.instance.children.map((e, i) => {
            if (e.dom.innerHTML != undefined) {
                let texto = e.dom.innerHTML.split('');
                let tempoescrita = sizetext.length == 0 ? 500 : (sizetext[sizetext.length - 1] + 10) * 75
                let hiddentext = "HELP".split('')
                //texto principal
                e.dom.innerHTML = ""                
                sizetext.push(texto.length)
                setTimeout(() => {
                    texto.forEach((element, index) => {
                        setTimeout(() => e.dom.innerHTML += element, 75 * index)
                    })
                    // Texto escondido
                    setTimeout(() => {
                        e.dom.innerHTML += "<br/>"
                        hiddentext.forEach((element, index) => {
                            setTimeout(() => e.dom.innerHTML += element, 650 * index)
                        })
                    }, 3*60000)
                }, tempoescrita)

            }
        })
    }
    demoinanimation(vnode) {
        let demonio = vnode.dom.children[2];
        demonio.src = demoin2;
        demonio.style.transform = "translate(-300%, -10%)"
        demonio.style.opacity = "0";
        setTimeout(() => {
            demonio.style.transition = "all 4s ease"
            demonio.style.transform = "translate(0%)"
            demonio.style.opacity = "100%";
            setTimeout(() => {
                demonio.style.transition = "all 0.1s ease"
                demonio.src = demoin;
                demonio.style.height = "250px";
            }, 3500)
        }, 4000)
    }
}

class Atmosfera {
    view() {
        return <div class="Graphics Gcontent">
            <Gerargraficos dados={pydata.Atmosfera} global={false} personagem="madoka"></Gerargraficos>
        </div>
    }
}
class Economia {
    view() {
        {
            return <div class="Graphics Gcontent">
                <Gerargraficos dados={pydata.Economia} global={false} personagem="HOMURA"></Gerargraficos>
            </div>
        }
    }
}
class População {
    view() {
        {
            return <div class="Graphics Gcontent">
                <Gerargraficos dados={pydata.Populacao} global={false} personagem="MIKI"></Gerargraficos>
            </div>
        }
    }
}

class Oceanos {
    view() {
        {
            return <div class="Graphics Gcontent">
                <Gerargraficos dados={pydata.Oceanos} global={false} personagem="TOMOE"></Gerargraficos>
            </div>

        }
    }
}
