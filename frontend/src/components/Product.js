import React from 'react';
import Rating from './Rating';

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
             <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
             <div className="price">
                 {product.price}
             </div>
         </div>
       </div>
    );
}

export default Product;