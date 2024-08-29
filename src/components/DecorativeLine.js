// src/components/DecorativeLine.js
import React from 'react';
import { styled } from '@mui/system';

const Line = styled('span')({
  flex: '1',
  height: '1px',
  fontSize: '8px',
  backgroundColor: '#333',
  margin: '0 16px',
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    width: '12px',
    height: '12px',
    backgroundImage: 'url(/path/to/your/decorative-icon.png)', // Replace with the path to your decorative icon
    backgroundSize: 'cover',
    top: '-6px',
  },
  '&::before': {
    left: '-20px',
  },
  '&::after': {
    right: '-20px',
  },
});

const DecorativeLine = () => {
  return <Line />;
};

export default DecorativeLine;
