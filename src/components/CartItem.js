import React from 'react';
import { Box, Typography, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem = ({
  id,
  name,
  price,
  quantity,
  imageUrl,
  currentStock,
  onQuantityChange,
  onRemove,
}) => {
  const handleQuantityChange = e => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0 && newQuantity <= currentStock) {
      onQuantityChange(id, newQuantity);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      {/* Product Image */}
      <Box
        component="img"
        src={imageUrl}
        alt={name}
        sx={{ width: 90, height: 90, objectFit: 'contain', mr: 2 }}
      />

      {/* Product Details: Name, Price, Quantity */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            marginBottom: '4px',
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#7D7D7D',
            fontSize: '14px',
            lineHeight: '20px',
            marginBottom: '12px',
          }}
        >
          ${price.toFixed(2)}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center', // Align the quantity control and trash icon vertically centered
            width: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #E0E0E0',
              borderRadius: '8px',
              padding: '4px',
              width: '100px', // Set a width to accommodate all controls
            }}
          >
            <IconButton
              size="small"
              onClick={() => onQuantityChange(id, quantity - 1)}
              disabled={quantity <= 1}
              sx={{
                padding: 0,
                minWidth: 0,
                width: '24px',
                height: '24px',
              }}
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
            <TextField
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              inputProps={{
                min: 1,
                max: currentStock,
                style: {
                  textAlign: 'center',
                  padding: 0,
                  width: '36px', // Adjust the width of the input field
                  height: '24px',
                  border: 'none',
                },
              }}
              sx={{
                mx: 1,
                '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button':
                  {
                    '-webkit-appearance': 'none', // Remove increment arrows for Chrome/Safari
                    margin: 0, // Remove extra margin for Chrome/Safari
                  },
                '& input[type=number]': {
                  '-moz-appearance': 'textfield', // Remove increment arrows for Firefox
                  appearance: 'textfield', // Remove increment arrows for standard browsers
                },
                '& input': {
                  padding: 0,
                  textAlign: 'center',
                  border: 'none',
                },
                '& fieldset': {
                  display: 'none',
                },
              }}
            />
            <IconButton
              size="small"
              onClick={() => onQuantityChange(id, quantity + 1)}
              disabled={quantity >= currentStock}
              sx={{
                padding: 0,
                minWidth: 0,
                width: '24px',
                height: '24px',
              }}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>

          <IconButton
            size="small"
            onClick={() => onRemove(id)}
            sx={{
              padding: 0,
              minWidth: 0,
              ml: 1,
              width: '24px',
              height: '24px',
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
