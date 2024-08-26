import React from 'react';
import { Box, Typography, Link, Grid, Divider } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';

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
            <Link href="/" sx={{ color: 'inherit', textDecoration: 'none', mb: 1 }}>
              Home
            </Link>
            <Link href="/tech" sx={{ color: 'inherit', textDecoration: 'none', mb: 1 }}>
              Technology
            </Link>
            <Link href="/about" sx={{ color: 'inherit', textDecoration: 'none', mb: 1 }}>
              About Us
            </Link>
            <Link href="/contact" sx={{ color: 'inherit', textDecoration: 'none' }}>
              Contact Us
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={5} lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#a7adba', width: '100%' }}>Follow Us</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              
              <Link href="https://www.linkedin.com/company/uninet-llc" target="_blank" rel="noopener" sx={{ mx: 1 }}>
                <LinkedIn sx={{ color: 'primary.main' }} />
              </Link>
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

