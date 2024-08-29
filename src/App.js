import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import HomePage from './pages/HomePage';
import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box>
        <HomePage />
      </Box>
    </ThemeProvider>
  );
};

export default App;
