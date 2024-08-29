import React from 'react';
import { Container, Grid } from '@mui/material';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import bannerImage from '../assets/images/banner.png';

const HomePage = () => {
  return (
    <div>
      <Banner
        image={bannerImage}
        title="Discover Your Inner Beauty"
        subtitle="Great gifts for yourself and loved ones"
        buttonText="Shop Now"
      />
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={4} md={3}>
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
