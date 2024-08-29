import React, { useState, useEffect } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import ProductCard from './ProductCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useResponsiveProductCount from '../hooks/useResponsiveProductCount';

const ProductList = ({ products }) => {
  const { productsPerPage } = useResponsiveProductCount(); // Use the custom hook to determine items per page
  const [currentPage, setCurrentPage] = useState(0);
  const [productWidth, setProductWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    // Calculate the width for each product card when the component mounts or productsPerPage changes
    const calculatedProductWidth = 100 / productsPerPage;
    setProductWidth(calculatedProductWidth);

    // Calculate the total width of the container based on the number of products per page
    const totalWidth = calculatedProductWidth * productsPerPage;
    setContainerWidth(totalWidth);
  }, [productsPerPage]);

  // Calculate the total number of pages needed
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Determine the products to display on the current page
  const itemsInCurrentPage = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  const handleScroll = direction => {
    setCurrentPage(prevPage => {
      if (direction === 'left') {
        return Math.max(prevPage - 1, 0);
      } else if (direction === 'right') {
        return Math.min(prevPage + 1, totalPages - 1);
      }
      return prevPage;
    });
  };

  return (
    <Box sx={{ width: '100%', marginRight: '0px', paddingRight: '0px' }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          marginRight: '0px',
          paddingRight: '0px',
        }}
      >
        <IconButton
          onClick={() => handleScroll('left')}
          disabled={currentPage === 0}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Box
          sx={{
            marginRight: '0px',
            paddingRight: '0px',
            display: 'flex',
            width: '100%', // Set the container width based on the total width of items
            justifyContent: 'center',
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              marginRight: '0px',
              paddingRight: '0px',
              display: 'flex',
              flexWrap: 'nowrap',
              width: '100%',
            }}
          >
            {itemsInCurrentPage.map(product => (
              <Grid
                item
                key={product.id}
                sx={{
                  flex: `0 0 ${productWidth}%`, // Set the width for each product card
                  boxSizing: 'border-box', // Include padding and border in the element's total width and height
                }}
              >
                <ProductCard
                  image={product.image} // Use product.image directly
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  rating={product.rating}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <IconButton
          onClick={() => handleScroll('right')}
          disabled={currentPage === totalPages - 1}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              margin: '0 5px',
              borderRadius: '50%',
              backgroundColor: currentPage === index ? '#333' : '#ccc',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
