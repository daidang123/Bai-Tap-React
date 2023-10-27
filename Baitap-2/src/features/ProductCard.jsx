import React from 'react'

const ProductCard = ({ thumbnail, name, variants, isSale, reviews }) => {
    const isMultipleVariants = variants.length > 1;
    
  return (
    <div className="card h-100">
    {/* Sale badge*/}
    {isSale && (
           <div
           className="badge bg-dark text-white position-absolute"
           style={{ top: "0.5rem", right: "0.5rem" }}
         >
           Sale
         </div>
    )}
 
    {/* Product image*/}
    <img
      className="card-img-top"
      src={thumbnail}
      alt="..."
    />
    {/* Product details*/}
    <div className="card-body p-4">
      <div className="text-center">
        {/* Product name*/}
        <h5 className="fw-bolder">{name}</h5>
        {/* Product reviews*/}
        <div className="d-flex justify-content-center small text-warning mb-2">
          <div className="bi-star-fill" />
          <div className="bi-star-fill" />
          <div className="bi-star-fill" />
          <div className="bi-star-fill" />
          <div className="bi-star-fill" />
        </div>
          {/* Product price*/}
          {isSale && variants[0].salePrice ? (
            <>
              <span className="text-muted text-decoration-line-through">
                {variants[0].originPrice}
              </span>
              {variants[0].salePrice}
            </>
          ) : (
            <span>{variants[0].originPrice}</span>
          )}
      </div>
    </div>
    {/* Product actions*/}
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div className="text-center">
      {isMultipleVariants ? (
            <a className="btn btn-outline-dark mt-auto" href="#">
            View options
            </a>
                
          ) : (
            <a className="btn btn-outline-dark mt-auto" href="#">
              Add to cart
            </a>
          )}
      </div>
    </div>
    
  </div>
  )
}

export default ProductCard