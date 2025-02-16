import logo from '../assets/Images/logo.png';

const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Spotify Logo" />
            <a 
                className="header__link" 
                href="https://www.spotify.com/" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <h1 className="header__title">Spotify Fullstack</h1>
            </a>
        </header>
    );
}

export default Header;
