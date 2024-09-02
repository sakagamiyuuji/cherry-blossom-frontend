import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
  Divider,
  IconButton,
  InputAdornment,
  Button,
  Link,
} from '@mui/material';
import {
  Google as GoogleIcon,
  Close as CloseIcon,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';

const LoginDialog = ({ open, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          fontSize: '24px',
          color: '#383838',
          textAlign: 'center',
        }}
      >
        Log In
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            textAlign: 'center',
            mb: 3,
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            color: '#7D7D7D',
          }}
        >
          Please enter your e-mail and password:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
          }}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
          }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            bgcolor: '#F28DB2',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            '&:hover': {
              bgcolor: '#F28DB2',
            },
          }}
        >
          Log In
        </Button>
        <Divider sx={{ my: 2 }}>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              color: '#7D7D7D',
            }}
          >
            OR
          </Typography>
        </Divider>
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          fullWidth
          sx={{
            mb: 2,
            color: '#000',
            borderColor: '#e0e0e0',
            textTransform: 'none',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            '&:hover': {
              borderColor: '#e0e0e0',
            },
          }}
        >
          Continue With Google
        </Button>
        <Typography
          variant="body2"
          align="center"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            color: '#7D7D7D',
          }}
        >
          Forgot your password?{' '}
          <Link
            href="#"
            sx={{
              textTransform: 'none',
              color: '#000',
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Recover password
          </Link>
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            color: '#7D7D7D',
            mt: 2,
          }}
        >
          New to Cherry Blossom?{' '}
          <Link
            href="#"
            sx={{
              textTransform: 'none',
              color: '#000',
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Create an Account
          </Link>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
