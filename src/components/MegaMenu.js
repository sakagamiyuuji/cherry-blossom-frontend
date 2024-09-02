import React, { forwardRef } from 'react';
import { Box, Grid, Typography, Popper } from '@mui/material';
import { styled, useTheme } from '@mui/system';

// Define reusable styles using the `styled` API
const StyledPopper = styled(Popper)(({ theme }) => ({
  zIndex: 1300, // Ensure it is on top
  width: theme.breakpoints.values.lg, // Set width to 'lg' breakpoint value
  maxWidth: '100%', // Ensure it doesn't overflow on smaller screens
  padding: '20px 40px', // Adjust padding to match the design
  backgroundColor: '#ffffff', // Ensure the background is white
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  transformOrigin: 'center top', // Ensures it scales from the center
}));

const HeaderText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#383838',
  marginBottom: '16px',
}));

const MenuItemText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '20px',
  color: '#383838',
  padding: '8px 0',
}));

const MegaMenu = forwardRef(({ anchorEl, open, onClose, menuItems }, ref) => {
  const theme = useTheme(); // Get theme to use breakpoints

  return (
    <StyledPopper
      open={open}
      anchorEl={anchorEl}
      placement="bottom"
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
        {
          name: 'flip',
          enabled: false, // Disable flip to prevent it from aligning right
        },
        {
          name: 'preventOverflow',
          options: {
            boundary: 'viewport', // Prevents overflow relative to viewport
            padding: 8, // Adds padding around boundaries
          },
        },
      ]}
      ref={ref} // Attach the forwarded ref to the Popper component
      onMouseLeave={onClose} // Attach onMouseLeave event to StyledPopper
    >
      <Box>
        <Grid container spacing={4}>
          {menuItems.map((section, index) => (
            <Grid item xs={3} key={index}>
              <HeaderText variant="h6">{section.title}</HeaderText>
              {section.items.map((item, subIndex) => (
                <MenuItemText key={subIndex}>{item}</MenuItemText>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>
    </StyledPopper>
  );
});

export default MegaMenu;
