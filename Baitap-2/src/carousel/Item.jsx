import React from 'react'
import Content from './Content'

function Item({image,title,description}) {
  return (
    <div className='carousel-item'
     style={{backgroundImage:`url(${image})`}}>
        <Content
        title={title}
        description={description}
        />
    </div>
  )
}

export default Item