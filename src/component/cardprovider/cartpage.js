import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, getTotalQuantity, getTotalAmount } = useCart();

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)}>Increase Quantity</button>
          <button onClick={() => decreaseQuantity(item.id)}>Decrease Quantity</button>
        </div>
      ))}
      <p>Total Quantity: {getTotalQuantity()}</p>
      <p>Total Amount: ${getTotalAmount()}</p>
    </div>
  );
};

export default CartPage;
