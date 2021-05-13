import React from 'react';
import data from './data';

function item(product){
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

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a href="/" className="brand">amazona</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div> 
        </header>
        <main>
            <div className="row center">
                {
                  data.products.map(item)
                } 
            </div>
        </main>
        <footer className="row center">
            All right reserved
        </footer>
    </div>
  );
}

export default App;
