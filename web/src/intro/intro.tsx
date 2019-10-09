import m = require('mithril');
import {Window, Tab, Tabs, Btn, Sidebar} from '../ui';


/**
 * Introdução
 */
export class Intro {
    view () {
        return <Window>
            <h1>Bem vindos ao Disaster Simulator</h1>
            <p>O que você deseja fazer?</p>
            <p><Btn btn="primary">Começar!</Btn></p>
        </Window>
    }
}