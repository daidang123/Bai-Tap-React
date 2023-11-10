import React from 'react'
import Item from './Item'
import './carousel.css'
import Pagination from './Pagination'



function Carousel({items}) {
  return (
    <div className='carousel'>
    {/* <Navigation/> */}
        <div className='carousel-container'>
          {items.map((item, index)=>(
            <Item
            key={index}
            {...item}
            />
          ))}
           
        </div>
       
      <Pagination items={items}/>
    </div>
  )
}

export default Carousel