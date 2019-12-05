import m from 'mithril';
import { Window, Sidebar } from '../ui';
import { Tabs, Tab } from './components/ScienceTab.component';
import TechInfo from './components/TechInfo.component';
import Tech from './components/Tech.component';
import TechList from './components/TechList.component';
import SearchBar from './components/SearchBar.component';
import TechButton from './components/TechButton.component';

/**
 * Componente para janela com árvore tecnológica e de desenvolvimento científico.
 */
export class Science {

    effectEnabled: boolean;
    estado: {
        techs: any;
        techsFilter: Object;
        currentArea: string;
        currentTech: string;
        searchbox: string;
        currentTechSpec: string;
        currentTechProg?: number;
    };

    constructor(){
        this.estado = {
            techs: [],
            techsFilter: {},
            currentArea: "",
            currentTech: "",
            searchbox: "",
            currentTechSpec: "",
        };
        this.effectEnabled = true;
        
        m.request({ url: "http://localhost:5000/science/list-techs/",
                    method: 'GET',

            }).then(
                (x) => { this.estado.techs = x }
        );
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
    }

    voltar(){
        const element = document.getElementsByClassName("Window")[1];
        var style = element.style;
        style.animation = "textShadow 1.6s infinite, turn-off 0.55s cubic-bezier(0.755, 0.050, 0.855, 0.060)";
        window.setTimeout(function(){element.parentNode.removeChild(element)}, 550);
    }

    view () {

        const { techs, searchbox, currentTech, techsFilter } = this.estado;
        const filteredtechs = techs.filter(tech => tech.title.toLowerCase().includes(searchbox.toLowerCase()))
        const element = document.getElementsByClassName("Window");

        return <Window class="science">

            <Sidebar class="science__sidebar" title={
                <button class="nes-btn science__sidebar-btn" onclick={this.voltar}>{"<"} Voltar</button>
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
                                    this.estado.currentTechListInfo = (tech.listInfo || []);
                                    this.estado.currentTechProg = tech.prog;
                                }}/>
                            ))}</div>
                        </TechList>    
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-warning Science__btn">Nuclear</button>}>
                        <TechList title="Nuclear">
                            {(techs['nuclear'] || []).map((tech) => (
                                <Tech title={tech.title} spec={tech.spec} money={tech.price} type={tech.type || ""} changeHandler={e => {
                                    this.estado.currentTechSpec = tech.spec;
                                    this.estado.currentTech = tech.title;
                                    this.estado.currentTechListInfo = (tech.listInfo || []);
                                    this.estado.currentTechProg = tech.prog;
                                }}/>
                            ))}
                        </TechList>
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-success Science__btn">Biológico</button>}>
                        <TechList title="Biológico">
                            {(techs['biológico'] || []).map((tech) => (
                                <Tech title={tech.title} spec={tech.spec} money={tech.price} type={tech.type || ""} changeHandler={e => {
                                    this.estado.currentTechSpec = tech.spec;
                                    this.estado.currentTech = tech.title;
                                    this.estado.currentTechListInfo = (tech.listInfo || []);
                                    this.estado.currentTechProg = tech.prog;
                                }}/>
                            ))}
                        </TechList>
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-primary Science__btn">Energético</button>}>
                        <TechList title="Energético">
                            {(techs['energético'] || []).map((tech) => (
                                <Tech title={tech.title} spec={tech.spec} money={tech.price} type={tech.type || ""} changeHandler={e => {
                                    this.estado.currentTechSpec = tech.spec;
                                    this.estado.currentTech = tech.title;
                                    this.estado.currentTechListInfo = (tech.listInfo || []);
                                    this.estado.currentTechProg = tech.prog;
                                }}/>
                            ))}
                        </TechList>
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-error Science__btn">Transporte</button>}>
                        <TechList title="Transporte">
                            {(techs['transporte'] || []).map((tech) => (
                                <Tech title={tech.title} spec={tech.spec} money={tech.price} type={tech.type || ""} changeHandler={e => {
                                    this.estado.currentTechSpec = tech.spec;
                                    this.estado.currentTech = tech.title;
                                    this.estado.currentTechListInfo = (tech.listInfo || []);
                                    this.estado.currentTechProg = tech.prog;
                                }}/>
                            ))}
                        </TechList>
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn industry Science__btn">Indústria</button>}>
                        <TechList title="Indústria">
                            {(techs['industrial'] || []).map((tech) => (
                                <Tech title={tech.title} spec={tech.spec} money={tech.price} type={tech.type || ""} changeHandler={e => {
                                    this.estado.currentTechSpec = tech.spec;
                                    this.estado.currentTech = tech.title;
                                    this.estado.currentTechListInfo = (tech.listInfo || []);
                                    this.estado.currentTechProg = tech.prog;
                                }}/>
                            ))}
                        </TechList>
                    </Tab>
                </Tabs>
                <TechInfo title={this.estado.currentTech} prog={this.estado.currentTechProg} spec={this.estado.currentTechSpec} listInfo={this.estado.currentTechListInfo}>
                  <div style="float: right; margin-bottom: .3rem">
                    <TechButton onclick={() => document.getElementById('dialog-dark-rounded').showModal()}>Comprar</TechButton>
                    <dialog class="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
                      <form method="dialog">
                        <p class="title">{`Deseja comprar ${currentTech}`}</p>
                        <p></p>
                        <menu class="dialog-menu">
                          <button class="nes-btn">Cancel</button>
                          <button class="nes-btn is-primary">Confirm</button>
                        </menu>
                      </form>
                    </dialog>
                  </div>
                </TechInfo>  
            </div>
        </Window>
    }
}
