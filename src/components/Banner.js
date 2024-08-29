import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Banner = ({ image, title, subtitle, buttonText }) => {
  return (
    <Box
      sx={{
        height: '458px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'left',
        color: 'text.primary',
      }}
    >
      <Container sx={{ py: 8 }}>
        <Box>
          <Typography variant="h3" component="h1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" component="p" gutterBottom>
            {subtitle}
          </Typography>
          <Button variant="contained" color="primary">
            {buttonText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
