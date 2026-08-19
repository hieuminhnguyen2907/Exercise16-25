import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateCart, removeFromCart } from '../cartSlice';

const productsData = [
  {
    id: '123456',
    name: 'Example Product',
    price: 9.99,
    description: 'This is an example product.',
    catalogs: ['catalog1', 'catalog2'],
  },
  {
    id: '789012',
    name: 'Another Product',
    price: 19.99,
    description: 'This is another product.',
    catalogs: ['catalog2', 'catalog3'],
  }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Product List</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {productsData.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Catalogs: {product.catalogs.join(', ')}</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
              {/* Task 2 */}
              <button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </button>
              
              {/* Task 3 */}
              <button onClick={() => dispatch(updateCart({ id: product.id, quantityToAdd: 1 }))}>
                Update to Cart (+1)
              </button>
              
              {/* Task 4 */}
              <button onClick={() => dispatch(removeFromCart({ id: product.id }))}>
                Delete to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;