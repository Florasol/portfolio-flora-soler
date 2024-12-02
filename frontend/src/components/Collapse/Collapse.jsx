//Import tools
import React, { useState } from 'react'

//Import image
import toggleArrow from '../../assets/chevron-solid.svg'

// Import styles
import './collapse.scss';

//Component
function Collapse({ title, content, className }) {
	const [open, setOpen] = useState(false)
	function toggle() {
	  setOpen(!open)
	}
	return (
	  <div className={className}>
		<button className="collapse__title-container" onClick={toggle}>
		  <h2 className="collapse__title-container__title">{title}</h2>
		  <img
			className={!open ? 'expand_arrow' : 'expand_arrow expand_arrow--opened'}
			src={toggleArrow}
			alt="Cliquez-ici pour dérouler le texte"
		  />
		</button>
		{open && <div className="collapse__text">{content}</div>}
	  </div>
	)
  }
  
  export default Collapse