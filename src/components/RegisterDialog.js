// src/components/RegisterDialog.js

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
  Close as CloseIcon,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';

const RegisterDialog = ({ open, onClose, onSwitchToLogin }) => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async e => {
    e.preventDefault();
    // Add your registration logic here
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
        Register
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
          Please fill in the fields below to create an account:
        </DialogContentText>
        <form onSubmit={handleRegister}>
          <TextField
            autoFocus
            margin="dense"
            id="fullname"
            label="Fullname"
            type="text"
            fullWidth
            variant="outlined"
            value={fullname}
            onChange={e => setFullname(e.target.value)}
            required
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
            }}
          />
          <TextField
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="outlined"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
            }}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
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
            value={password}
            onChange={e => setPassword(e.target.value)}
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
            required
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
            }}
          />
          <TextField
            margin="dense"
            id="confirmPassword"
            label="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            variant="outlined"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
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
            required
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
            }}
          />
          <Button
            type="submit"
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
            Register
          </Button>
        </form>
        <Divider sx={{ my: 2 }} />
        <Typography
          variant="body2"
          align="center"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            color: '#7D7D7D',
          }}
        >
          Do you already have an account?{' '}
          <Link
            onClick={onSwitchToLogin}
            sx={{
              textTransform: 'none',
              color: '#000',
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif',
              cursor: 'pointer',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Back to Log In
          </Link>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
