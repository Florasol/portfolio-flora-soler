
// Import styles
import './banner.scss';

function Banner({ title, picture, className }) {
    return (
      <div>
        <div className={className}>
          <img className="banner__img" src={picture} alt="Ordinateur développement code" />
          <h1 className="banner__title">{title}</h1>
        </div>
      </div>
    )
  }
  
  export default Banner