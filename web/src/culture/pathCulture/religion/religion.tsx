import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Elem } from '../../../ui';

import { NegociosPapa, CreateReligion } from "./religionIdeas";
import SearchBar from '../../components/searchbar';

export class ContainerReligiao {
    view() {
        return (
            <div>
                <div class="nes-container is-rounded">
                    <div class="nes-field">
                        <label htmlFor="name_field">PROCURAR ITEM PARA COMPRAR:</label>
                        <SearchBar/>
                    </div>
                </div>
                <br />
                <NegociosPapa />
                <br />
                <CreateReligion />
            </div>
        );
    }
}
