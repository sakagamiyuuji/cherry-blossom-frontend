import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Link,
} from '@mui/material';
import {
  Facebook,
  Pinterest,
  Twitter,
  Instagram,
  Telegram,
} from '@mui/icons-material';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import './Footer.css'; // For additional custom styles

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#2c2c2c', color: '#fff', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              color={'#f5a3b7'}
              sx={{
                fontSize: '28px',
              }}
            >
              Cherry <span style={{ color: '#fff' }}>Blossom</span>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              gutterBottom
              sx={{
                color: '#fff',
                fontSize: '14px',
                mb: '10px',
              }}
            >
              Discover nature's beauty with our natural care products.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#F5A3B7',
                mb: '10px',
              }}
            >
              <Phone sx={{ marginRight: 1 }} />
              <Typography
                variant="body2"
                sx={{
                  color: '#fff',
                  fontSize: '16px',
                }}
              >
                +38 050 123 45 67
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#F5A3B7',
                mb: '10px',
              }}
            >
              <Email sx={{ marginRight: 1 }} />
              <Typography
                variant="body2"
                sx={{
                  color: '#fff',
                  fontSize: '16px',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                cherryblossom@gmail.com
              </Typography>
            </Box>
            <Box
              sx={{ display: 'flex', alignItems: 'center', color: '#F5A3B7' }}
            >
              <LocationOn sx={{ marginRight: 1 }} />
              <Typography
                variant="body2"
                sx={{
                  color: '#fff',
                  fontSize: '16px',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Jakarta, Indonesia
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
              HELP
            </Typography>
            <Link
              href="#"
              color="inherit"
              variant="body2"
              display="block"
              gutterBottom
              sx={{ color: '#fff' }}
            >
              Contact us
            </Link>
            <Link
              href="#"
              color="inherit"
              variant="body2"
              display="block"
              gutterBottom
              sx={{ color: '#fff' }}
            >
              FAQ
            </Link>
            <Link
              href="#"
              color="inherit"
              variant="body2"
              display="block"
              gutterBottom
              sx={{ color: '#fff' }}
            >
              Shipping & Returns
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
              MY ACCOUNT
            </Typography>
            <Link
              href="#"
              color="inherit"
              variant="body2"
              display="block"
              gutterBottom
              sx={{ color: '#fff' }}
            >
              Addresses
            </Link>
            <Link
              href="#"
              color="inherit"
              variant="body2"
              display="block"
              gutterBottom
              sx={{ color: '#fff' }}
            >
              Order Status
            </Link>
            <Link
              href="#"
              color="inherit"
              variant="body2"
              display="block"
              gutterBottom
              sx={{ color: '#fff' }}
            >
              Wishlist
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="p"
              gutterBottom
              sx={{ color: '#fff', fontSize: '16px' }}
            >
              CUSTOMER CARE
            </Typography>
            <Link
              href="#"
              color="inherit"
              variant="body2"
              display="block"
              gutterBottom
              sx={{ color: '#fff' }}
            >
              About us
            </Link>
            <Link
              href="#"
              color="inherit"
              variant="body2"
              display="block"
              gutterBottom
              sx={{ color: '#fff' }}
            >
              Blog
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
              SIGN UP FOR EMAILS
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ color: '#fff' }}
            >
              Stay informed, subscribe to our newsletter now!
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Email"
              size="small"
              fullWidth
              sx={{ mt: 1, mb: 2, bgcolor: '#fff', borderRadius: '4px' }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: '#d94a4a',
                color: '#fff',
                '&:hover': {
                  bgcolor: '#d94a4a',
                },
              }}
              fullWidth
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 4 }}
        >
          <Grid item>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit">
                <Facebook sx={{ color: '#fff' }} />
              </IconButton>
              <IconButton color="inherit">
                <Pinterest sx={{ color: '#fff' }} />
              </IconButton>
              <IconButton color="inherit">
                <Twitter sx={{ color: '#fff' }} />
              </IconButton>
              <IconButton color="inherit">
                <Instagram sx={{ color: '#fff' }} />
              </IconButton>
              <IconButton color="inherit">
                <Telegram sx={{ color: '#fff' }} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ color: '#fff' }}
            >
              © 2024 Cherry Blossom
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ color: '#fff' }}
            >
              <Link
                href="/privacy-policy"
                color="inherit"
                sx={{ color: '#fff' }}
              >
                Privacy Policy
              </Link>{' '}
              |{' '}
              <Link
                href="/terms-conditions"
                color="inherit"
                sx={{ color: '#fff' }}
              >
                Terms And Conditions
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
