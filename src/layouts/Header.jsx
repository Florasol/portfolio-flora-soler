import logoKasa from "../assets/logoKasa.svg"

// styles
import '../Sass styles/header.scss';

const Header = () => {
    return (
      <div className="header">
        <img src={logoKasa} alt="logo Kasa Desktop"/>
        <nav>
            <ul>
                <li>Accueil</li>
                <li>A propos</li>
            </ul>
        </nav>
      </div>
    );
  };

export default Header