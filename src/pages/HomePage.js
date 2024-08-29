import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import listProduct from '../data/products';
import bannerImage from '../assets/images/banner.png';
import ProductList from '../components/ProductList';
import DecorativeLine from '../components/DecorativeLine';

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
        <Box textAlign="center" sx={{ py: 4 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
            }}
          >
            <DecorativeLine />
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontSize: '24px', // Set the text size to 24px
                fontFamily: 'Poppins', // Use Poppins font
                fontWeight: 700, // Use Medium weight (500)
                color: '#000000',
              }}
            >
              NEW ARRIVALS
            </Typography>
            <DecorativeLine />
          </div>
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: '#697586',
              fontSize: '18px',
              marginTop: '8px',
            }}
          >
            See All
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <ProductList products={listProduct} />
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
