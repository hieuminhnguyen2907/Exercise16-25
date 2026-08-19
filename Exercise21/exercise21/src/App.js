import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import Dishes from './components/Dishes';
import DishDetail from './components/DishDetail';

const users = [
  { id: 1, firstName: "John", lastName: "Done", age: 25 },
  { id: 2, firstName: "Mary", lastName: "Thompson", age: 35 },
  { id: 3, firstName: "John", lastName: "Smith", age: 30 },
  { id: 4, firstName: "Emily", lastName: "Johnson", age: 25 },
  { id: 5, firstName: "William", lastName: "Davis", age: 34 }
];

const dishes = [
  {
    "id": 0,
    "name": "Uthappizza",
    "image": "https://ritalmprt.github.io/conFusion/img/uthappizza.png",
    "category": "mains",
    "label": "Hot",
    "price": "4.99",
    "featured": true,
    "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
  },
  {
    "id": 1,
    "name": "Zucchipakoda",
    "image": "https://nguyenhafood.vn/uploads/files/sot-trai-cay-choccolate%20(2).png",
    "category": "appetizer",
    "label": "",
    "price": "1.99",
    "featured": false,
    "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
  },
  {
    "id": 2,
    "name": "Vadonut",
    "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRASagIjPzFzHtcYF7WeC2OvDlY5naVNIRTx4D5ZzKCUQ6hPL2w",
    "category": "appetizer",
    "label": "New",
    "price": "1.99",
    "featured": false,
    "description": "A quintessential ConFusion experience, is it a vada or is it a donut?"
  },
  {
    "id": 3,
    "name": "ElaiCheese Cake",
    "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQF5iLfdhgY-VlkU948Ucz1oi01oFAqRCz87y0YqZpOJz54QCNH",
    "category": "dessert",
    "label": "",
    "price": "2.99",
    "featured": false,
    "description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
  }
];

function App() {
  return (
    <div className="container">
      <h1>FER202 - Practical Exam</h1>
      <Home />
      <hr />
      <Routes>
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/users/:userId" element={<UserDetail users={users} />} />
        <Route path="/dishes/*" element={<Dishes dishes={dishes} />} />
        <Route path="/dishes/:dishId" element={<DishDetail dishes={dishes} />} />
      </Routes>
    </div>
  );
}

export default App;