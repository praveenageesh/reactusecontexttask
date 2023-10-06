import React from 'react';
import { CartProvider } from './CartContext';
import CartPage from './cartpage'; // assuming you have a CartPage component

const App = () => {
  return (
    <CartProvider>
      <CartPage />
    </CartProvider>
  );
};

export default App;
