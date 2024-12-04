//Import tools
import React from 'react'

//Import images
import greyStar from '../../assets/dot-solid.png'
import redStar from '../../assets/dot-solid-red.png'

//Import styles
import '../../pages/Logements/logements.scss';

function Rating({ rating }) {
  const totalStars = 5;
  const range = [...Array(totalStars).keys()]; 

  return (
    <div className="rating-container">
      {range.map((index) => (
        <img
          key={index}
          className="rating-container__stars"
          src={index < rating ? redStar : greyStar}
          alt="score du logement"
        />
      ))}
    </div>
  );
}

export default Rating;