//Import tools
import React from 'react'

//Import styles
import '../../pages/Logements/logements.scss';

//Component
function Tags({ tag }) {
  return (
    <div>
      <ul className="tags">
        {tag.map((tag, index) => (
          <li className="tags__text" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags