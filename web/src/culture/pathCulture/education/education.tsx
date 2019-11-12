import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Elem } from '../../../ui';
import SearchBar from '../../components/searchbar';

import {} from './educationIdeas';

export class ContainerEducation {
    view() {
        return (
            <div>
            <div class="nes-container is-rounded">
                <div class="nes-field">
                    <label htmlFor="name_field">PROCURAR ITEM PARA COMPRAR:</label>
                    <SearchBar/>
                </div>
            </div>
        </div >
        );
    }
}