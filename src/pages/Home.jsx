import { Link } from 'react-router-dom'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'

// Image Banner
import homeBanner from '../assets/homebanner.jpg'

// Data
import listeLogements from '../data/listeLogements.json'


function Home() {
    return (
        <div>
            <Banner
            picture={homeBanner}
            title="Développeuse JAVA"
            className="banner"
            />
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