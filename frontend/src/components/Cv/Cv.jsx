import React from "react";
import "./cv.scss";

// Images
import linkedinicon from "../../assets/linkedinicon.png";
import gmailicon from "../../assets/gmailicon.png";
import githubicon from "../../assets/githubicon.png";
import quotesicon from "../../assets/quotesicon.png";
import CVPreview from "../../assets/CV_SOLER_2024_Accenture.jpg";

function CvPreview() {

      const handlePreview = () => {
        // Ouvre le PDF dans un nouvel onglet
        window.open("https://portfolio-flo-bucket.s3.eu-north-1.amazonaws.com/CV_SOLER_2024_Accenture.pdf", "_blank");
    };
  return (
    <div className="cv-preview">
            <div className="contact-icons">
                <a href="https://linkedin.com/in/florasoler" target="_blank" rel="noreferrer" >
              <img src={linkedinicon} className="icon-button" 
              />
                </a>
                <a href="mailto:floralu.soler@gmail.com" target="_blank">
              <img src={gmailicon} className="icon-button" 
              />
                </a>
                <a href="https://github.com/Florasol" target="_blank" rel="noreferrer" >
              <img src={githubicon} className="icon-button" 
              />
                </a>
            </div>
            <div className="cv-container">
                <img 
                    onClick={handlePreview} 
                    src={CVPreview} 
                    alt="CV Preview" 
                    className="cv-image"
                />
                <div className="intro">
                <img src={quotesicon} className="intro__quotes" 
                />
              <p className="intro__text">Bonjour et bienvenue sur mon portfolio ! Je suis Flora, j'ai 32 ans. J'ai passé ma vingtaine à explorer, aussi bien d'un point de vue géographique que professionnel: tourisme, vidéo, éducation... <br/><br/>Je me consacre maintenant à ma passion pour l'informatique, qui m'accompagne depuis mon enfance (Windows 98!). <br/><br/>Actuellement, développeuse JAVA chez <a href="https://www.accenture.com/fr-fr" target="_blank"><strong>Accenture</strong></a>, je m'efforce chaque jour de relever de nouveaux défis et de continuer à apprendre dans ce domaine en constante évolution.
                </p>
                </div>
            </div>
    
    </div>
    
  );
}

export default CvPreview;