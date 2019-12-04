import m from 'mithril';

import { Window, Tab, Tabs, Btn, Sidebar, Component } from '../ui';

import terminatorImg from './imagens/piramide.jpg';
import rainhaImg from './imagens/rainha.jpg';
import alGoreImg from './imagens/al gore.jpg';
import billImg from './imagens/bill.jpg';
import jeffImg from './imagens/jeff.jpg';
import joesleyImg from './imagens/joesley.jpg';
import michaelImg from './imagens/michael.jpg';
import obamaImg from './imagens/obama.jpg';
import xiImg from './imagens/xi.jpg';
import papaImg from './imagens/papa.jpg';
import silvioImg from './imagens/silvio.jpg';
import optimusImg from './imagens/optimus.jpg';
import putinImg from './imagens/putin.jpg';
import rainhaJson from './arquivos_json/rainha.json'; 
import alGoreJson from './arquivos_json/alGore.json';
import billJson from './arquivos_json/bill.json';
import jeffJson from './arquivos_json/jeff.json';
import putinJson from './arquivos_json/putin.json';
import xiJson from './arquivos_json/xi.json';
import joesleyJson from './arquivos_json/joesley.json';
import michaelJson from './arquivos_json/michael.json';
import obamaJson from './arquivos_json/obama.json';
import papaJson from './arquivos_json/papa.json';
import silvioJson from './arquivos_json/silvio.json';
import optimusJson from './arquivos_json/optimus.json';


let event = {

    img: terminatorImg,

}
function funcao

let illuminatiList = [
    {
        name: "Al Gore",
        imgUrl: alGoreImg,
        imgAlt: "Imagem Al Gore", 
        sauroUrl: billImg,
        introduction: "Ambiente",
        information: alGoreJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Rainha Elizabeth II",
        description: <img src={rainhaImg} width="250" height="290" alt= "Imagem Rainha"/>,
        introduction: "Politica",
        information: rainhaJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Bill Gates",
        description: <img src={billImg} width="250" height="290" alt= "Imagem Bill Gates"/>,
        introduction: "Tecnologia",
        information: billJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Jeff Bezos",
        description: <img src={jeffImg} width="250" height="290" alt= "Imagem Jeff"/>,
        introduction: "Comércio",
        information: jeffJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Putin",
        description: <img src={putinImg} width="250" height="290" alt= "Imagem Putin"/>,
        introduction: "Guerra",
        information: putinJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Xi Jinping",
        description: <img src={xiImg} width="250" height="290" alt= "Imagem Xi"/>,
        introduction: "Indústria",
        information: xiJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Michael Jackson",
        description: <img src={michaelImg} width="250" height="290" alt= "Imagem Michael"/>,
        introduction: "Cultura",
        information: michaelJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Papa Francisco",
        description: <img src={papaImg} width="250" height="290" alt= "Imagem Papa"/>,
        introduction: "Religião",
        information: papaJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Silvio Santos",
        description: <img src={silvioImg} width="250" height="290" alt= "Imagem Silvio"/>,
        introduction: "Mídia/Informação",
        information: silvioJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Obama",
        description: <img src={obamaImg} width="250" height="290" alt= "Imagem Obama"/>,
        introduction: "Saúde",
        information: obamaJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Optimus Prime",
        description: <img src={optimusImg} width="250" height="290" alt= "Imagem Optimus"/>,
        introduction: "Transporte",
        information: optimusJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Joesley",
        description: <img src={joesleyImg} width="250" height="290" alt= "Imagem Joesley"/>,
        introduction: "Agropecuária",
        information: joesleyJson,
        taxa: "50% alinhamento",
    },
]

function Graph(){
var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];

var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx).Pie(data);
}

/**
 * Componente que mostra janela do conselho Illuminati.
 */

export class Illuminati {

    view() {
        //     
        return <Window> 
            <Sidebar src={event.img} title="Conselho Illuminati" back={true}/>
            <Tabs>
                
                <Tab title="Ficha"> 
                  <Tabs vertical={true} reverse={true}>{illuminatiList.map((e) => renderIlluminattiTab(e))}</Tabs>
                </Tab>
                
                <Tab title="Seguidores">
                    
             
                </Tab>
               
            </Tabs>

        </Window>

    }
}

function renderIlluminattiTab(x) {
    return <Tab title={x.name}>
        <div class="IlluminatiSheet">
        <div class = "illuminati_side">
            <Sidebar class="description" title = {x.introduction}></Sidebar>
            <Sidebar class="taxa" title = {x.taxa}></Sidebar>
        </div>
        <div class="IlluminatiImage">
            <img src={x.sauroUrl} width="250" height="290" alt={x.imgAlt}/>
            <img class="topImg" src={x.imgUrl} width="250" height="290" alt={x.imgAlt}/>
        </div>
            
        </div>
        <div class = "IlluminatInformation">
            <h2>Informações</h2>
            <dl>
                <dt>Nome</dt><dd>{x.information.nome}</dd>
                <dt>Idade</dt><dd>{x.information.idade}</dd>
                <dt>Atributos</dt>
                    <dd>Força: {x.information.atributos.forca}</dd>
                    <dd>Inteligência: {x.information.atributos.inteligencia}</dd>
                <dt>Habilidades</dt>
                    <dd>{x.information.habilidades.a}</dd>
                    <dd>{x.information.habilidades.b}</dd>
                    <dd>{x.information.habilidades.c}</dd>
            </dl>

        </div>
    </Tab>
    
}
