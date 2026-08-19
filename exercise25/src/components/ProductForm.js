import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAsync } from '../store/cartSlice';
import ProductList from './ProductList';

const ProductForm = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.cart.status);
  const [formData, setFormData] = useState({
    id: '', name: '', price: '', description: '', catalogs: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      price: parseFloat(formData.price),
      catalogs: formData.catalogs.split(',').map(c => c.trim())
    };
    dispatch(addProductAsync(newProduct)); // Gọi Redux Thunk
    setFormData({ id: '', name: '', price: '', description: '', catalogs: '' });
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4 mb-4">
        <h3>Add New Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" name="id" placeholder="ID" value={formData.id} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <input type="number" step="0.01" className="form-control" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" name="catalogs" placeholder="Catalogs (comma separated)" value={formData.catalogs} onChange={handleChange} required />
            </div>
          </div>
          <button type="submit" className="btn btn-success" disabled={status === 'loading'}>
            {status === 'loading' ? 'Adding...' : 'Add Product'}
          </button>
        </form>
      </div>
      <ProductList />
    </div>
  );
};

export default ProductForm;