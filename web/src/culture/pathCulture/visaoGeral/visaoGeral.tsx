import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Elem, VScroll } from '../../../../src/ui';
import SearchBar from '../../components/searchbar';

import { NegociosPapa, CreateReligion } from '../religion/religionIdeas';


export class ContainersVisãoGeral {
    view() {
        return (
            <div>
                <div class="nes-container is-rounded">
                    <div class="nes-field">
                        <label htmlFor="name_field">PROCURAR ITEM PARA COMPRAR:</label>
                        <SearchBar />
                    </div>
                </div>
                <br />
                <NegociosPapa />
                <br />
                <CreateReligion />
            </div>
        );
    }
};
