import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Elem, VScroll } from '../../../../src/ui';
import SearchBar from '../../components/searchbar';

import { CreateReligion, NegociosPapa } from '../religion/religionIdeas';
import { Kino, Tate, Worldcup } from '../entertainment/entertainmentIdeas';


export class ContainersVisãoGeral {
    view() {
        return (
            <div>
                <br />
                <NegociosPapa/>
                <br />
                <CreateReligion />
                <br/>
                <Kino/>
                <br/>
                <Tate/>
                <br/>
                <Worldcup/>
            </div>
        );
    }
};
