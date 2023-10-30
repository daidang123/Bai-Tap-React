import React from 'react'

const Navigation = ({onPrevClick, onNextClick}) => {
  return (
    <div className='carousel-navigation'>
      <div className='carousel-navigation-prew' onClick={onPrevClick} ><i class="bi bi-chevron-left"></i></div>
      <div className='carousel-navigation-next'onClick={onNextClick} ><i class="bi bi-chevron-right"></i></div>
    </div>
  )
}

export default Navigation