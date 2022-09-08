import './styles/SearchBar.css';

const SearchBar = () => {
    return (
        <div>
            <input type="text" className ="search" name="search" id="search" placeholder='Search Stuff Here...'/>
        </div>
    );
}

export default SearchBar;