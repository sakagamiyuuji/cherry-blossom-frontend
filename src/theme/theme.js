// src/theme/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4081',
    },
    secondary: {
      main: '#3F51B5',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

export default theme;
