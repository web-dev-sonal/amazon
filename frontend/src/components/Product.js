import React from 'react';

function Product(props) {
    const {product} = props;
    return (
         // always add key in every div in react
        <div key={product._id} className="card">
         {/* note how we applied js string interpolation */}
         <a href={`/product/${product._id}`}>
             {/* <!--image size : 680px * 830px  --> */}
             <img src={product.image} alt="product" className="medium"/>
         </a>
         <div className="card-body">
             <a href={`/product/${product._id}`}>
               {/* using js variable */}
                 <h2>{product.name}</h2>
             </a>
             <div className="rating">
                 <span><i className="fa fa-star"></i></span>
                 <span><i className="fa fa-star"></i></span>
                 <span><i className="fa fa-star"></i></span>
                 <span><i className="fa fa-star"></i></span>
                 <span><i className="fa fa-star"></i></span>
             </div>
             <div className="price">
                 {product.price}
             </div>
         </div>
       </div>
    );
}

export default Product;