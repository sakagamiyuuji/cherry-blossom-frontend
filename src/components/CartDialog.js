import React, { useState } from 'react';
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
import CartItem from './CartItem'; // Import the CartItem component we created earlier

const CartDialog = ({
  open,
  onClose,
  items,
  onQuantityChange,
  onRemoveItem,
}) => {
  const calculateSubtotal = () => {
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

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
            initialQuantity={item.quantity}
            onQuantityChange={onQuantityChange}
            onRemove={onRemoveItem}
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
            ${calculateSubtotal()}
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

  const DialogComponent = ({ items, onQuantityChange, onRemoveItem }) => (
    <CartDialog
      open={open}
      onClose={closeDialog}
      items={items}
      onQuantityChange={onQuantityChange}
      onRemoveItem={onRemoveItem}
    />
  );

  return {
    openDialog,
    closeDialog,
    DialogComponent,
  };
};

export default CartDialog;
