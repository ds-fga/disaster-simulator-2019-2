import { CreateReligion, NegociosPapa, Arautos } from '../religion/religionIdeas';
import { Kino, Tate, Worldcup } from '../entertainment/entertainmentIdeas';
import { Unb, Mit, TokyoUni } from '../education/educationIdeas';
import { AlJazeera, NewYork, Anonymous } from '../news/newsIdeas';

export class ContainersVisãoGeral {
    view() {
        return (
            <div>
                <NegociosPapa />
                <br />
                <CreateReligion />
                <br />
                <Arautos />
                <br />
                <Kino />
                <br />
                <Tate />
                <br />
                <Worldcup />
                <br />
                <Unb />
                <br />
                <Mit />
                <br />
                <TokyoUni />
                <br />
                <AlJazeera />
                <br />
                <NewYork />
                <br/>
                <Anonymous />
            </div>
        );
    }
};
