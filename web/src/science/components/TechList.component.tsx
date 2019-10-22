import m from 'mithril';
import Tech from './Tech.component';
import SearchBar from './SearchBar.component';



class TechList {
    view(vnode){
        return <div class="Tech-List nes-container is-rounded">
            {vnode.children}
        </div>
    }
}

export default TechList;