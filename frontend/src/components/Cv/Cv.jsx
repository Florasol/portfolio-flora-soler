import React from "react";
import "./cv.scss";

function CvPreview() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/assets/CV_SOLER_2024_Accenture.pdf"; // Chemin vers le fichier
        link.download = "CV_SOLER_2024_Accenture.pdf"; // Nom du fichier téléchargé
        link.click();
      };
  return (
    <div className="cv-container">
      <img onClick={handleDownload}
        src="/assets/CV_SOLER_2024_Accenture.jpg"
        alt="CV Preview"
        className="cv-image"
      />
      <img src="/assets/downloadicon.png" className="download-button" 
      />
      <div className="text-icons">
        <div className="text">
      <img src="/assets/quotesicon.png" className="quotes" 
      />
      <p className="intro-text"><i>Ma passion des langues étrangères a guidé mes expériences professionnelles au fil des voyages et m’amène à présent aux langages informatiques. <br/><br/>Actuellement alternante chez <strong>Accenture</strong>, mon but est d’évoluer en tant que développeuse JAVA.</i>
        </p>
        </div>
      </div>
      
    </div>
    

    
  );
}

export default CvPreview;