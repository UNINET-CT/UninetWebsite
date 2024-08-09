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
    <>
      <style>
          {`
            .learn-more-link {
              text-decoration: none; /* Removes default underline */
              color: inherit; /* Inherits color from parent text */
              position: relative; /* Needed for pseudo-elements positioning */
              display: inline-block; /* Limits the effect to text width */
            }

            .learn-more-link::after {
              content: ''; /* Necessary for pseudo-elements */
              position: absolute;
              width: 0; /* Starts with no width */
              height: 2px; /* Thickness of the underline */
              bottom: -2px; /* Position below the text */
              left: 0;
              background-color: #967bb6; /* Underline color, can use theme color */
              transition: width 0.3s ease-in-out; /* Smooth transition for the animation */
            }

            .learn-more-link:hover::after {
              width: 100%; /* Full width on hover */
            }
          `}
      </style>
      <AppBar position="absolute" sx={{ width: '100%', background: 'rgba(0,0,0,0.6)', boxShadow: 'none', padding: '0px 0' }}>
        <Toolbar>
          <Box sx={{ position: 'absolute', left: 20, marginLeft: '50px' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: 200, // Adjust the width as needed
                height: 'auto', // Maintain aspect ratio
                // Optionally, add responsive scaling
                '@media (max-width: 600px)': {
                  width: 75, // Smaller width for mobile
                },
              }}
            />
            {/* <img src={logo} alt="Logo" style={{ width: '100%', height: 'auto' }} /> */}

            </Link>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Link to="/" style={{ textDecoration: 'none', margin: '0 30px' }}>
              <Typography variant="h6" color="text.primary" component="span"><p className="learn-more-link">Launchpad</p></Typography>
            </Link>
            <Link to="/" style={{ textDecoration: 'none', margin: '0 30px' }}>
              <Typography variant="h6" color="text.primary" component="span"><p className="learn-more-link">Explore Our Tech</p></Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', margin: '0 30px' }}>
              <Typography variant="h6" color="text.primary" component="span"><p className="learn-more-link">Who We Are</p></Typography>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', margin: '0 30px' }}>
              <Typography variant="h6" color="text.primary" component="span">  <p className="learn-more-link">Connect With Us</p>
              </Typography>
            </Link>
          </Box>
        </Toolbar>
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
          {drawer}
        </Drawer>
      </AppBar>
    </>
  );
};

export default Navbar;

