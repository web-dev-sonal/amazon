

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a href="index.html" className="brand">amazona</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div> 
        </header>
        <main>
            <div className="row center">
                <div className="card">
                    <a href="product.html">
                        {/* <!--image size : 680px * 830px  --> */}
                        <img src="./images/p1.jpg" alt="product" className="medium"/>
                    </a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>Nike Slim Shirt</h2>
                        </a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">
                            $299
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer className="row center">
            All right reserved
        </footer>
    </div>
  );
}

export default App;
