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
        justifyContent: 'flex-start', // Align items to the left
        textAlign: 'left', // Align text to the left
        color: '#000', // Change to black to match the design
      }}
    >
      <Container sx={{ py: 8 }}>
        <Box>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              marginBottom: '10px',
              fontFamily: 'Poppins',
              fontWeight: 700,
              color: '#333', // Darker color to match the title design
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            gutterBottom
            sx={{
              marginBottom: '30px',
              fontFamily: 'Poppins',
              fontWeight: 400,
              color: '#555', // Slightly lighter color for the subtitle
              fontSize: '18px',
            }}
          >
            {subtitle}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#F5A3B7', // Pink color to match the button in the design
              color: '#fff',
              fontFamily: 'Poppins',
              fontWeight: 500,
              padding: '10px 80px',
              borderRadius: '4px', // Rounded button like in the design
              boxShadow: 'none', // No shadow to match the flat design of the button
              '&:hover': {
                backgroundColor: '#e91e63', // Darker shade on hover
                boxShadow: 'none',
              },
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
