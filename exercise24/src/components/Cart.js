import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ marginBottom: '10px' }}>
              <strong>ID:</strong> {item.id} | 
              <strong> Name:</strong> {item.name} | 
              <strong> Price:</strong> ${item.price} | 
              <strong> Catalogs:</strong> {item.catalogs.join(', ')} | 
              <strong> Quantity:</strong> {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;