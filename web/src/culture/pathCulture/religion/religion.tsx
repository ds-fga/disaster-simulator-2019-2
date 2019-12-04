import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Elem } from '../../../ui';

import { NegociosPapa, CreateReligion } from "./religionIdeas";
import SearchBar from '../../components/searchbar';

export class ContainerReligiao {
    view() {
        return (
            <div>
                <NegociosPapa />
                <br />
                <CreateReligion />
            </div>
        );
    }
}
