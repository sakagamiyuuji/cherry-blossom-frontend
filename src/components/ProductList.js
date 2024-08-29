import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';

const ProductList = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {products.map(product => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={product.id}
          >
            <ProductCard
              image={product.image.default} // Make sure the image is correctly imported
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
