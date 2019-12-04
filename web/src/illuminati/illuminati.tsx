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
        imgUrl: rainhaImg,
        imgAlt: "Imagem Rainha",
        sauroUrl: billImg,
        introduction: "Politica",
        information: rainhaJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Bill Gates",
        imgUrl: billImg,
        imgAlt: "Imagem Bill Gates",
        sauroUrl: alGoreImg,
        introduction: "Tecnologia",
        information: billJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Jeff Bezos",
        imgUrl: jeffImg,
        imgAlt: "Imagem Jeff",
        sauroUrl: rainhaImg,
        introduction: "Comércio",
        information: jeffJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Putin",
        imgUrl: putinImg,
        imgAlt: "Imagem Putin",
        sauroUrl: michaelImg,
        introduction: "Guerra",
        information: putinJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Xi Jinping",
        imgUrl: xiImg,
        imgAlt: "Imagem Xi",
        sauroUrl: papaImg,
        introduction: "Indústria",
        information: xiJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Michael Jackson",
        imgUrl: michaelImg,
        imgAlt: "Imagem Michael",
        sauroUrl: xiImg,
        introduction: "Cultura",
        information: michaelJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Papa Francisco",
        imgUrl: papaImg,
        imgAlt: "Imagem Papa",
        sauroUrl: silvioImg,
        introduction: "Religião",
        information: papaJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Silvio Santos",
        imgUrl: silvioImg,
        imgAlt: "Imagem Silvio",
        sauroUrl: obamaImg,
        introduction: "Mídia/Informação",
        information: silvioJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Obama",
        imgUrl: obamaImg,
        imgAlt: "Imagem Obama",
        sauroUrl: joesleyImg,
        introduction: "Saúde",
        information: obamaJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Optimus Prime",
        imgUrl: optimusImg,
        imgAlt: "Imagem Optimus",
        sauroUrl: obamaImg,
        introduction: "Transporte",
        information: optimusJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Joesley",
        imgUrl: joesleyImg,
        imgAlt: "Imagem Joesley",
        sauroUrl: xiImg,
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
        return <Window id='IlluminatiWindow'> 
            <Sidebar src={event.img} title="Conselho Illuminati" back={true}/>
            <Tabs>
                
                <Tab title={<button class="Illuminati_btn">Ficha</button}> 
                  <Tabs vertical={true} reverse={true}>{illuminatiList.map((e) => renderIlluminattiTab(e))}</Tabs>
                </Tab>
                
                <Tab title={<button class="Illuminati_btn">Seguidores</button}>
                    
                </Tab>
               
            </Tabs>

        </Window>
    }
}

function renderIlluminattiTab(x) {
    return <Tab title={<button class="Illuminati_n">{x.name}</button}>
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
                <br></br>
                <h2>Atributos</h2>
                <br></br>
                    <dd>Força: {x.information.atributos.forca}</dd>
                    <dd>Inteligência: {x.information.atributos.inteligencia}</dd>
                    <br></br>
                <h2>Habilidades</h2>
                    <dd>{x.information.habilidades.a}</dd>
                    <dd>{x.information.habilidades.b}</dd>
                    <dd>{x.information.habilidades.c}</dd>
                <h2>Objetivos</h2>
                    <dd>Ambiente: {x.information.objetivos.ambiente}%</dd>
                    <dd>Tecnologia: {x.information.objetivos.tecnologia}%</dd>
                    <dd>Finanças: {x.information.objetivos.financas}%</dd>
                    <dd>Filantropia: {x.information.objetivos.filantropia}%</dd>               
            </dl>

        </div>
    </Tab>
    
}
