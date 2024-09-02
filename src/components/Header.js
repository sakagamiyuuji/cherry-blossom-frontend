import React, { useState, useRef } from 'react';
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
import LoginDialog from './LoginDialog';
import { useCartDrawer } from './CartDrawer';
import MegaMenu from './MegaMenu'; // Ensure the path is correct

const Header = () => {
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenuItems, setCurrentMenuItems] = useState([]);
  const { openDrawer: openCartDrawer, DrawerComponent: CartDrawerComponent } =
    useCartDrawer();
  const menuRef = useRef(null); // Ref to track the MegaMenu component

  const handleOpenLoginDialog = () => {
    setLoginDialogOpen(true);
  };

  const handleCloseLoginDialog = () => {
    setLoginDialogOpen(false);
  };

  const handleMenuOpen = (event, menuItems) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenuItems(menuItems);
  };

  const handleMenuClose = (event) => {
    // Ensure that relatedTarget is a Node and check if it is inside the MegaMenu container
    if (
      !menuRef.current ||
      (event.relatedTarget instanceof Node && !menuRef.current.contains(event.relatedTarget))
    ) {
      setAnchorEl(null);
      setCurrentMenuItems([]);
    }
  };

  const shopAllMenuItems = [
    {
      title: 'Shop All',
      items: ['Bestsellers', 'Collection', 'Deals', 'Minis', 'New Arrivals'],
    },
    {
      title: 'Double-Cleanse',
      items: ['Cleansing Balms', 'Oil Cleansers', 'Water Cleansers'],
    },
    {
      title: 'Masks',
      items: ['Sheet Masks', 'Wash-off Masks', 'Sleeping Masks'],
    },
    { title: 'Sun Protection', items: ['Sunscreen', 'Makeup & SPF'] },
  ];

  // New Menu Items for Bestsellers
  const bestsellersMenuItems = [
    {
      title: 'Top Rated',
      items: ['Serums', 'Moisturizers', 'Cleansers', 'Toners'],
    },
    {
      title: 'Popular Categories',
      items: ['Skincare Sets', 'Anti-Aging', 'Brightening'],
    },
    {
      title: 'Trending Now',
      items: ['Face Masks', 'Eye Creams', 'SPF'],
    },
  ];

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo Section */}
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="h6"
                component="span"
                sx={{ color: '#F28DB2', fontWeight: 'medium', mr: 0.5 }}
              >
                Cherry <span style={{ color: '#000' }}>Blossom</span>
              </Typography>
            </Box>

            {/* Navigation Links */}
            <Box
              sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}
            >
              {/* Shop All Button */}
              <Button
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#fff',
                  },
                }}
                onMouseEnter={event => handleMenuOpen(event, shopAllMenuItems)}
                onMouseLeave={handleMenuClose}
              >
                Shop All
              </Button>

              {/* Bestsellers Button */}
              <Button
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#fff',
                  },
                }}
                onMouseEnter={event =>
                  handleMenuOpen(event, bestsellersMenuItems)
                }
                onMouseLeave={handleMenuClose}
              >
                Bestsellers
              </Button>

              {/* Other Navigation Buttons */}
              <Button
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#fff',
                  },
                }}
                onMouseLeave={handleMenuClose}
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
                onMouseLeave={handleMenuClose}
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
                onMouseLeave={handleMenuClose}
              >
                Blog
              </Button>
            </Box>

            {/* Action Icons */}
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 4 }}>
              {/* Search Icon */}
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

              {/* Account Icon */}
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
                onClick={handleOpenLoginDialog}
              >
                <IconButton color="inherit" sx={{ paddingBottom: '2px' }}>
                  <AccountCircleIcon />
                </IconButton>
                <Typography variant="caption" sx={{ color: '#383838' }}>
                  Account
                </Typography>
              </Box>

              {/* Cart Icon */}
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
                onClick={openCartDrawer}
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

      {/* Render the Cart Drawer Component */}
      <CartDrawerComponent />

      {/* Render the Mega Menu */}
      <MegaMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        menuItems={currentMenuItems}
        ref={menuRef} // Pass ref to MegaMenu
      />
    </>
  );
};

export default Header;
