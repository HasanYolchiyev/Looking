import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = {
    id: id,
    name: `Ürün ${id}`,
    description: `Bu Ürün ${id} için detaylı açıklamadır.`,
    price: `${id * 100} TL`,
    image: `https://via.placeholder.com/400?text=Ürün+${id}`
  };

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetail;
