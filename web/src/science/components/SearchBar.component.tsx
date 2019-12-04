import m from 'mithril';
import {MithrilTsxComponent as Component} from 'mithril-tsx-component';

interface sbox {
    placeholder: string;
    changeHandler: Function;
}

class SearchBar extends Component<sbox>{
    constructor(props){
        super();
    }
    
    view(vnode){
        return<div class="science__search-bar">
            <input
                placeholder={vnode.attrs.placeholder}
                oninput={vnode.attrs.changeHandler}
                type="search"
                class="nes-input science__search-bar--component"/>
        </div>
    }
}

export default SearchBar;