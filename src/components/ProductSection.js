import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import DecorativeLine from './DecorativeLine';
import ProductList from './ProductList';

const ProductSection = ({ title, subtitle, products }) => {
  return (
    <Container sx={{ py: 4 }}>
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
              fontSize: '24px',
              fontFamily: 'Poppins',
              fontWeight: 700,
              color: '#000000',
            }}
          >
            {title}
          </Typography>
          <DecorativeLine />
        </div>
        {subtitle && (
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: '#697586',
              fontSize: '18px',
              marginTop: '8px',
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>

      <Box sx={{ mt: 4 }}>
        {' '}
        {/* mt: 4 adds margin-top with a spacing of 4 */}
        <Grid container spacing={4}>
          <ProductList products={products} />
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductSection;
