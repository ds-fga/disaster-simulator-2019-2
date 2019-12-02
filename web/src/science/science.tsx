import m from 'mithril';
import { Window, Sidebar } from '../ui';
import { Tabs, Tab } from './components/ScienceTab.component';
import TechInfo from './components/TechInfo.component';
import Tech from './components/Tech.component';
import TechList from './components/TechList.component';
import SearchBar from './components/SearchBar.component';
import techsDB from './techs';

/**
 * Componente para janela com árvore tecnológica e de desenvolvimento científico.
 */

interface TechAttrs {
    title: string;
    money?: string;
    myClass?: string | string[];
    status: string;
    type: string;
    price: string;
    spec: string;
    type_tech?: string;
    prog?: number;
}

export class Science {

    effectEnabled: boolean;
    estado: {
        techs: Array<TechAttrs>;
        techsFilter: Object;
        currentArea: string;
        currentTech: string;
        searchbox: string;
        currentTechSpec: string;
        currentTechProg?: number;
    };

    constructor(){
        this.estado = {
            techs: techsDB,

            techsFilter: {},
            currentArea: "",
            currentTech: "",
            searchbox: "",
            currentTechSpec: "",
        };
        this.effectEnabled = true;
    }

    oninit () {
        const newTechsFilter = {};
        this.estado.techs.forEach((tech) => {
            if (!(tech.type_tech in newTechsFilter)) {
            newTechsFilter[tech.type_tech] = [];
            }
            newTechsFilter[tech.type_tech].push(tech);
        });
        this.estado.techsFilter = newTechsFilter;
        var element = document.getElementById("scienceWindow");
    }

    voltar(){
        var element = document.getElementById("scienceWindow");
        var style = element.style;
        style.animation = "textShadow 1.6s infinite, turn-off 0.55s cubic-bezier(0.755, 0.050, 0.855, 0.060)";
        window.setTimeout(function(){element.parentNode.removeChild(element)}, 550);
    }

    toggleEffect(){
        const element = document.getElementById("scienceWindow");
        const techs = document.querySelectorAll(".tech-btn");
        const tabs = document.querySelectorAll(".Science__btn");
        if (this.effectEnabled){
            element.classList.remove("crt");
            element.style.animation = "";
            for(let i = 0; i < techs.length; i++){
                techs[i].style = "";
            }
            for(let i = 0; i < tabs.length; i++){
                tabs[i].style = "";
            }
        }else {
            element.classList.add("crt");
            element.style.animation = "textShadow 1.6s infinite";
            for(let i = 0; i < techs.length; i++){
                techs[i].style.animation = "textShadow 1.6s infinite";
            }
            for(let i = 0; i < tabs.length; i++){
                tabs[i].style.animation = "textShadow 1.6s infinite";
            }
        }
        this.effectEnabled = !this.effectEnabled;
    }

    view () {

        const { techs, searchbox, currentTech, techsFilter} = this.estado;
        const filteredtechs = techs.filter(tech => tech.title.toLowerCase().includes(searchbox.toLowerCase()) && tech.status !== "1" )
        const element = document.getElementById("scienceWindow");

        return <Window id="scienceWindow" class="science">

            <Sidebar class="science__sidebar" title={
                <div class="science__sidebar-btns">
                    <button class="nes-btn science__sidebar-btn" onclick={this.voltar}>Voltar</button>
                </div>
            }/>

            <div class="scienceContent">
                <Tabs>
                    <Tab class="science__tabs" title={<button class="nes-btn Science__btn">Visão Geral</button>}>
                        <TechList title="Tecnologias disponíveis">
                            <SearchBar placeholder="Buscar ciência" changeHandler={e => {
                                this.estado.searchbox = e.target.value}}/>
                            <div class="listcontent">{filteredtechs.map(tech => (
                                <Tech title={tech.title} status={tech.status} money={tech.price} type={tech.type || ""} changeHandler={e => {
                                    this.estado.currentTechSpec = tech.spec;
                                    this.estado.currentTech = tech.title;
                                    this.estado.currentTechProg = tech.prog;
                                }}/>
                            ))}</div>
                        </TechList>    
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-warning Science__btn">Nuclear</button>}>
                        <TechList title="Nuclear">
                            {(techsFilter['nuclear'] || []).map((tech) => (
                                <Tech title={tech.title} spec={tech.spec} money={tech.price} type={tech.type || ""} changeHandler={e => {
                                    this.estado.currentTechSpec = tech.spec;
                                    this.estado.currentTech = tech.title;
                                    this.estado.currentTechProg = tech.prog;
                                }}/>
                            ))}
                        </TechList>
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-success Science__btn">Biológico</button>}>
                        <TechList title="Biológico">
                            {(techsFilter['biológico'] || []).map((tech) => (
                                <Tech title={tech.title} spec={tech.spec} money={tech.price} type={tech.type || ""} changeHandler={e => {
                                    this.estado.currentTechSpec = tech.spec;
                                    this.estado.currentTech = tech.title;
                                    this.estado.currentTechProg = tech.prog;
                                }}/>
                            ))}
                        </TechList>
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-primary Science__btn">Energético</button>}>
                        <TechList title="Energético">
                            {(techsFilter['energético'] || []).map((tech) => (
                                <Tech title={tech.title} spec={tech.spec} money={tech.price} type={tech.type || ""} changeHandler={e => {
                                    this.estado.currentTechSpec = tech.spec;
                                    this.estado.currentTech = tech.title;
                                    this.estado.currentTechProg = tech.prog;
                                }}/>
                            ))}
                        </TechList>
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-error Science__btn">Transporte</button>}>
                        <TechList title="Transporte">
                            {(techsFilter['transporte'] || []).map((tech) => (
                                <Tech title={tech.title} spec={tech.spec} money={tech.price} type={tech.type || ""} changeHandler={e => {
                                    this.estado.currentTechSpec = tech.spec;
                                    this.estado.currentTech = tech.title;
                                    this.estado.currentTechProg = tech.prog;
                                }}/>
                            ))}
                        </TechList>
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn industry Science__btn">Indústria</button>}>
                        <TechList title="Indústria">
                            {(techsFilter['industrial'] || []).map((tech) => (
                                <Tech title={tech.title} spec={tech.spec} money={tech.price} type={tech.type || ""} changeHandler={e => {
                                    this.estado.currentTechSpec = tech.spec;
                                    this.estado.currentTech = tech.title;
                                    this.estado.currentTechProg = tech.prog;
                                }}/>
                            ))}
                        </TechList>
                    </Tab>
                </Tabs>

                <TechInfo progress={this.estado.currentTechProg}
                    minus={e => {
                        console.log(this.estado.currentTechProg);
                        this.estado.currentTechProg -= 5;
                    }} add={e =>{
                        console.log(this.estado.currentTechProg);
                        this.estado.currentTechProg += 5;
                    }} title={this.estado.currentTech}
                    spec={this.estado.currentTechSpec}
                />
            </div>
            
        </Window>
    }
}