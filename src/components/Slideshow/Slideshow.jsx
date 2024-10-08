//Import tools
import React from 'react'
import { useState } from 'react'

//Import images
import chevronRight from '../../assets/chevron-right-solid.svg'

//Import style
import './slideshow.scss';

//Component
function Slideshow({ slides }) {
  const pics = slides
  const length = slides.length

  const [currentSlide, setCurrentSlide] = useState(0)

  const previousSlide = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : length - 1
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    const index = currentSlide < length - 1 ? currentSlide + 1 : 0
    setCurrentSlide(index)
  }

  return (
    <div className="carrousel">
      <div
        className="carrousel__slider"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {pics.map((slide, index) => (
          <img
            className="carrousel__slider__pictures"
            key={index}
            src={slide}
            alt=""
          ></img>
        ))}
      </div>
      {length > 1 && (
        <div className="carrousel__commands">
          <button
            className="carrousel__commands__buttons"
            onClick={previousSlide}
          >
            <img
              className="carrousel__commands__arrow backward"
              src={chevronRight}
              alt="Précédent"
            ></img>
          </button>
          <p className="carrousel__commands__photocount">
            {currentSlide + 1}/{pics.length}
          </p>
          <button className="carrousel__commands__buttons" onClick={nextSlide}>
            <img className="carrousel__commands__arrow" src={chevronRight} alt="Suivant"></img>
          </button>
        </div>
      )}
    </div>
  )
}

export default Slideshow