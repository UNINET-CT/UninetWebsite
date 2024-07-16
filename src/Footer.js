import React from 'react';
import { Box, Typography, Link, Grid, List, ListItem, Divider } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{
      bgcolor: 'background.paper',
      padding: 3,
      borderTop: '1px solid #eee',
      mt: 4,
      color: 'grey.800'
    }}>
      <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#a7adba' }}>Quick Links</Typography>
          <List sx={{ padding: 0 }}>
            <ListItem sx={{ justifyContent: 'center', padding: 0 }}>
              <Link href="/about" sx={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link>
            </ListItem>
            <ListItem sx={{ justifyContent: 'center', padding: 0 }}>
              <Link href="/services" sx={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</Link>
            </ListItem>
          </List>
        </Grid>

       

        <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#a7adba' }}>Follow Us</Typography>
          <Box>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener" sx={{ marginX: 1 }}><Facebook sx={{ color: 'primary.main' }} /></Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener" sx={{ marginX: 1 }}><Twitter sx={{ color: 'primary.main' }} /></Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener" sx={{ marginX: 1 }}><LinkedIn sx={{ color: 'primary.main' }} /></Link>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2, bgcolor: 'primary.light' }} />

      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Uninet, LLC
      </Typography>
    </Box>
  );
};

export default Footer;

