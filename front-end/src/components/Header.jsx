import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png';

const Header = () => {
    return (
        <header className="header">
            <Link
                className="header__link" 
                to="/" 
                target="_self" 
                rel="noopener noreferrer"
            >
                <img className="header__logo" src={logo} alt="Spotify Logo" />
                <h1 className="header__title">Spotify Fullstack</h1>
            </Link>
        </header>
    );
}

export default Header;
