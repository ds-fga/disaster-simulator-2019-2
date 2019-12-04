import m from 'mithril';
import { Window } from '../ui';

/**
 * Componente para janela de evento.
*/
export class Event {
    bonk: any;
    startGame: any;

    view() {
        return <Window>
            <div class="Game">
                <h1>Whack-a-mole! <span class="score">0</span></h1>
                <button class="nes-btn is-primary" onclick={() => this.startGame() }>Start!</button>

                <div class="game">
                    <div class="hole hole1">
                        <div class="mole"></div>
                    </div>
                    <div class="hole hole2">
                        <div class="mole"></div>
                    </div>
                    <div class="hole hole3">
                        <div class="mole"></div>
                    </div>
                    <div class="hole hole4">
                        <div class="mole"></div>
                    </div>
                    <div class="hole hole5">
                        <div class="mole"></div>
                    </div>
                    <div class="hole hole6">
                        <div class="mole"></div>
                    </div>
                </div>
            </div>
        </Window>
    }

    oncreate() {
        const holes = document.querySelectorAll('.hole');
        const scoreBoard : HTMLElement = document.querySelector('.score');
        const moles = document.querySelectorAll('.mole');
        let lastHole;
        let timeUp = false;
        let score = 0;

        function randomTime(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }

        function randomHole(holes) {
            const idx = Math.floor(Math.random() * holes.length);
            const hole = holes[idx];
            if (hole === lastHole) {
                console.log('Ah nah thats the same one bud');
                return randomHole(holes);
            }
            lastHole = hole;
            return hole;
        }

        function peep() {
            const time = randomTime(200, 1000);
            const hole = randomHole(holes);
            hole.classList.add('up');
            setTimeout(() => {
                hole.classList.remove('up');
                if (!timeUp) peep();
            }, time);
        }

        function startGame() {
            console.log('Starting...');
            scoreBoard.textContent = "0";
            timeUp = false;
            score = 0;
            peep();
            setTimeout(() => timeUp = true, 10000)
        }

        function bonk(e) {
            if (!e.isTrusted) return; // cheater!
            score++;
            this.parentNode.classList.remove('up');
            scoreBoard.textContent = score.toString();
        }
        
        moles.forEach(mole => mole.addEventListener('click', bonk));
        this.startGame = startGame;
    }
}