import React from 'react';
import { useCart } from './CartContext';
import { useProducts } from './hooks/useProducts';
import './ProductList.css';

const ProductList = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

// Separate ProductCard component for better organization
const ProductCard = ({ product, onAddToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} className="product-image" />
    <div className="product-info">
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <button 
        className="add-to-cart-btn"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductList;
