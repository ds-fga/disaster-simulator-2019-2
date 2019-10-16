import m from 'mithril';
import {Window, Tab, Tabs, Btn, Sidebar} from '../ui';

var tags = [
    {
        nome: "Overview",
        conteudo: "tab1",
    },
    {
        nome: "Nuclear",
        conteudo: "tab2",
    },
    {
        nome: "Biológico",
        conteudo: "tab3",
    },
    {
        nome: "Energia",
        conteudo: "tab4",
    },
    {
        nome: "Transporte",
        conteudo: "tab5",
    }

];

/**
 * Componente para janela com árvore tecnológica e de desenvolvimento científico.
 */
export class Science {
    view () {
        return <Window>
            <Tabs>
                <Tab title={<button class="nes-btn Science__btn">Overview</button>}>
                </Tab>
                <Tab title={<button class="nes-btn is-warning Science__btn">Nuclear</button>}>
                </Tab>
                <Tab title={<button class="nes-btn is-success Science__btn">Biologico</button>}>
                </Tab>
                <Tab title={<button class="nes-btn is-primary Science__btn">Energético</button>}>
                </Tab>
                <Tab title={<button class="nes-btn Science__btn">Transporte</button>}>
                </Tab>

            </Tabs>
            
        </Window>
    }
}