import React, { useState, useMemo } from 'react';
import {
  Drawer,
  IconButton,
  Typography,
  Box,
  Button,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CartItem from './CartItem'; // Import the CartItem component

const CartDrawer = ({ open, onClose }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Soft Finish',
      price: 19.6,
      quantity: 1,
      currentStock: 5,
      imageUrl:
        'https://uploads.commoninja.com/searchengine/wordpress/woo-free-product-sample.png',
    },
    {
      id: 2,
      name: 'Soft Finish',
      price: 19.6,
      quantity: 2,
      currentStock: 3,
      imageUrl:
        'https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg',
    },
    {
      id: 3,
      name: 'Soft Finish',
      price: 19.6,
      quantity: 3,
      currentStock: 3,
      imageUrl:
        'https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg',
    },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  }, [items]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '20%', // 20% of viewport width
          height: '100vh', // Full viewport height
          display: 'flex',
          flexDirection: 'column',
          margin: 0,
          padding: 0,
        },
      }}
      ModalProps={{
        keepMounted: true, // Better performance on mobile
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
        >
          CART
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />

      {/* Cart Items */}
      <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
        {items.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            imageUrl={item.imageUrl}
            currentStock={item.currentStock}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemoveItem}
          />
        ))}
      </Box>

      {/* Footer Section */}
      <Box sx={{ p: 2 }}>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              color: '#7D7D7D',
            }}
          >
            SUBTOTAL
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              color: '#383838',
            }}
          >
            ${subtotal}
          </Typography>
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: '#F28DB2',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            textTransform: 'none',
            mt: 2,
            '&:hover': {
              bgcolor: '#F28DB2',
            },
          }}
        >
          Check Out
        </Button>
      </Box>
    </Drawer>
  );
};

// Hook to manage the open/close state of the CartDrawer
export const useCartDrawer = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const DrawerComponent = () => (
    <CartDrawer open={open} onClose={closeDrawer} />
  );

  return {
    openDrawer,
    closeDrawer,
    DrawerComponent,
  };
};

export default CartDrawer;
