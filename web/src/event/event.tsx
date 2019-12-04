import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Component } from '../ui';
import terminatorImg from '../../img/events/terminator.jpg';
import { Culture, CultureTabs } from '../culture/culture';

let event = {
    img: terminatorImg,
}

/**
 * Componente para janela de evento.
 */
export class Event {
    view() {
        return <Window>
           
  <h1>Whack-a-mole! <span class="score">0</span></h1>
  <button onClick="startGame()">Start!</button>

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

        </Window>
    }
    oncreate(){
        const holes = document.querySelectorAll('.hole');
        const scoreBoard = document.querySelector('.score');
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
          scoreBoard.textContent = 0;
          timeUp = false;
          score = 0;
          peep();
          setTimeout(() => timeUp = true, 10000)
        }
      
        function bonk(e) {
          if(!e.isTrusted) return; // cheater!
          score++;
          this.parentNode.classList.remove('up');
          scoreBoard.textContent = score;
        }
      
        moles.forEach(mole => mole.addEventListener('click', bonk));
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

