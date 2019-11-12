import m from 'mithril';


class SearchBar {
    view(vnode){
        return<div class="science__search-bar">
            <input
                placeholder={vnode.attrs.placeholder}
                oninput={vnode.attrs.changeHandler}
                type="search"
                class="nes-input"/>
        </div>
    }
}

export default SearchBar;