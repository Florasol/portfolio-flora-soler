import { Link, NavLink } from 'react-router-dom';

// assets
import logoKasa from "../assets/logoKasa.svg"

// styles
import '../Sass styles/header.scss';


const Header = () => {
    return (
       <header className='header'>
         <Link to="/">
            <img className='kasaLogo' alt='Logo de kasa' src={logoKasa} />
         </Link>
         <nav>
            <NavLink to="/" className='nav__item'>
               Accueil
            </NavLink>

            <NavLink to="/apropos" className='nav__item'>
               A Propos
            </NavLink>
         </nav>
      </header>
   )
  }

export default Header