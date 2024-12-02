//Import Images
import logoFlora from '../../assets/logoFloraSolerdev.png'

// Import styles
import './footer.scss';

//Component
function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logoFlora} alt="Logo Flora Soler" />
      <p className="footer__rights">© 2024 Flora Soler</p>
    </footer>
  )
}

export default Footer