import { Link } from 'react-router-dom';
import dishes from '../data/dishes';

const DishList = () => {
    return (
        <div className="container">
            <div className="row">
                {dishes.map((dish) => (
                    <div className="col-12 col-md-6 mb-4" key={dish.id}>
                        <Link to={`/dishes/${dish.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="card">
                                <img src={dish.image} className="card-img-top" alt={dish.name} />
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{dish.name}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DishList;