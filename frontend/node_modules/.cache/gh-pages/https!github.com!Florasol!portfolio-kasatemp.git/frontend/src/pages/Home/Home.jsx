import { Link } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import CvPreview from '../../components/Cv/Cv'

// Image Banner
import homeBanner from '../../assets/homebanner.jpg'

// Data
import listeLogements from '../../data/listeProjets.json'

// Import style
import './home.scss';


function Home() {
    return (
        <div>
            <Banner
            picture={homeBanner}
            title="Développeuse JAVA"
            className="banner"
            />
            <section className="links-container">
                <CvPreview />
            </section>
            <section className="projects">
                <div>
                    <p className='projects__title'>Mes projets</p>
                    </div>
            </section>
            <section className="rental-section">
                <div className="rental-section__cards-container">
                {listeLogements.map((rental) => (
                    <Link to={`/logements/${rental.id}`} key={rental.id}>
                    <Card picture={rental.cover} title={rental.title} />
                    </Link>
                ))}
                </div>
            </section>
        </div>
    )
}

export default Home