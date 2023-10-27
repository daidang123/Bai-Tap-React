import React from 'react'
import ProductCard from './ProductCard';

const Main= ({products}) => {
  return (
    <main className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div className="col mb-5">
        <ProductCard {...products[0]}/>
        </div>
        <div className="col mb-5">
        <ProductCard {...products[1]}/>
        </div>
        <div className="col mb-5">
        <ProductCard {...products[2]}/>
        </div>
        <div className="col mb-5">
         <ProductCard {...products[3]}/>
        </div>
        <div className="col mb-5">
         <ProductCard {...products[4]}/>
        </div>
        <div className="col mb-5">
         <ProductCard {...products[5]}/>
        </div>
        <div className="col mb-5">
         <ProductCard {...products[6]}/>
        </div>
        <div className="col mb-5">
         <ProductCard {...products[7]}/>
        </div>

      </div>
    </div>
    </main>
  )
}

export default Main ;