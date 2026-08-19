import { useParams } from 'react-router-dom';
import dishes from '../data/dishes';

const DishDetail = () => {
    const { id } = useParams();
    const dish = dishes.find(d => d.id === parseInt(id));

    if (!dish) {
        return <h2>Dish not found</h2>;
    }

    return (
        <div>
            <h2>{dish.name}</h2>
            <img src={dish.image} alt={dish.name} width="200" />
            <p>Category: {dish.category}</p>
            <p>Price: ${dish.price}</p>
            <p>{dish.description}</p>
        </div>
    );
};

export default DishDetail;