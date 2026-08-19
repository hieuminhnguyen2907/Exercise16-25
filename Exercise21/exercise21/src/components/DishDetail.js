import React from 'react';
import { useParams, Link } from 'react-router-dom';

function DishDetail({ dishes }) {
  const { dishId } = useParams();
  const dish = dishes.find(d => d.id === parseInt(dishId));

  if (!dish) {
    return <div>Dish not found.</div>;
  }

  return (
    <div>
      <h3>Dish Details</h3>
      <p><strong>Name:</strong> {dish.name}</p>
      <p><strong>Category:</strong> {dish.category}</p>
      <p><strong>Price:</strong> ${dish.price}</p>
      <p><strong>Description:</strong> {dish.description}</p>
      <Link to="/dishes">Back to Dishes</Link>
    </div>
  );
}

export default DishDetail;