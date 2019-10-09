import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Component } from '../ui';
import terminatorImg from '../../img/events/terminator.jpg';

let event = {
    img: terminatorImg,
}

/**
 * Componente para janela de evento.
 */
export class Event {
    view() {
        return <Window>
            <Sidebar src={event.img} title="Importante!"/>
            <Tabs>
                <Tab title="Tab 1">
                    Tab 1 content
                </Tab>
                <Tab title="Tab 2">
                    Tab 2 content
                </Tab>
                <Tab title="Tab 3">
                    Tab 3 content
                </Tab>
            </Tabs>
        </Window>
    }
}

let ev = (
    <div class="Event" style="display: block">
        <div class="Event-content">
            <div class="Event-image"></div>
            <div class="Event-description">
                <h2>Exterminador do Futuro</h2>
                <blockquote>Hasta la vista, baby!</blockquote>
                <p>Um guerreiro foi enviado do Futuro para salvar o planeta.</p>
            </div>
            <div class="Event-question"><h3>O que você deseja fazer?</h3></div>
            <div class="Event-choiceList">
                <div class="Event-choice">
                    <h4>Eliminar um Illuminati à sua escolha</h4>
                    <dl>
                        <dd>Chance de sucesso</dd><dd>70%</dd>
                        <dd>Fracasso</dd>
                        <dd>
                            <ul>
                                <li>Illuminati aumenta seu poder em 5%</li>
                                <li>Você perde 10% de poder</li>
                            </ul>
                        </dd>
                    </dl>
                    <button class="nes-btn is-primary">Não se faz um omelete sem quebrar uns ovos</button>
                </div>

                <div class="Event-choice">
                    <h4>Adotá-o como segurança privado</h4>
                    <dl><dd>Chance de sucesso</dd><dd>70%</dd></dl>
                    <ul>
                        <li>Aumenta o seu poder em 5%</li>
                    </ul>
                    <button class="nes-btn is-primary">Vamos jogar tranquilo e na defensiva</button>
                </div>
            </div>
        </div>
    </div>
);