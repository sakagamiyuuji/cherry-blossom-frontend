import { useMediaQuery, useTheme } from '@mui/material';

const useResponsiveProductCount = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));

  // Determine items per page based on screen size
  const productsPerPage = isXs ? 4 : isSm ? 4 : isMd ? 4 : isLg ? 4 : 4;

  return { productsPerPage };
};

export default useResponsiveProductCount;
