// Import tools
import { Link, NavLink } from 'react-router-dom';

// Import image
import logoFlora from "../../assets/logoFloraSolerdevheader.png"

// Import styles
import './header.scss';


function Header() {
    return (
       <header className='header'>
         <Link to="/">
            <img className='header__logo' alt='Logo de Flora Soler' src={logoFlora} />
         </Link>
         <nav>
            <NavLink to="/" className='nav__item'>
               Projets
            </NavLink>

            <NavLink to="/apropos" className='nav__item'>
               A Propos
            </NavLink>

            <NavLink to="/vosimpressions" className='nav__item'>
               Vos impressions
            </NavLink>
         </nav>
      </header>
   )
  }

export default Header