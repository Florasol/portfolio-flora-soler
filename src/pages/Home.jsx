import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Card from '../components/Card/Card'

// Image Banner
import homeBanner from '../assets/accueilBanner.jpg'

// Data
import listeLogements from '../data/listeLogements.json'

const Home = () => {
    return (
        <div>
            <Banner
            picture={homeBanner}
            title="Chez vous, partout et ailleurs"
            className="banner"
            />
            <section className="rental-section">
                <div className="rental-section__cards-container">
                {listeLogements.map((rental) => (
                    <Link to={`/logement/${rental.id}`} key={rental.id}>
                    <Card picture={rental.cover} title={rental.title} />
                    </Link>
                ))}
                </div>
            </section>
        </div>
    )
}

export default Home