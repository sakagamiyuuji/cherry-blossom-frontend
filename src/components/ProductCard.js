import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  useTheme,
} from '@mui/material';

const ProductCard = ({ image, title, description, price }) => {
  const theme = useTheme(); // Access the theme

  return (
    <Card
      sx={{
        maxWidth: '100%',
        boxShadow: 'none',
        border: '1px solid #eee',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
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
          height: '180px',
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
            {'All Around Safe Block Sun Milk SPF50+/PA+++'}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            ${price.toFixed(2)}
          </Typography>
        </Box>
        <Button variant="contained" color="primary" fullWidth sx={{}}>
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
