import * as React from 'react';
import { useEffect, useState } from 'react';
import { AppBar, Toolbar, Drawer, Box, List, ListItem, ListItemText, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link
import logo from './logo.png';  // Make sure the path to your logo is correct
import MenuIcon from '@mui/icons-material/Menu';  // Import the Menu icon

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  //IntersectionObserver
  const [Visible, setVisible] = useState(true);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  //IntersectionObserver Logic
  useEffect(() => {
    const target = document.querySelector('header');
    if (!target) {
      console.warn('No header found');
      return;
    }

    const navObs = new IntersectionObserver(
      ([entry]) => {
        console.log('Header Visibility:', entry.isIntersecting);
        
        setVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    navObs.observe(target);
    return () => navObs.disconnect();
  }, []);

  

  const drawer = (
    <Box 
      onClick={handleDrawerToggle} 
      sx={{ 
        textAlign: 'center', 
        width: 250, 
        backgroundColor: 'rgba(0, 0, 0, 0.9)', 
        height: '100%',
        color: 'white',
      }}
    >
      <List>
        <ListItem button component={Link} to="/" sx={{ color: 'white' }}>
          <ListItemText 
            primary="Home" 
            primaryTypographyProps={{ color: 'white' }} 
          />
        </ListItem>
        <ListItem button component={Link} to="/about" sx={{ color: 'white' }}>
          <ListItemText 
            primary="About Us" 
            primaryTypographyProps={{ color: 'white' }} 
          />
        </ListItem>
        <ListItem button component={Link} to="/tech" sx={{ color: 'white' }}>
          <ListItemText 
            primary="Technology" 
            primaryTypographyProps={{ color: 'white' }} 
          />
        </ListItem>
        <ListItem button component={Link} to="/contact" sx={{ color: 'white' }}>
          <ListItemText 
            primary="Contact Us" 
            primaryTypographyProps={{ color: 'white' }} 
          />
        </ListItem>
        {/* <ListItem button component={Link} to="/demo" sx={{ color: 'white' }}>
          <ListItemText 
            primary="Demonstration" 
            primaryTypographyProps={{ color: 'white' }} 
          />
        </ListItem> */}
      </List>
    </Box>

  );

  return (
    <>
      <style>
        {`
          .learn-more-link {
            text-decoration: none;
            color: #FFFFFF; /* White text for high contrast */
            position: relative;
            display: inline-block;
            transition: color 0.3s ease-in-out;
          }

          .learn-more-link:hover {
            color: #967bb6; /* Soft purple on hover */
          }

          .learn-more-link:visited, .learn-more-link:focus, .learn-more-link:active {
            color: #FFFFFF; /* Maintain white color when visited, focused, or active */
            outline: none; /* Remove any default outline */
          }

          .learn-more-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px; /* Position just below the text */
            left: 0;
            background-color: #967bb6; /* Underline color */
            transition: width 0.3s ease-in-out;
          }

          .learn-more-link:hover::after {
            width: 100%;
          }

          /* Drawer item link focus/active */
          .MuiListItem-root:visited, .MuiListItem-root:focus, .MuiListItem-root:active {
            background-color: transparent; /* Remove background change */
            color: white; /* Maintain white color */
          }

          .navbar-logo {
            width: 400px;
            height: auto;
            object-fit: contain;
            transition: all 0.3s ease-in-out;
          }

          @media (max-width: 600px) {
            .navbar-logo {
              width: 100px;
            }

            .learn-more-link {
              font-size: 0.9rem;
            }
          }
        `}
      </style>   

      <AppBar position="fixed" sx={{ width: '100%', backgroundColor: Visible ? 'transparent' : 'rgba(0, 0, 0, 0.9)', boxShadow: Visible ? 'none' : 3, backdropFilter: Visible ? 'none' : 'blur(6px)', padding: '0px 0' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo */}
          <Box
            component="nav"
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 100,
              px: 2,
            }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Box
                component="img"
                src={logo}
                alt="Logo"
                className="navbar-logo"
                sx={{ml: -7, marginTop: 1}}
              />
            </Link>
          </Box>

          {/* Centered Links for Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', margin: '0 100px', color: 'white' }}>
              <Typography variant="h6" component="span" className="learn-more-link" sx={{ fontSize: '1.1rem' }}>Home</Typography>
            </Link>
            <Link to="/tech" style={{ textDecoration: 'none', margin: '0 100px', color: 'white' }}>
              <Typography variant="h6" component="span" className="learn-more-link" sx={{ fontSize: '1.1rem' }}>Technology</Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', margin: '0 100px', color: 'white' }}>
              <Typography variant="h6" component="span" className="learn-more-link" sx={{ fontSize: '1.1rem' }}>About Us</Typography>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', margin: '0 100px', color: 'white' }}>
              <Typography variant="h6" component="span" className="learn-more-link" sx={{ fontSize: '1.1rem' }}>Contact Us</Typography>
            </Link>
            {/* <Link to="/demo" style={{ textDecoration: 'none', margin: '0 100px', color: 'orange' }}>
              <Typography variant="h6" component="span" className="learn-more-link" sx={{ fontSize: '1.1rem' }}>Demonstration</Typography>
            </Link> */}
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{
                backgroundColor: '#240f4dff', // Purple background
                borderRadius: '10%', // Rounded corners
                padding: '8px',
                '&:hover': {
                  backgroundColor: '#7a539b', // Darker purple on hover
                },
              }}
            >
              <MenuIcon sx={{ color: 'white' }} />  {/* White color for MenuIcon */}
            </IconButton>
          </Box>
        </Toolbar>

        {/* Drawer for Mobile */}
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
          {drawer}
        </Drawer>
      </AppBar>
    </>
  );
};

export default Navbar;
