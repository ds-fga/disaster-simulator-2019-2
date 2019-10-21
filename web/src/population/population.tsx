import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar } from '../ui';
import populationIcon from './icon.jpg'

/**
 * Componente que mostra janela com informações demográficas.
 */
export class Population {
    view() {
        return <Window>
            <Sidebar src={populationIcon} title="Populacao" />
            <Tabs>
                <Tab title={<span><i class="nes-icon coin"></i> riqueza</span>}>
                    <Riqueza name="foo bar"></Riqueza>
                </Tab>
                <Tab title="saude">
                    <Saude></Saude>
                </Tab>
                <Tab title="lazer">
                    <Lazer></Lazer>
                </Tab>
                <Tab title="seguranca">
                    <Seguranca></Seguranca>
                </Tab>
                <Tab title="cultura">
                    <Cultura></Cultura>
                </Tab>
            </Tabs>
        </Window>
    }
}


class Riqueza {
    view (vnode) {
        let name = vnode.attrs.name || "default";
        return <div>Riqueza {name}</div>
    }
}


class Saude {
    view () {
        return <div>Saude</div>
    }
}

class Lazer {
    view () {
        return <div>Lazer</div>
    }
}

class Seguranca {
    view () {
        return <div>Seguranca</div>
    }
}

class Cultura {
    view () {
        return <div>Cultura</div>
    }
}