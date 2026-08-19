import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import Cart from './components/Cart';
import { useSelector } from 'react-redux';

const App = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Redux Thunk Shop</Link>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">Products</Link>
            <Link className="nav-link" to="/cart">
              Cart <span className="badge bg-danger">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<ProductForm />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;