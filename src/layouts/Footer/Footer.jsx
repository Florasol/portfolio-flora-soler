//Import Images
import logoKasaWhite from '../../assets/logoKasa.svg'

// Import styles
import './footer.scss';

//Component
function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logoKasaWhite} alt="Kasa Logo White" />
      <p className="footer__rights">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer