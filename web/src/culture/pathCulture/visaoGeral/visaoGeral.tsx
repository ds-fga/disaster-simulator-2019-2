import { CreateReligion, NegociosPapa } from '../religion/religionIdeas';
import { Kino, Tate, Worldcup } from '../entertainment/entertainmentIdeas';
import { Unb, Mit } from '../education/educationIdeas';


export class ContainersVisãoGeral {
    view() {
        return (
            <div>
                <br />
                <NegociosPapa />
                <br />
                <CreateReligion />
                <br />
                <Kino />
                <br />
                <Tate />
                <br />
                <Worldcup />
                <br />
                <Unb />
                <br/>
                <Mit />
            </div>
        );
    }
};
