import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  Container,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const FollowUsSection = ({ images, title, hashtag, buttonText }) => {
  return (
    <Box sx={{ textAlign: 'center', py: 4, bgcolor: '#fafafa' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontFamily: 'Poppins, sans-serif', color: '#F5A3B7', mt: 1 }}
        >
          {hashtag}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            fontSize: '18px',
            color: 'secondary',
            cursor: 'pointer',
          }}
        >
          See All
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box
                sx={{
                  position: 'relative',
                  '&:hover .buy-now-btn': { opacity: 1 },
                  '&:hover .see-in-btn': { opacity: 1 },
                }}
              >
                <Card sx={{ overflow: 'hidden', boxShadow: 'none' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={image.src}
                    alt={image.alt}
                    sx={{
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  />
                  <Button
                    className="see-in-btn"
                    variant="contained"
                    startIcon={<InstagramIcon />}
                    sx={{
                      position: 'absolute',
                      bottom: '56px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 'calc(100% - 80px)', // 100% width with 40px margins on both sides
                      bgcolor: 'rgba(56, 56, 56, 0.4)', // #383838 with 40% opacity
                      color: '#fff',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      mb: '14px',
                      '&:hover': {
                        bgcolor: 'rgba(56, 56, 56, 0.6)',
                      },
                    }}
                  >
                    See In
                  </Button>

                  <Button
                    className="buy-now-btn"
                    variant="contained"
                    sx={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 'calc(100% - 80px)', // 100% width with 40px margins on both sides
                      bgcolor: '#F5A3B7',
                      color: '#fff',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      '&:hover': {
                        bgcolor: '#d94a4a',
                      },
                    }}
                  >
                    Buy Now
                  </Button>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            bgcolor: '#F5A3B7',
            '&:hover': { bgcolor: '#d94a4a' },
            fontFamily: 'Poppins, sans-serif',
            px: 4,
          }}
        >
          {buttonText}
        </Button>
      </Container>
    </Box>
  );
};

export default FollowUsSection;
