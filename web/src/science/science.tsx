import m from 'mithril';
import {Window, Tab, Tabs, Btn, Sidebar, VScroll} from '../ui';

import TechInfo from './components/TechInfo.component';
import Tech from './components/Tech.component';
import TechList from './components/TechList.component';
import SearchBar from './components/SearchBar.component';

/**
 * Componente para janela com árvore tecnológica e de desenvolvimento científico.
 */
export class Science {

    estado: object;

    constructor(){
        this.estado = {
            techs: [
                {
                    title: "Nuclear 1",
                    price: "50",
                    type: "is-warning",
                    spec: "Permite pesquisa básica em energia nuclear",
                    type_tech: "nuclear",
                    status: "0"
                },
                {
                    title: "Nuclear 2",
                    price: "100",
                    type: "is-warning",
                    spec: "Permite pesquisa média em energia nuclear",
                    type_tech: "nuclear",
                    status: "1"
                },
                {
                    title: "Nuclear 3",
                    price: "150",
                    type: "is-warning",
                    spec: "Permite pesquisa avançada em energia nuclear",
                    type_tech: "nuclear",
                    status: "1"
                },
                {
                    title: "Biológico 1",
                    price: "50",
                    type: "is-success",
                    spec: "Permite pesquisa básica em biotecnologia",
                    type_tech: "biológico",
                    status: "0"
                },
                {
                    title: "Biológico 2",
                    price: "100",
                    type: "is-success",
                    spec: "Permite pesquisa média em biotecnologia",
                    type_tech: "biológico",
                    status: "1"
                },
                {
                    title: "Biológico 3",
                    price: "150",
                    type: "is-success",
                    spec: "Permite pesquisa avançada em biotecnologia",
                    type_tech: "biológico",
                    status: "1"
                }
            ],

            techsFilter: {},
            currentArea: "",
            currentTech: "",
            searchbox: "",
            currentTechSpec: ""

        }
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

    view () {

        const { techs, searchbox, currentTech, techsFilter } = this.estado;
        const filteredtechs = techs.filter(tech => tech.title.toLowerCase().includes(searchbox.toLowerCase()) && tech.status == "0" )

        return <Window class="science">

            <Sidebar class="science__sidebar" title={
                <button class="nes-btn science__sidebar-btn">Voltar</button>
            }/>

            <div class="scienceContent">
                <Tabs>
                    <Tab class="science__tabs" title={<button class="nes-btn Science__btn">Visão Geral</button>}>
                        <TechList>
                            <SearchBar placeholder="Buscar ciência" changeHandler={e => {
                                this.estado.searchbox = e.target.value}}/>
                            {filteredtechs.map(tech => (
                                <Tech title={tech.title} money={tech.price} type={tech.type || ""} changeHandler={e => {
                                    this.estado.currentTechSpec = tech.spec;
                                    this.estado.currentTech = tech.title;
                                }}/>
                            ))}
                        </TechList>    
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-warning Science__btn">Nuclear</button>}>
                      {(techsFilter['nuclear'] || []).map((tech) => (
                        <Tech title={tech.title} spec={tech.spec} money={tech.price} type={tech.type || ""} changeHandler={e => {
                            this.estado.currentTechSpec = tech.spec;
                            this.estado.currentTech = tech.title;
                        }}/>
                      ))}
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-success Science__btn">Biológico</button>}>
                      {(techsFilter['biológico'] || []).map((tech) => (
                        <Tech title={tech.title} spec={tech.spec} money={tech.price} type={tech.type || ""} changeHandler={e => {
                            this.estado.currentTechSpec = tech.spec;
                            this.estado.currentTech = tech.title;
                        }}/>
                      ))}
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-primary Science__btn">Energético</button>}>
                      {(techsFilter['energético'] || []).map((tech) => (
                        <Tech title={tech.title} spec={tech.spec} money={tech.price} type={tech.type || ""} changeHandler={e => {
                            this.estado.currentTechSpec = tech.spec;
                            this.estado.currentTech = tech.title;
                        }}/>
                      ))}
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-error Science__btn">Transporte</button>}>
                    {(techsFilter['transporte'] || []).map((tech) => (
                        <Tech title={tech.title} spec={tech.spec} money={tech.price} type={tech.type || ""} changeHandler={e => {
                            this.estado.currentTechSpec = tech.spec;
                            this.estado.currentTech = tech.title;
                        }}/>
                      ))}
                    </Tab>
                </Tabs>

                <TechInfo title={this.estado.currentTech} spec={this.estado.currentTechSpec}/>
            </div>
            
        </Window>
    }
}