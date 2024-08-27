import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { LinkedIn } from '@mui/icons-material';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Footer = () => {
  return (
    <div className="scroll-section">
      <Box component="footer" sx={{
        bgcolor: 'black',
        padding: 4, 
        borderTop: '1px solid #333', 
        color: '#FFF', 
        mt: 4,
      }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
          We’d love to connect with you!
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={5} lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#a7adba', width: '100%' }}>Quick Links</Typography>
            <RouterLink to="/" style={{ color: 'inherit', textDecoration: 'none', marginBottom: '1rem' }} onClick={scrollToTop}>
              Home
            </RouterLink>
            <RouterLink to="/tech" style={{ color: 'inherit', textDecoration: 'none', marginBottom: '1rem' }} onClick={scrollToTop}>
              Technology
            </RouterLink>
            <RouterLink to="/about" style={{ color: 'inherit', textDecoration: 'none', marginBottom: '1rem' }} onClick={scrollToTop}>
              About Us
            </RouterLink>
            <RouterLink to="/contact" style={{ color: 'inherit', textDecoration: 'none' }} onClick={scrollToTop}>
              Contact Us
            </RouterLink>
          </Grid>

          <Grid item xs={12} sm={6} md={5} lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#a7adba', width: '100%' }}>Follow Us</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {/* Note: External links do not need to scroll to top */}
              <RouterLink to="https://www.linkedin.com/company/uninet-llc" target="_blank" rel="noopener" style={{ margin: '0 8px' }}>
                <LinkedIn sx={{ color: 'primary.main' }} />
              </RouterLink>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'primary.light' }} />

        <Typography variant="body2" color="white" align="center" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} Uninet, LLC
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
