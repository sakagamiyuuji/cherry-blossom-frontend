import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';

// Definisikan konfigurasi font dengan berbagai weight untuk Poppins
const poppins = {
  fontFamily: 'Poppins, sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
};

// Buat tema Material UI dengan konfigurasi font Poppins
const theme = createTheme({
  typography: {
    fontFamily: poppins.fontFamily,
    fontWeightLight: poppins.fontWeightLight,
    fontWeightRegular: poppins.fontWeightRegular,
    fontWeightMedium: poppins.fontWeightMedium,
    fontWeightSemiBold: poppins.fontWeightSemiBold,
    fontWeightBold: poppins.fontWeightBold,
    fontWeightExtraBold: poppins.fontWeightExtraBold,
    h1: {
      fontWeight: poppins.fontWeightBold,
    },
    h2: {
      fontWeight: poppins.fontWeightSemiBold,
    },
    h3: {
      fontWeight: poppins.fontWeightMedium,
    },
    subtitle1: {
      fontWeight: poppins.fontWeightRegular,
    },
    subtitle2: {
      fontWeight: poppins.fontWeightLight,
    },
    body1: {
      fontWeight: poppins.fontWeightRegular,
    },
    body2: {
      fontWeight: poppins.fontWeightLight,
    },
    button: {
      fontWeight: poppins.fontWeightMedium,
      textTransform: 'none', // Nonaktifkan huruf kapital pada tombol
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
