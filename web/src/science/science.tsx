import m from 'mithril';
import { Window, Sidebar } from '../ui';
import { Tabs, Tab } from './components/ScienceTab.component';
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
                    // NUCLEAR ----------------------------
                    title: "Conhecimento atômico",
                    price: "50",
                    type: "is-warning",
                    spec: "Estudos necessários para entender melhor o funcionamento das partículas atômicas e subatômicas e como promover mudanças ambientalmente favoráveis.",
                    type_tech: "nuclear",
                    status: "0"
                },
                {
                    title: "Usinas nucleares",
                    price: "100",
                    type: "is-warning",
                    spec: "Criação de polos de usinas nucleares para produzirem mais energia com um imacto ambiental menor.",
                    type_tech: "nuclear",
                    status: "0"
                },
                {
                    title: "Geradores nucleares",
                    price: "150",
                    type: "is-warning",
                    spec: "Diminui a demanda energética de combustíveis fósseis em 40% da população ao produzir um novo gerador de energia elétrica pessoal com elementos radioativos.",
                    type_tech: "nuclear",
                    status: "0"
                },
                {
                    title: "Comida irradiada",
                    price: "200",
                    type: "is-warning",
                    spec: "Produção de alimentos com o uso de irradiação na agricultura a fim de prevenir a proliferação de pragas, diminuindo o uso de agrotóxicos que liberam gases estufa.",
                    type_tech: "nuclear",
                    status: "0"
                },
                {
                    // BIOLÓGICO ---------------------
                    title: "Conhecimento molecular",
                    price: "50",
                    type: "is-success",
                    spec: "Estudos necessários para entender melhor o funcionamento da microbiologia e como promover mudanças ambientalmente favoráveis.",
                    type_tech: "biológico",
                    status: "0"
                },
                {
                    title: "Aumentar o reflorestamento",
                    price: "100",
                    type: "is-success",
                    spec: "Aumenta a plantação de árvores no planeta Terra, fazendo com que o sequestro de carbono (CO2) aumente em 25%.",
                    type_tech: "biológico",
                    status: "0"
                },
                {
                    title: "Biofiltro de algas",
                    price: "150",
                    type: "is-success",
                    spec: "Biofiltros formados por microalgas aumentam a absorção de CO2 da atmosfera em um nível 100 vezes mais alto que as árvores, podendo melhorar a qualidade de vida na Terra.",
                    type_tech: "biológico",
                    status: "0"
                },
                {
                    title: "Árvores geneticamente modificadas",
                    price: "200",
                    type: "is-success",
                    spec: "Elaboração, em laboratório, de árvores com DNA modificado para terem um rendimento fotossintetizante mais alto que o normal, aumentando a absorção de CO2 na atmosfera.",
                    type_tech: "biológico",
                    status: "0"
                },
                {
                    // TRANSPORTE --------------------
                    title: "Conhecimento de energias renováveis",
                    price: "50",
                    type: "is-error",
                    spec: "Estudos necessários para fazer meios de transporte serem menos agressivos ambientalmente.",
                    type_tech: "transporte",
                    status: "0"
                },
                {
                    title: "Carro movido a motor de hidrogênio",
                    price: "100",
                    type: "is-error",
                    spec: "Liberação do motor movido a hidrogênio a preços acessíveis para a população, reduzindo a produção de CO2.",
                    type_tech: "transporte",
                    status: "0"
                },
                {
                    title: "Uberdrone",
                    price: "150",
                    type: "is-error",
                    spec: "Criação do app Uberdrone que permite com que cidadãos realizem corridas econômicas e mais rápidas, diminuindo o uso de carros para a locomoção.",
                    type_tech: "transporte",
                    status: "0"
                },
                {
                    title: "Aerobus",
                    price: "200",
                    type: "is-error",
                    spec: "Ônibus voadores são desenvolvidos como alternativa para o transporte público. Como possui preço acessível, permitiu o o transporte mais rápido e eficiente entre os locais para a população, diminuindo em massa o uso de ônibus terrestres.",
                    type_tech: "transporte",
                    status: "0"
                },
                {
                    // ENERGÉTICO ---------------------
                    title: "Conhecimentos sobre o fluxo energético",
                    price: "50",
                    type: "is-primary",
                    spec: "Estudos necessários para promover o uso energético mais eficiente e menos poluente.",
                    type_tech: "energético",
                    status: "0"
                },
                {
                    title: "Usinas eólicas",
                    price: "100",
                    type: "is-primary",
                    spec: "Instalação de usinas eólicas para maior produção energética.",
                    type_tech: "energético",
                    status: "0"
                },
                {
                    title: "Giroplacas",
                    price: "150",
                    type: "is-primary",
                    spec: "Desenvolvimento de placas solares autônomas que giram sua direção para o sol, de forma a garantir que os raios solares ao longo do dia sejam absorvidos pelas placas solares.",
                    type_tech: "energético",
                    status: "0"
                },
                {
                    title: "Fazendas de armazenamento de energia",
                    price: "150",
                    type: "is-primary",
                    spec: "Armazenamento da produção energética excedente para evitar demanda desigual ao longo do dia.",
                    type_tech: "energético",
                    status: "0"
                },
                {
                    // INDUSTRIAL -----------------------
                    title: "Conhecimentos industriais",
                    price: "50",
                    type: "is-success",
                    spec: "Estudos necessários ara promover uma produção industrial ambientalmente melhor.",
                    type_tech: "industrial",
                    status: "0"
                },
                {
                    title: "Menos produção de lixo",
                    price: "100",
                    type: "is-success",
                    spec: "Produção industrial mais eficiente, fazendo com que a produção de lixo seja menor e ambientalmente favorável.",
                    type_tech: "industrial",
                    status: "0"
                },
                {
                    title: "Eficiência industrial",
                    price: "150",
                    type: "is-success",
                    spec: "Aumento da eficiência da produção industrial, fazendo com que menos energia seja gasta para produzir os produtos.",
                    type_tech: "industrial",
                    status: "0"
                },
                {
                    title: "Catalisadores inerentes",
                    price: "150",
                    type: "is-success",
                    spec: "Veículos utilitários terão catalisadores acoplados de forma obrigatória e gratuita para diminuir a emissão dos gases estufa.",
                    type_tech: "industrial",
                    status: "0"
                },
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
        const filteredtechs = techs.filter(tech => tech.title.toLowerCase().includes(searchbox.toLowerCase()) && tech.status !== "1" )

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
                            <div class="listcontent">{filteredtechs.map(tech => (
                                <Tech title={tech.title} status={tech.status} money={tech.price} type={tech.type || ""} changeHandler={e => {
                                    this.estado.currentTechSpec = tech.spec;
                                    this.estado.currentTech = tech.title;
                                }}/>
                            ))}</div>
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
                    <Tab class="science__tabs" title={<button class="nes-btn industry Science__btn">Indústria</button>}>
                        {(techsFilter['indústria'] || []).map((tech) => (
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