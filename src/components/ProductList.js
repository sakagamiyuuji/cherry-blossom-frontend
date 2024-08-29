import React from 'react';
import { Grid, Container } from '@mui/material';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  // Log the products array to the console
  console.log(products);

  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={4}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
