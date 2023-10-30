import React, { useState } from 'react'
import Navigation from './Navigation'
import Item from './Item'
import Pagnation from './Pagnation'
import './carousel.css'

const Carousel = ({items}) => {
const [index, setIndex] = useState(0)
const handlePaginationonClick = (index)=>{
  setIndex(index);
}
const  handlePrevClick = ()=>{
  if (index === 0) {
    setIndex(items.length - 1);
  } else { 
    setIndex(index - 1)
  }
}
const handleNextClick = () =>{
  if (index === items.length-1) {
    setIndex(0)
  }else {
    setIndex(index + 1)
  }

}

  return (
    <div className='carousel'>
        <Navigation
        onPrevClick = {handlePrevClick}
        onNextClick = {handleNextClick}
        />
        <div className='carousel-container'>
           {items.map((item,i) => (
            <Item
            key={i} 
            active={i === index}
            {...item}/>

           ))}
           
    
        </div>
        <Pagnation 
        items={items} 
        currentIndex={index}
        onClick={handlePaginationonClick}
        />
    </div>
  )
}

export default Carousel