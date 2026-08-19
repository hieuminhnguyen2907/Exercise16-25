// App.js
import React from 'react';
import { store } from './store';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Exercise 24: Introduction to Redux</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;