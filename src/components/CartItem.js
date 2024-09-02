import React, { useState } from 'react';
import { Box, IconButton, Typography, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartItem = ({
  id,
  name,
  price,
  initialQuantity,
  onRemove,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(id, newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(id, newQuantity);
    }
  };

  const handleRemove = () => {
    onRemove(id);
    onQuantityChange(id, 0); // Pass 0 as the new quantity to indicate removal
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box sx={{ flex: '0 0 auto', marginRight: '15px' }}>
        <img
          src="/path-to-product-image.png" // Replace with actual image path
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
        <IconButton size="small" onClick={handleDecrease}>
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
        <IconButton size="small" onClick={handleIncrease}>
          <AddIcon />
        </IconButton>
      </Box>
      <IconButton size="small" onClick={handleRemove} sx={{ color: '#7D7D7D' }}>
        <DeleteOutlineIcon />
      </IconButton>
    </Box>
  );
};

export default CartItem;
