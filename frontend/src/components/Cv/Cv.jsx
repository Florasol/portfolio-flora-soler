import React, { useState } from "react";
import "./cv.scss";

// Path to the image in the 'src/assets' folder
const imagePath = require('../../assets/CV_SOLER_2024_Accenture.jpg');

function CvPreview() {
  // State variable for managing zoomed image
  const [zoomedImage, setZoomedImage] = useState(null);

  // Function to open zoomed image
  const openZoomedImage = () => {
    setZoomedImage(imagePath);  // Set the zoomed image to the imported image path
  };

  // Function to close zoomed image
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  return (
    <>
      {/* Render the clickable image */}
      <div onClick={openZoomedImage}>
        <img
          src={imagePath}  // Use the correct path to display the image
          alt="CV Preview"
          width={300}  // Adjust the width as needed
          style={{ objectFit: "cover" }}  // Apply the objectFit style directly
        />
      </div>

      {/* Render the zoomed image */}
      {zoomedImage && (
        <div className="zoomed-image-container" onClick={closeZoomedImage}>
          <img
            src={zoomedImage}
            alt="zoomed-image"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
}

export default CvPreview;






