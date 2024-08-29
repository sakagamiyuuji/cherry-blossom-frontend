import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        {' '}
        {/* Wrapping Toolbar in a Container */}
        <Toolbar disableGutters>
          {' '}
          {/* disableGutters to remove extra padding */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: '#F5A3B7',
            }}
          >
            Cherry Blossom
          </Typography>
          <Button color="inherit">Shop All</Button>
          <Button color="inherit">Bestsellers</Button>
          <Button color="inherit">Collection</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Blog</Button>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
