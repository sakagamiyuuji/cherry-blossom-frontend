import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/forgot-password', {
        email,
      });
      setMessage('Link reset password telah dikirim ke email Anda.');
      setError('');
    } catch (error) {
      setError('We cannot find your email.');
      setMessage('');
    }
  };

  return (
    <Container
      maxWidth="md"
      style={{ display: 'flex', alignItems: 'center', height: '100vh' }}
    >
      <Box style={{ flex: 1 }}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/968/639/original/password-has-been-reset-successfully-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
          alt="Forgot Password"
          style={{ width: '100%' }}
        />
      </Box>
      <Box style={{ flex: 1, padding: '20px', maxWidth: '400px' }}>
        <Typography variant="h5" gutterBottom>
          Forgot Password
        </Typography>
        <Typography variant="body1" paragraph>
          Enter your email and we'll send you a link to reset your password.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          {message && (
            <Typography color="success" variant="body2">
              {message}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
          >
            Submit
          </Button>
        </form>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            marginTop: '20px',
            display: 'block',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="primary">
            Back to Home
          </Typography>
        </Link>
      </Box>
    </Container>
  );
}

export default ForgotPassword;
