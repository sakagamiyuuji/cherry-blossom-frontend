import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Box,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginDialog from './LoginDialog'; // Import the LoginDialog component

const Header = () => {
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);

  const handleOpenLoginDialog = () => {
    setLoginDialogOpen(true);
  };

  const handleCloseLoginDialog = () => {
    setLoginDialogOpen(false);
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="h6"
                component="span"
                sx={{ color: '#F28DB2', fontWeight: 'medium', mr: 0.5 }}
              >
                Cherry <span style={{ color: '#000' }}>Blossom</span>
              </Typography>
            </Box>
            <Box
              sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}
            >
              <Button
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#fff',
                  },
                }}
                onClick={() => {
                  console.log('Shop All clicked');
                }}
              >
                Shop All
              </Button>
              <Button
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#fff',
                  },
                }}
                onClick={() => {
                  console.log('Bestsellers clicked');
                }}
              >
                Bestsellers
              </Button>
              <Button
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#fff',
                  },
                }}
                onClick={() => {
                  console.log('Collection clicked');
                }}
              >
                Collection
              </Button>
              <Button
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#fff',
                  },
                }}
                onClick={() => {
                  console.log('About Us clicked');
                }}
              >
                About Us
              </Button>
              <Button
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#fff',
                  },
                }}
                onClick={() => {
                  console.log('Blog clicked');
                }}
              >
                Blog
              </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 4 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mx: 2,
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  '&:hover .MuiTypography-root': {
                    color: 'primary.main',
                  },
                }}
                onClick={() => {
                  console.log('Search clicked');
                }}
              >
                <IconButton color="inherit" sx={{ paddingBottom: '2px' }}>
                  <SearchIcon />
                </IconButton>
                <Typography variant="caption" sx={{ color: '#383838' }}>
                  Search
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mx: 2,
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  '&:hover .MuiTypography-root': {
                    color: 'primary.main',
                  },
                }}
                onClick={handleOpenLoginDialog} // Open the login dialog on click
              >
                <IconButton color="inherit" sx={{ paddingBottom: '2px' }}>
                  <AccountCircleIcon />
                </IconButton>
                <Typography variant="caption" sx={{ color: '#383838' }}>
                  Account
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mx: 2,
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  '&:hover .MuiTypography-root': {
                    color: 'primary.main',
                  },
                }}
                onClick={() => {
                  console.log('Cart clicked');
                }}
              >
                <IconButton color="inherit" sx={{ paddingBottom: '2px' }}>
                  <ShoppingCartIcon />
                </IconButton>
                <Typography variant="caption" sx={{ color: '#383838' }}>
                  Cart
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Render the Login Dialog Component */}
      <LoginDialog open={isLoginDialogOpen} onClose={handleCloseLoginDialog} />
    </>
  );
};

export default Header;
