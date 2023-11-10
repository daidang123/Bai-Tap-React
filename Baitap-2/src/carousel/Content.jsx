import React from 'react'

function Content({title,description}) {
  return (
    <div>
        <div className='carousel-item-title'>{title}</div>
        <p className='carousel-item-description'>{description}</p>
    </div>
  )
}

export default Content