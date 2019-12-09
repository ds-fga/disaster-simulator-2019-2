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

import rainha_dino from './imagens/rainha_dino.jpg';
import alGore_dino from './imagens/al_gore_dino.jpg';
import bill_dino from './imagens/bill_dino.jpg';
import jeff_dino from './imagens/jeff_dino.jpg';
import joesley_dino from './imagens/joesley_dino.jpg';
import michael_dino from './imagens/michael_dino.jpg';
import obama_dino from './imagens/obama_dino.jpg';
import xi_dino from './imagens/xi_dino.jpg';
import papa_dino from './imagens/papa_dino.jpg';
import silvio_dino from './imagens/silvio_dino.jpg';
import optimus_dino from './imagens/optimus_dino.jpg';
import putin_dino from './imagens/putin_dino.jpg';

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
let illuminatiList = [
    {
        name: "Al Gore",
        imgUrl: alGoreImg,
        imgAlt: "Imagem Al Gore", 
        sauroUrl: alGore_dino,
        introduction: "Ambiente",
        information: alGoreJson,
        taxa: "--% alinhamento",

    },
    {
        name: "Rainha Elizabeth II",
        imgUrl: rainhaImg,
        imgAlt: "Imagem Rainha",
        sauroUrl: rainha_dino,
        introduction: "Politica",
        information: rainhaJson,
        taxa: "--% alinhamento",
    },
    {
        name: "Bill Gates",
        imgUrl: billImg,
        imgAlt: "Imagem Bill Gates",
        sauroUrl: bill_dino,
        introduction: "Tecnologia",
        information: billJson,
        taxa: "--% alinhamento",
    },
    {
        name: "Jeff Bezos",
        imgUrl: jeffImg,
        imgAlt: "Imagem Jeff",
        sauroUrl: jeff_dino,
        introduction: "Comércio",
        information: jeffJson,
        taxa: "--% alinhamento",
    },
    {
        name: "Putin",
        imgUrl: putinImg,
        imgAlt: "Imagem Putin",
        sauroUrl: putin_dino,
        introduction: "Guerra",
        information: putinJson,
        taxa: "--% alinhamento",
    },
    {
        name: "Xi Jinping",
        imgUrl: xiImg,
        imgAlt: "Imagem Xi",
        sauroUrl: xi_dino,
        introduction: "Indústria",
        information: xiJson,
        taxa: "--% alinhamento",
    },
    {
        name: "Michael Jackson",
        imgUrl: michaelImg,
        imgAlt: "Imagem Michael",
        sauroUrl: michael_dino,
        introduction: "Cultura",
        information: michaelJson,
        taxa: "--% alinhamento",
    },
    {
        name: "Papa Francisco",
        imgUrl: papaImg,
        imgAlt: "Imagem Papa",
        sauroUrl: papa_dino,
        introduction: "Religião",
        information: papaJson,
        taxa: "--% alinhamento",
    },
    {
        name: "Silvio Santos",
        imgUrl: silvioImg,
        imgAlt: "Imagem Silvio",
        sauroUrl: silvio_dino,
        introduction: "Mídia/Informação",
        information: silvioJson,
        taxa: "--% alinhamento",
    },
    {
        name: "Obama",
        imgUrl: obamaImg,
        imgAlt: "Imagem Obama",
        sauroUrl: obama_dino,
        introduction: "Saúde",
        information: obamaJson,
        taxa: "--% alinhamento",
    },
    {
        name: "Optimus Prime",
        imgUrl: optimusImg,
        imgAlt: "Imagem Optimus",
        sauroUrl: optimus_dino,
        introduction: "Transporte",
        information: optimusJson,
        taxa: "--% alinhamento",
    },
    {
        name: "Joesley",
        imgUrl: joesleyImg,
        imgAlt: "Imagem Joesley",
        sauroUrl: joesley_dino,
        introduction: "Agropecuária",
        information: joesleyJson,
        taxa: "--% alinhamento",
    },
]

/**
 * Componente que mostra janela do conselho Illuminati.
 */

export class Illuminati {

    view() {
        //     
        return <Window id='IlluminatiWindow'> 
            <Sidebar class = "Image" src={event.img} title="Conselho Illuminati" back={true}/>
            <Tabs>
                
                <Tab title={<button class="Illuminati_btn">Ficha</button}> 
                  <Tabs vertical={true} reverse={true}>{illuminatiList.map((e) => renderIlluminattiTab(e))}</Tabs>
                </Tab>
                
                <Tab title={<button class="Illuminati_btn">Seguidores</button}>
                    <h1 class="Titulo_Seguidores">Distribuição de seguidores:</h1>
                    <br></br>
                    <div class="chart"><b>Empresários</b></div>
                    <div class="chart"><b>Políticos</b></div>
                    <div class="chart"><b>Mídia</b></div>

<ul class="key">
  <li>
    <strong class="percent red">4%</strong>
    <span class="choice">Al Gore</span>
  </li>
  <li>
    <strong class="percent gray">4%</strong>
    <span class="choice">Rainha Elizabeth II</span>
  </li>
  <li>
    <strong class="percent purple">6%</strong>
    <span class="choice">Bill Gates</span>
  </li>
  <li>
    <strong class="percent blue">9%</strong>
    <span class="choice">Jeff Bezos</span>
  </li>
  <li>
    <strong class="percent yellow">31%</strong>
    <span class="choice">Putin</span>
  </li>
  <li>
    <strong class="percent orange">46%</strong>
    <span class="choice">Xi Jinping</span>
  </li>
</ul>
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
            <img class="topImg" src={x.imgUrl} width="250" height="290" />
        </div>
            
        </div>
        <div class = "IlluminatInformation">
            <h2>Informações</h2>
            <dl>
                <dt>Nome</dt><dd class = "nome_illuminati">{x.information.nome}</dd>
                <dt>Idade</dt><dd>{x.information.idade}</dd>
                <dt>Quem sou:</dt><dd class="sou">{x.information.introducao}</dd>
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
                    <br></br>
                <h2>Objetivos</h2>
                    <dd>Ambiente: {x.information.objetivos.ambiente}%</dd>
                    <dd>Tecnologia: {x.information.objetivos.tecnologia}%</dd>
                    <dd>Finanças: {x.information.objetivos.financas}%</dd>
                    <dd>Filantropia: {x.information.objetivos.filantropia}%</dd>               
            </dl>

        </div>
    </Tab>
    
}
