//Import tools
import React from 'react'

//Import images
import greyStar from '../../assets/star-solid.svg'
import redStar from '../../assets/star-solid-red.svg'

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5]
  return (
    <div className="rating-container">
      {range.map((rangeElem) =>
        rating >= rangeElem ? (
          <img
            className="rating-container__stars"
            src={redStar}
            alt=""
            key={rangeElem.toString()}
          />
        ) : (
          <img
            className="rating-container__stars"
            src={greyStar}
            alt=""
            key={rangeElem.toString()}
          />
        )
      )}
    </div>
  )
}

export default Rating