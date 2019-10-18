import m from 'mithril';
import {Window, Tab, Tabs, Btn, Sidebar} from '../ui';

/**
 * Componente para janela de economia.
 */
export class Economy {
    view () {
        return <Window>
            <Sidebar title="Economia"/>
            <Tabs>
                <Tab title="Ações">
                    
                </Tab>
                <Tab title="Mercado">
                    
                </Tab>
                <Tab title="Inventário">
                    
                </Tab>
            </Tabs>
            
        </Window>
    }
}