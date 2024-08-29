import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  useTheme,
  Rating,
} from '@mui/material';

const ProductCard = ({ image, title, description, price, rating }) => {
  const theme = useTheme(); // Access the theme

  return (
    <Card
      sx={{
        maxWidth: '600px',
        boxShadow: 'none',
        border: '1px solid #eee',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-1px)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardMedia
        component="img"
        width="290px"
        height="290px"
        image={image}
        alt={title}
      />
      <CardContent
        sx={{
          height: '100%',
          minHeight: '270px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '20px',
        }}
      >
        <Box>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{
              fontSize: '16px',
              fontWeight: theme.typography.fontWeightMedium,
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2, // Limit to 2 lines
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </Typography>
          <Rating
            name="product-rating"
            value={rating}
            precision={0.5}
            readOnly
            sx={{ fontSize: '1.25rem', color: '#fbc02d' }} // Adjust size and color if needed
          />
          <Typography
            variant="subtitle1"
            sx={{
              color: '#697586',
              fontSize: '14px',
              fontWeight: theme.typography.fontWeightRegular,
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2, // Limit to 2 lines
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            ${price.toFixed(2)}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            color: '#000', // Black text
            borderColor: '#000', // Black border
            transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition
            '&:hover': {
              backgroundColor: '#000', // Black background on hover
              color: '#fff', // White text on hover
              borderColor: '#000', // Black border on hover
            },
            '&:active': {
              backgroundColor: '#333', // Darker black on click
              transform: 'scale(0.98)', // Slightly shrink on click
            },
          }}
        >
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
