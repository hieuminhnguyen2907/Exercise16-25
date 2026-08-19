import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mt-4">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item, index) => (
              <li className="list-group-item d-flex justify-content-between lh-sm" key={index}>
                <div>
                  <h6 className="my-0">{item.name} <small className="text-muted">(ID: {item.id})</small></h6>
                  <small className="text-muted">Catalogs: {item.catalogs.join(', ')}</small>
                </div>
                <span className="text-muted">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="card p-3">
            <h5 className="d-flex justify-content-between">
              <span>Total Cost</span>
              <strong>${total.toFixed(2)}</strong>
            </h5>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;