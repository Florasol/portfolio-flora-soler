//Import tools
import { useParams } from 'react-router-dom'

//Import Data
import rentalList from '../data/listeLogements.json'

//Import Components
import Slideshow from '../components/Slideshow/Slideshow'
import Collapse from '../components/Collapse/Collapse'
import Rating from '../components/Rating/Rating'
import Tags from '../components/Tags/Tags'

function Logements() {
  const { rentalId } = useParams()
  const rental = rentalList.find((i) => i.id === rentalId)

  return (
    <section className="rental-page">
      <Slideshow slides={rental.pictures} />
      <div className="rental-info-container">
        <div className="rental-info">
          <h1 className="rental-info__title">{rental.title}</h1>
          <p className="rental-info__location">{rental.location}</p>
          <div className="rental-info__tags">
            <Tags tag={rental.tags} />
          </div>
        </div>
        <div className="renter-info">
          <div className="renter-info__identity">
            <p className="renter-info__identity__name">{rental.host.name}</p>
            <img
              className="renter-info__identity__pic"
              src={rental.host.picture}
              alt=""
            />
          </div>
          <Rating rating={rental.rating} />
        </div>
      </div>
      <div className="rental-collapse-container">
        <Collapse
          className="collapse collapse--small"
          title="Description"
          text={rental.description}
        />
        <Collapse
          className="collapse collapse--small"
          title="Équipements"
          text={rental.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
          state={true}
        />
      </div>
    </section>
  )
}

export default Logements