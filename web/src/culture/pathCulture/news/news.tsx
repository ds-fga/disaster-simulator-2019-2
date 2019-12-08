import { AlJazeera, NewYork } from './newsIdeas';

export class ContainerNews {
    view() {
        return (
            <div>
                <br />
                <AlJazeera />
                <br />
                <NewYork />
            </div>
        );
    }
}