import React from 'react'
import AccordionItems from './AccordionItems'
import './Accordion.css'

function Accordion({items}) {
  console.log(items);
  const AccordionItem = items.map((item) => (
    <div key={item.title} className="accordion">
      <AccordionItems
        {...item}
      ></AccordionItems>
    </div>
  ));

  return (
     <>{AccordionItem}</>
  
  )
}

export default Accordion