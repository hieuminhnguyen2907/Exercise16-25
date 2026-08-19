import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductList = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <div className="mt-4">
      <h3>Available Products</h3>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-3" key={product.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <p className="card-text"><strong>${product.price}</strong></p>
                <p className="card-text">
                  <small>Catalogs: {product.catalogs.join(', ')}</small>
                </p>
                <button 
                  className="btn btn-primary w-100"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;