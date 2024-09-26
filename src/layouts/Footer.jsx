//Import Images
import logoDesktop from '../assets/footerDesktop.svg'

//Component
function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logoDesktop} alt="Kasa" />
      <p className="footer__disclaimer">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer