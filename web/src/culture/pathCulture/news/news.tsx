import { AlJazeera, NewYork, Anonymous } from './newsIdeas';

export class ContainerNews {
    view() {
        return (
            <div>
                <AlJazeera />
                <br />
                <NewYork />
                <br/>
                <Anonymous />
            </div>
        );
    }
}