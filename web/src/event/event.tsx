import {Sidebar, Window} from '../ui';
import m = require("mithril");


/**
 * Componente para janela de evento.
 */
export class Event {
    event: any;

    constructor(vnode) {
        this.event = null;

        if (vnode.attrs.event !== undefined) {
            this.event = vnode.attrs.event;
        } else if (vnode.attrs.href !== undefined) {
            m.request({url: vnode.attrs.href}).then(x => {
                this.event = x
            })
        } else {
            m.request({url: "http://localhost:5000/event/random/"}).then(x => {
                alert(x);
                this.event = x
            })
        }
    }

    view() {
        let ev = this.event || defaultEvent;

        return <Window>
            <Sidebar src={ev.img} title="Importante!"/>

            <div class="Event">
                <div class="Event-content">
                    <div class="Event-description">
                        <h2>{ev.title}</h2>
                        <blockquote>{ev.quote}</blockquote>
                        <p>{ev.description}</p>
                    </div>
                    <div class="Event-question"><h3>{ev.question || "O que você deseja fazer?"}</h3></div>
                    <div class="Event-choiceList">{ev.options.map(viewOption)}</div>
                </div>
            </div>
        </Window>
    }
}

function viewOption(opt) {
    let failureList = (opt.failure || ["Sem efeitos"]).map(x => <li>{x}</li>),
        successList = (opt.success || []).map(x => <li>{x}</li>);
    failureList = failureList ? <ul>{failureList}</ul> : "";
    successList = successList ? <ul>{successList}</ul> : "";

    return <div class="Event-choice">
        <h4>{opt.description}</h4>
        <dl>
            <dd>Chance de sucesso</dd>
            <dd>{opt.successRate}%{successList}</dd>
            <dt>Fracasso</dt>
            <dd>{failureList}</dd>
        </dl>
        <button class="nes-btn is-primary">{opt.action}</button>
    </div>
}

let defaultEvent = {
    "id": "loading",
    "img": '/img/events/loading.jpg',
    "title": "Carregando...",
    "quote": null,
    "question": null,
    "description": "...",
    "options": []
};