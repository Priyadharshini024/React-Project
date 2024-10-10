import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CartPage from './CartPage';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/cart">Cart ({totalCartItems})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;
