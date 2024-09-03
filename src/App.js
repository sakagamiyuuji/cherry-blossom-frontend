import React, { useState } from 'react';
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme/theme';
import Header from './components/Header';
import LoginDialog from './components/LoginDialog';
import RegisterDialog from './components/RegisterDialog';
import AppRoutes from './routes';

const App = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const handleOpenLogin = () => {
    setLoginOpen(true);
    setRegisterOpen(false);
  };

  const handleOpenRegister = () => {
    setRegisterOpen(true);
    setLoginOpen(false);
  };

  const handleCloseDialogs = () => {
    setLoginOpen(false);
    setRegisterOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header
          onLoginClick={handleOpenLogin}
          onRegisterClick={handleOpenRegister}
        />
        <Box>
          <AppRoutes />
        </Box>
        <LoginDialog
          open={isLoginOpen}
          onClose={handleCloseDialogs}
          onSwitchToRegister={handleOpenRegister}
        />
        <RegisterDialog
          open={isRegisterOpen}
          onClose={handleCloseDialogs}
          onSwitchToLogin={handleOpenLogin}
        />
      </Router>
    </ThemeProvider>
  );
};

export default App;
