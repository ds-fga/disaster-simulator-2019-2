import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Chart, VScroll} from '../ui';
import populationIcon from '../../img/icones_tela_inicial/people.png'
import demoingif from './src/demoin.gif';
import telaback from './src/telaback.jpg';
import { Gerargraficos, GraphicTab, GraphicTabs, GraphicsChart } from '../graphics/UiGraphics';



/**
 * Componente que mostra janela com informações demográficas.
 */
export class Population {
    background: object;

    // a funcao constructor eh onde damos os valores iniciais as variaveis
    constructor() {
        // para referencia a variaveis, usamos o prefixo "this"
        this.background = {
            "Telainicial": telaback, 
            "Riqueza": telaback,
            "Satisfacao": telaback,
            "Saude": telaback
            
        }
    }
    view() {
        return <Window id="PopulationWindow">
                <VScroll class="Population vscroll">
                    <div class="Population overlay">
                        <Tabs>
                            <GraphicTab title="Tela inicial" btn="warning" 
                                        background={this.background.Telainicial}><Tela></Tela></GraphicTab>
                            <GraphicTab title="Riqueza" btn="warning" 
                                        background={this.background.Riqueza}><Riqueza></Riqueza></GraphicTab>
                            <GraphicTab title="Satisfação" btn="warning"
                                        background={this.background.Satisfacao}><Satisfacao></Satisfacao></GraphicTab>
                            <GraphicTab title="Saúde" btn="warning"
                                        background={this.background.Saude}><Saude></Saude></GraphicTab>
                        </Tabs>
                    </div>
                </VScroll>
            
        </Window>
    }   
}

class Tela {
    view() {
        return <div class="Population tela">
            <h1 class="Population Tela Title">informações populacional</h1>
            <h2 class="Population Tela Content">Graficos para perceber o estrago</h2>
            <img src={demoingif} height={173}></img>
        </div>
    }

    oncreate(vnode) {
        let demonio = vnode.dom.children[2];
        demonio.style.transform = "translate(-800px, -50px)";
        demonio.style.opacity = "0";
        setTimeout(() => {
            demonio.style.transition = "all 10s ease";
            demonio.style.transform = "translate(0%)";
            demonio.style.opacity = "100%";
        }, 1000);

        let backuptext = [];
        vnode.instance.children.map((e, i) => {
            if (e.dom.innerHTML != undefined) {
                let texto = e.dom.innerHTML.split('');
                e.dom.innerHTML = "";
                let tempoescrita = backuptext.length == 0 ? 500 : (backuptext[backuptext.length - 1].length + 10) * 75;
                backuptext.push(texto);
                setTimeout(() => {
                    texto.forEach((element, index) => {
                        setTimeout(() => e.dom.innerHTML += element, 75 * index)
                    });
                    let hiddentext = "HELP".split('');
                    setTimeout(() => {
                        e.dom.innerHTML += "<br/>";
                        hiddentext.forEach((element, index) => {
                            setTimeout(() => e.dom.innerHTML += element, 650 * index)
                        })
                    }, 50000 / 1)
                }, tempoescrita)

            }
        })
    }
}

class Riqueza {

    constructor(){

    }

    view(){
        return <div>
            <div class="Gerargraficos">
                <GraphicsChart type="bar" data={dataRiqueza} options={options} ></GraphicsChart>
            </div>
        </div>
    }
}

class Satisfacao {

    constructor(){

    }

    view(){
        return <div>
            <div class="Gerargraficos">
                <GraphicsChart type="bar" data={dataSatisfacao} options={options}></GraphicsChart>
            </div>
        </div>
    }
}

class Saude {
    constructor(){

    }

    view(){
        return <div>
            <div class="Gerargraficos">
                <GraphicsChart type="bar" data={dataSaude} options={options}></GraphicsChart>
            </div>
        </div>
}
    }
}

let dataRiqueza = {
    labels: ['Super Ricos', 'Ricos', 'Classe média', 'Classe média-baixa', 'Pobres', 'Miseravéis'],
    datasets: [{
        label: '# of Votes',
        data: [1/100, 3/100, 20/100, 30/100, 40/100, 6/100],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

let dataSatisfacao = {
    labels: ['Contentes', 'Infelizes', 'Revoltados', 'Revolucionarios'],
    datasets: [{
        label: '# of Votes',
        data: [50/100, 35/100, 5/100, 10/100,],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
            
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
            
        ],
        borderWidth: 1
    }]
};

let dataSaude = {
    labels: ['saudáveis', 'doentes', 'moribundos'],
    datasets: [{
        label: '# of Votes',
        data: [50/100, 35/100, 15/100,],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
            
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
            
        ],
        borderWidth: 1
    }]
};


let options = {
    global: 'false',
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};
