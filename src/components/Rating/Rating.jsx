//Import tools
import React from 'react'

//Import images
import greyStar from '../../assets/star-solid.svg'
import redStar from '../../assets/star-solid-red.svg'

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