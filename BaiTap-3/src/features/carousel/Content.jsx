import React from 'react'

const Content = ({title , decription}) => {
  return (
    <div className='carousel-item-content'>
        <div className='carousel-item-title'>{title}</div>
        <div className='carousel-item-description'>{decription}</div>
    </div>
  )
}

export default Content