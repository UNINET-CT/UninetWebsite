import React, { useEffect } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS
import constellation from './constellation.gif';  // Ensure this path is correct

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);

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

      <Container maxWidth="xl">
        <Box display="flex" justifyContent="space-between" alignItems="center" p={4} data-aos="fade-up">
          {/* Left side: Header */}
          <Box flex={2} mr={2}>
            <Typography variant="h3" component="h1" gutterBottom>
              Smart Algorithms for Smarter Satellite Operations
            </Typography>
          </Box>
          
          {/* Right side: Paragraph */}
          <Box flex={2}>
            <Typography variant="body1" color="textSecondary">
              Founded in 2022, Uninet builds smart algorithms that enhance efficiency and reliability for the Internet of Space Things. Our advanced software solutions ensure low-latency communication and optimal resource management, driving innovation in satellite management.
              <p><a href='/about' className="learn-more-link"><b>More about the team.</b></a></p>
            </Typography>
          </Box>
          
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Box display="flex" justifyContent="space-between" alignItems="center" p={4} data-aos="fade-right">
          {/* Left side: Header */}
          <Box flex={1} mr={2}>
            <Typography variant="h3" component="h1" gutterBottom>
              Low-latency Dynamic Routing
            </Typography>
          </Box>
          
          {/* Right side: Paragraph */}
          <Box flex={2} data-aos="fade-left">
            <Typography variant="body1" color="textSecondary">
              Our state-of-the-art satellite routing algorithms optimize over dynamic constellation topologies. We ensure fast, load-balanced routing decisions to get your data where it needs to go.
              <p><a href='/' className="learn-more-link"><b>Learn more about our tech.</b></a></p>

            </Typography>
          </Box>
          <Box flex={1.5} data-aos="fade-up">
            <img src={constellation} alt="Descriptive Alt Text" style={{ width: '100%', maxWidth: '800px' }} />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default LandingPage;
