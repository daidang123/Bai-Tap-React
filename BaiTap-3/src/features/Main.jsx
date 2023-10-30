import React from 'react'
import ProductCard from './ProductCard';

const Main= ({products}) => {
  const productCard = products.map((products)=>( 
  <div className="col mb-5">
  <ProductCard {...products}/>
  </div>
  ));
  return (
    <main className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {productCard}
  
      </div>
    </div>
    </main>
  )
}

export default Main ;