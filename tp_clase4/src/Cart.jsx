import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, getTotalItems, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        <p className="empty-cart">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Shopping Cart ({getTotalItems()} items)</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CartTotal total={getTotalPrice()} />
    </div>
  );
};

// Separate CartItem component for better performance and organization
const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
      </div>
      <div className="cart-item-controls">
        <button 
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="quantity-btn"
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span className="quantity">{item.quantity}</span>
        <button 
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="quantity-btn"
        >
          +
        </button>
        <button 
          onClick={() => removeFromCart(item.id)}
          className="remove-btn"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

// Separate CartTotal component
const CartTotal = ({ total }) => (
  <div className="cart-total">
    <h3>Total: ${total.toFixed(2)}</h3>
  </div>
);

export default Cart;
