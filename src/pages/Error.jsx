import { Link } from 'react-router-dom';

// styles
import '../SassStyles/error.scss';

const Error = () => {
    return (
        <div className='error'>
            <p className="error__code">404</p>
            <h1 className='error__title'>Oups! La page que vous demandez n'existe pas.</h1>
            <Link to="/">
            <p className='error__homeLink'>
            Retourner sur la page d’accueil
            </p>
            </Link>
        </div>
    )
}

export default Error