import {Window, Tab, Tabs, Sidebar, IGenericAttrs, Component} from '../ui';
import {Leis} from './components/leis';
import {Propostas} from './components/propostas';
import {Apoiadores} from './components/apoiadores';
import politicsImg from './politics.jpg';


/**
 * Componente que mostra janela de política
 */
export class Politics extends Component<IGenericAttrs> {
    view () {
        return <Window>
            <Sidebar title="Política" points="5" back={true} src={politicsImg}/>
            <Tabs>
                <Tab title="Propostas"><Propostas/></Tab>
                <Tab title="Leis aprovadas"><Leis/></Tab>
                <Tab title="Apoiadores"><Apoiadores/></Tab>
            </Tabs>
        </Window>
    }
}