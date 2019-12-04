import m from 'mithril';
import { Window, Sidebar } from '../ui';
import { Tabs, Tab } from './components/ScienceTab.component';
import TechInfo from './components/TechInfo.component';
import Tech from './components/Tech.component';
import TechList from './components/TechList.component';
import SearchBar from './components/SearchBar.component';
import TechButton from './components/TechButton.component';
import techsDB from './techs';

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
            techs: [
                {
                    id: 1,
                    title: "Conhecimento atômico",
                    price: "50",
                    type: "is-warning",
                    spec: "Estudos necessários para entender melhor o funcionamento das partículas atômicas e subatômicas e como promover mudanças ambientalmente favoráveis.",
                    type_tech: "nuclear",
                    status: "0",
                },
                {
                    id: 2,
                    title: "Usinas nucleares",
                    price: "100",
                    type: "is-warning",
                    spec: "Criação de polos de usinas nucleares para produzirem mais energia com um imacto ambiental menor.",
                    type_tech: "nuclear",
                    status: "1"
                },
                {
                    id: 3,
                    title: "Nuclear 3",
                    price: "150",
                    type: "is-warning",
                    spec: "Permite pesquisa avançada em energia nuclear",
                    type_tech: "nuclear",
                    status: "1"
                },
                {
                    id: 4,
                    title: "Conhecimento molecular",
                    price: "50",
                    type: "is-success",
                    spec: "Estudos necessários para entender melhor o funcionamento da microbiologia e como promover mudanças ambientalmente favoráveis.",
                    type_tech: "biológico",
                    status: "0"
                },
                {
                    id: 5,
                    title: "Biofiltro de algas",
                    price: "100",
                    type: "is-success",
                    spec: "Biofiltros formados por microalgas aumentam a absorção de CO2 da atmosfera em um nível 100 vezes mais alto que as árvores, podendo melhorar a qualidade de vida na Terra.",
                    type_tech: "biológico",
                    status: "1"
                },
                {
                    id: 6,
                    title: "Biológico 3",
                    price: "150",
                    type: "is-success",
                    spec: "Permite pesquisa avançada em biotecnologia",
                    type_tech: "biológico",
                    status: "1"
                },
                {
                    id: 7,
                    title: "Conhecimento de energias renováveis",
                    price: "50",
                    type: "is-error",
                    spec: "Estudos necessários para fazer meios de transporte serem menos agressivos ambientalmente.",
                    type_tech: "transporte",
                    status: "0"
                },
                {
                    id: 8,
                    title: "Carro movido a motor de hidrogênio",
                    price: "100",
                    type: "is-error",
                    spec: "DELiberação do motor movido a hidrogênio a preços acessíveis para a população, reduzindo a produção de CO2.SCRIÇÃO",
                    type_tech: "transporte",
                    status: "1"
                },
                {
                    id: 0,
                    title: "NOME",
                    price: "",
                    type: "is-error",
                    spec: "DESCRIÇÃO",
                    type_tech: "tipo",
                    status: ""
                },
                {
                  id: 9,
                    title: "Conhecimentos sobre o fluxo energético",
                    price: "50",
                    type: "is-primary",
                    spec: "Estudos necessários para promover o uso energético mais eficiente e menos poluente.",
                    type_tech: "energético",
                    status: "0"
                },
                {
                  id: 10,
                    title: "Usinas eólicas",
                    price: "100",
                    type: "is-primary",
                    spec: "Instalação de usinas eólicas para maior produção energética.",
                    type_tech: "energético",
                    status: "1"
                },
                {
                    id: 11,
                    title: "NOME",
                    price: "",
                    type: "is-primary",
                    spec: "DESCRIÇÃO",
                    type_tech: "energético",
                    status: "3"
                },
                {
                    id: 12,
                    title: "Conhecimentos industriais",
                    price: "50",
                    type: "is-success",
                    spec: "Estudos necessários ara promover uma produção industrial ambientalmente melhor.",
                    type_tech: "industrial",
                    status: "0"
                },
                {
                  id: 13,
                    title: "Menos produção de lixo ",
                    price: "100",
                    type: "is-success",
                    spec: "Produção industrial mais eficiente, fazendo com que a produção de lixo seja menor e ambientalmente favorável.",
                    type_tech: "industrial",
                    status: "1"
                },
            ],
            techs: techsDB,
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
        var element = document.getElementById("scienceWindow");
        var style = element.style;
        style.animation = "textShadow 1.6s infinite, turn-off 0.55s cubic-bezier(0.755, 0.050, 0.855, 0.060)";
        window.setTimeout(function(){element.parentNode.removeChild(element)}, 550);
    }

    view () {

        const { techs, searchbox, currentTech, techsFilter } = this.estado;
        const filteredtechs = techs.filter(tech => tech.title.toLowerCase().includes(searchbox.toLowerCase()))
        const element = document.getElementById("scienceWindow");

        return <Window id="scienceWindow" class="science">

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
                                    this.estado.currentTechListInfo = (tech.listInfo || []);
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
                                    this.estado.currentTechListInfo = (tech.listInfo || []);
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
                                    this.estado.currentTechListInfo = (tech.listInfo || []);
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
                                    this.estado.currentTechListInfo = (tech.listInfo || []);
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
                                    this.estado.currentTechListInfo = (tech.listInfo || []);
                                }}/>
                            ))}
                        </TechList>
                    </Tab>
                </Tabs>
                <TechInfo title={this.estado.currentTech} spec={this.estado.currentTechSpec} listInfo={this.estado.currentTechListInfo}>
                  <div style="float: right">
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
