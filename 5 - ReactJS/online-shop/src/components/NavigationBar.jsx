import SearchBar from './SearchBar';
import './styles/NavigationBar.css';

const NavigationBar = () => {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Online Shop</a>
            <ul>
                <li className='active'>
                    <a href="pricing">Pricing</a>
                </li>
                <li>
                    <a href="about">About</a>
                </li>
                <li className='searchBar'>
                    <SearchBar />
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar;