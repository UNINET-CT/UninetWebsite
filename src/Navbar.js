import * as React from 'react';
import { AppBar, Toolbar, Drawer, Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link
import logo from './logo.png';  // Make sure the path to your logo is correct

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/services">
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="absolute" sx={{ width: '100%', background: 'rgba(0,0,0,0.6)', boxShadow: 'none', padding: '15px 0' }}>
      <Toolbar>
        <Box sx={{ position: 'absolute', left: 20, marginLeft: '50px' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={logo} alt="Logo" style={{ height: '50px' }} />
          </Link>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Link to="/" style={{ textDecoration: 'none', margin: '0 20px' }}>
            <Typography variant="h5" color="text.primary" component="span">Home</Typography>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', margin: '0 20px' }}>
            <Typography variant="h5" color="text.primary" component="span">Who We Are</Typography>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', margin: '0 20px' }}>
            <Typography variant="h5" color="text.primary" component="span">Contact Our Team</Typography>
          </Link>
        </Box>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;

