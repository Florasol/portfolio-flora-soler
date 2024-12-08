//Import Images
import logoFlora from '../../assets/logoFloraSolerdev.png'

// Import styles
import './footer.scss';

// Import icons
import linkedinicon from "../../assets/linkedinicon.png";
import gmailicon from "../../assets/gmailicon.png";
import githubicon from "../../assets/githubicon.png";

//Component
function Footer() {
  return (
    <footer className="footer">
      <div className="contact-icons-footer">
                <a href="https://linkedin.com/in/florasoler" target="_blank" rel="noreferrer" >
              <img src={linkedinicon} className="icon-footer" 
              />
                </a>
                <a href="mailto:floralu.soler@gmail.com" target="_blank">
              <img src={gmailicon} className="icon-footer" 
              />
                </a>
                <a href="https://github.com/Florasol" target="_blank" rel="noreferrer" >
              <img src={githubicon} className="icon-footer" 
              />
                </a>
            </div>
      <img className="footer__logo" src={logoFlora} alt="Logo Flora Soler" />
      <p className="footer__rights">© 2024 Flora Soler</p>
    </footer>
  )
}

export default Footer