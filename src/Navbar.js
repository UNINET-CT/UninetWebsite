import * as React from 'react';
import { useEffect, useState } from 'react';
import { AppBar, Toolbar, Drawer, Box, List, ListItem, ListItemText, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link
import logo from './logo.png';  // Make sure the path to your logo is correct
import MenuIcon from '@mui/icons-material/Menu';  // Import the Menu icon

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  //IntersectionObserver
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const NAV_HEIGHT = 200;

  useEffect(() => {
    const trigger = document.getElementById('nav-trigger');
    const scroller = document.querySelector('.scroll-container'); // your home uses this

    if (!trigger) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting); // black when sentinel is past the top line
      },
      {
        root: scroller || null,                 // IMPORTANT
        threshold: 0,
        rootMargin: `-${NAV_HEIGHT + 1}px 0px 0px 0px`, // push the top boundary
      }
    );

    io.observe(trigger);
    return () => io.disconnect();
  }, []);


  //IntersectionObserver Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPoint = 100;
      setIsScrolled(window.scrollY > scrollPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        <ListItem button component={Link} to="/tech" sx={{ color: 'white' }}>
          <ListItemText 
            primary="Technology" 
            primaryTypographyProps={{ color: 'white' }} 
          />
        </ListItem>
                <ListItem button component={Link} to="/demo" sx={{ color: 'white' }}>
          <ListItemText 
            primary="Demo" 
            primaryTypographyProps={{ color: 'white' }} 
          />
        </ListItem>
        <ListItem button component={Link} to="/about" sx={{ color: 'white' }}>
          <ListItemText 
            primary="About Us" 
            primaryTypographyProps={{ color: 'white' }} 
          />
        </ListItem>
        {/* <ListItem button component={Link} to="/contact" sx={{ color: 'white' }}>
          <ListItemText 
            primary="Contact Us" 
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

      <AppBar position="fixed" sx={{background: isScrolled ? '#000000ff' :'transparent', boxShadow: isScrolled ? 3 : 'none', transition: 'background-color 0.9s ease, box-shadow 0.9s ease' }}>
        <Toolbar sx={{ position: 'relative', px: 2, height: 155, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* LEFT: logo (natural width) */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
            
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{ width: 500, height: 'auto', display: 'block', marginTop: 2, marginLeft: -7}}  // adjust as needed
              />
            </Link>
          </Box>

          {/* CENTER: links (truly centered, unaffected by left/right widths) */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: { xs: 'none', lg: 'flex' }, 
              gap: { lg: 10, xl: 20 },                 
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            <Link to="/" className="learn-more-link"><Typography variant="h6">Home</Typography></Link>
            <Link to="/tech" className="learn-more-link"><Typography variant="h6">Technology</Typography></Link>
            <Link to="/about" className="learn-more-link"><Typography variant="h6">About Us</Typography></Link>
            <Link to="/demo" className="learn-more-link"><Typography variant="h6">Demo</Typography></Link>

            {/* <Link to="/contact" className="learn-more-link"><Typography variant="h6">Contact Us</Typography></Link> */}
            
          </Box>

          {/* RIGHT: mobile menu (optional)
          <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
            <IconButton onClick={handleDrawerToggle} sx={{ backgroundColor: '#240f4dff', p: 1, borderRadius: '10%' }}>
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar> */}
          <Box sx={{ display: { xs: 'block', lg: 'none', display: 'flex'} }}>
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
                  backgroundColor: '#3c1982ff', // Darker purple on hover
                },
              }}
            >
              <MenuIcon sx={{ color: 'white' }} />  {/* White color for MenuIcon */}
            </IconButton>
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
