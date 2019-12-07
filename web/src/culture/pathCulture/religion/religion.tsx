import { NegociosPapa, CreateReligion, Arautos } from "./religionIdeas";

export class ContainerReligiao {
    view() {
        return (
            <div>
                <NegociosPapa />
                <br />
                <CreateReligion />
                <br />
                <Arautos />
            </div>
        );
    }
}
