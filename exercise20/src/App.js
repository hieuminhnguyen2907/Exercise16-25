import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { renderRoutes } from './routes';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {renderRoutes()}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
