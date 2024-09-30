import Banner from '../components/Banner'

// Image Banner
import aproposBanner from '../assets/aproposBanner.jpg'

const Apropos = () => {
    return (
        <div>
            <Banner
            picture={aproposBanner}
            title=""
            className="banner"
            />
            <h1>A propos de Kasa</h1>
        </div>
    )
}

export default Apropos