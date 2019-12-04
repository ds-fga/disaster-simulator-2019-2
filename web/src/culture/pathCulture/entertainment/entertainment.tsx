import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Elem } from '../../../ui';
import SearchBar from '../../components/searchbar';

import { Kino, Tate, Worldcup } from './entertainmentIdeas';

export class ContainerEntertainment {
    view() {
        return (
            <div>
                <Kino />
                <br />
                <Tate />
                <br/>
                <Worldcup />
            </div >

        );
    }
}