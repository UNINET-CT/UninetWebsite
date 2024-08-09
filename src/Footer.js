import React from 'react';
import { Box, Typography, Link, Grid, List, ListItem, Divider } from '@mui/material';
import { Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className="scroll-section">

    <Box component="footer" sx={{
      bgcolor: 'black',
      padding: { xs: 3, sm: 6 },  // Increased padding for larger screens
      borderTop: '1px solid #eee',
      color: 'grey.800',
      mt: 4,
    }}>
      {/* Welcome Message Header */}
      <Typography variant="h5" align="center" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
        We’d love to connect with you!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Quick Links */}
        <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#a7adba' }}>Quick Links</Typography>
          <List sx={{ padding: 0 }}>
            <ListItem sx={{ justifyContent: { xs: 'center', sm: 'flex-start' }, padding: 0 }}>
              <Link href="/about" sx={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link>
            </ListItem>
            <ListItem sx={{ justifyContent: { xs: 'center', sm: 'flex-start' }, padding: 0 }}>
              <Link href="/services" sx={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</Link>
            </ListItem>
          </List>
        </Grid>

        {/* Follow Us */}
        <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#a7adba' }}>Follow Us</Typography>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener" sx={{ mx: 1 }}>
              <Twitter sx={{ color: 'primary.main' }} />
            </Link>
            <Link href="https://www.linkedin.com/company/uninet-llc" target="_blank" rel="noopener" sx={{ mx: 1 }}>
              <LinkedIn sx={{ color: 'primary.main' }} />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3, bgcolor: 'primary.light' }} />

      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Uninet, LLC
      </Typography>
    </Box>
    </div>
  );
};

export default Footer;
