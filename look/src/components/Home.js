import React from 'react';
import ProductCard from './ProductCard';
import './Home.css';

const Home = () => {
  const products = [
    { id: 1, name: 'Ürün 1', description: 'Bu bir ürün açıklamasıdır.', price: '100 TL' },
    { id: 2, name: 'Ürün 2', description: 'Bu bir ürün açıklamasıdır.', price: '200 TL' },
    { id: 1, name: 'Ürün 1', description: 'Bu bir ürün açıklamasıdır.', price: '100 TL' },
  ];

  return (
    <div className="home">
      <h2 className="section-title">Ürünler</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
