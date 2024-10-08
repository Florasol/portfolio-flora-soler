//Import tools
import React from 'react'

//Import images
import greyStar from '../../assets/star-solid.svg'
import redStar from '../../assets/star-solid-red.svg'

//Import styles
import '../../pages/Logements/logements.scss';

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5]
  return (
    <div className="rating-container">
      {range.map((rangeElem) =>
        rating >= rangeElem ? (
          <img
            className="rating-container__stars"
            src={redStar}
            alt="score du logement"
            key={rangeElem.toString()}
          />
        ) : (
          <img
            className="rating-container__stars"
            src={greyStar}
            alt="score du logement"
            key={rangeElem.toString()}
          />
        )
      )}
    </div>
  )
}

export default Rating