import React, { memo } from 'react';
import { Box, IconButton, Typography, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartItem = ({
  id,
  name,
  price,
  quantity,
  imageUrl,
  currentStock,
  onRemove,
  onQuantityChange,
}) => {
  const handleIncrease = () => {
    if (quantity < currentStock) {
      onQuantityChange(id, quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(id, quantity - 1);
    }
  };

  const handleRemove = () => {
    onRemove(id);
    onQuantityChange(id, 0); // Optionally indicate the item was removed
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box sx={{ flex: '0 0 auto', marginRight: '15px' }}>
        <img
          src={imageUrl} // Use the provided image URL
          alt={name}
          style={{ width: '50px', height: 'auto' }}
        />
      </Box>
      <Box sx={{ flex: '1 1 auto' }}>
        <Typography
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '14px',
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            color: '#7D7D7D',
          }}
        >
          ${price.toFixed(2)}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
        <IconButton
          size="small"
          onClick={handleDecrease}
          disabled={quantity <= 1}
        >
          <RemoveIcon />
        </IconButton>
        <TextField
          value={quantity}
          inputProps={{ min: 0, style: { textAlign: 'center' } }}
          size="small"
          sx={{
            width: '40px',
            '& .MuiInputBase-root': {
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
            },
          }}
          readOnly
        />
        <IconButton
          size="small"
          onClick={handleIncrease}
          disabled={quantity >= currentStock}
        >
          <AddIcon />
        </IconButton>
      </Box>
      <IconButton size="small" onClick={handleRemove} sx={{ color: '#7D7D7D' }}>
        <DeleteOutlineIcon />
      </IconButton>
    </Box>
  );
};

export default memo(CartItem);
