// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F5A3B7', // Pink color used in buttons
    },
    secondary: {
      main: '#697586', // Darker color used in titles
    },
    text: {
      primary: '#000000', // Default black text
      secondary: '#555', // Slightly lighter color for subtitles
    },
    background: {
      default: '#ffffff', // White background by default
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h3: {
      fontWeight: 700,
      fontSize: '36px',
      color: '#333',
    },
    h4: {
      fontWeight: 700,
      fontSize: '24px',
      color: '#000000',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '18px',
      color: '#555',
    },
    body1: {
      fontWeight: 400,
      fontSize: '16px',
      color: '#697586',
    },
    button: {
      fontWeight: 500,
      textTransform: 'none', // Disable uppercase transform on buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px', // Rounded corners
          padding: '10px 10px',
          boxShadow: 'none', // No shadow
          '&:hover': {
            backgroundColor: '#e91e63', // Darker shade on hover
            boxShadow: 'none',
          },
        },
        outlined: {
          borderColor: '#000', // Black border for outlined buttons
          color: '#000', // Black text for outlined buttons
          '&:hover': {
            backgroundColor: '#000', // Black background on hover
            color: '#fff', // White text on hover
            borderColor: '#000', // Black border on hover
          },
          '&:active': {
            backgroundColor: '#333', // Darker black on click
            transform: 'scale(0.98)', // Slight shrink on click
          },
        },
      },
    },
  },
});

export default theme;
