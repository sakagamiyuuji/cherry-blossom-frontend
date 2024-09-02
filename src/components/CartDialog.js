import React, { useState, useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Button,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CartItem from './CartItem'; // Import the CartItem component

const CartDialog = ({ open, onClose }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Soft Finish',
      price: 19.6,
      quantity: 1,
      currentStock: 5, // Example stock
      imageUrl:
        'https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg', // Image URL
    },
    {
      id: 2,
      name: 'Soft Finish',
      price: 19.6,
      quantity: 2,
      currentStock: 3, // Example stock
      imageUrl:
        'https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg', // Image URL
    },
    {
      id: 3,
      name: 'Soft Finish',
      price: 19.6,
      quantity: 3,
      currentStock: 3, // Example stock
      imageUrl:
        'https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg', // Image URL
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
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
        CART
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {items.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            imageUrl={item.imageUrl}
            currentStock={item.currentStock} // Pass the current stock to CartItem
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemoveItem}
          />
        ))}
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
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
            '&:hover': {
              bgcolor: '#F28DB2',
            },
          }}
        >
          Check Out
        </Button>
      </DialogContent>
    </Dialog>
  );
};

// Hook to manage the open/close state of the CartDialog
export const useCartDialog = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  const DialogComponent = () => (
    <CartDialog open={open} onClose={closeDialog} />
  );

  return {
    openDialog,
    closeDialog,
    DialogComponent,
  };
};

export default CartDialog;
