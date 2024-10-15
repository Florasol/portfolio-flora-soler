// Import tools
import { Link, NavLink } from 'react-router-dom';

// Import image
import logoKasa from "../../assets/logoKasa.svg"

// Import styles
import './header.scss';


function Header() {
    return (
       <header className='header'>
         <Link to="/">
            <img className='logoKasa' alt='Logo de kasa' src={logoKasa} />
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