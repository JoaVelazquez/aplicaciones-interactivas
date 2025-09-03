
import React from 'react';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css'

function App() {
  return (
    <CartProvider>
      <div className="app">
        <header className="app-header">
          <h1>University Shopping Cart Project</h1>
        </header>
        <main className="app-main">
          <div className="app-content">
            <ProductList />
            <Cart />
          </div>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
