import { Link } from 'react-router-dom';

// Import styles
import './error.scss';

function Error() {
    return (
        <div className='error'>
            <span className="error__code">404</span>
            <span className='error__title'>Oups! La page que vous demandez n'existe pas.</span>
            <Link to="/portfolio-flora-soler">
            <span className='error__homeLink'>
            Retourner sur la page d’accueil
            </span>
            </Link>
        </div>
    )
}

export default Error