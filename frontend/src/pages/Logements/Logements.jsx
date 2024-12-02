//Import tools
import { useParams, Navigate } from 'react-router-dom'

//Import Data
import rentalList from '../../data/listeProjets.json'

//Import Styles
import './logements.scss';
import '../../components/Collapse/collapse.scss';

//Import Components
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/Rating'
import Tags from '../../components/Tags/Tags'

function Logements() {
  const { rentalId } = useParams()
  const rental = rentalList.find((i) => i.id === rentalId)

  // Redirection en cas d'erreur d'id
  if (!rental) {
    return <Navigate to="/error" />
  }

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
        <div className="host-info">
          <div className="host-info__identity">
            <p className="host-info__identity__name">{rental.host.name}</p>
            <img
              className="host-info__identity__pic"
              src={rental.host.picture}
              alt=""
            />
          </div>
          <Rating rating={rental.rating} />
        </div>
      </div>
      <section className='collapse-rental-container'>
        <Collapse
          className="collapse-rental"
          title="Contexte"
          content={rental.description}
        />
        <Collapse
          className="collapse-rental"
          title="Compétences acquises"
          content={rental.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
          state={true}
        />
        </section>
    </section>
  )
}

export default Logements