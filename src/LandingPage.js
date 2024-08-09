import React, { useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS
import constellation from './constellation.gif';  // Ensure this path is correct
import nasa_img from './nasa.jpg';  // Make sure the path to your logo is correct
import stars from './stars.jpg';  // Make sure the path to your logo is correct
import background_video from './background.mp4';



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

      <Container
      maxWidth={false}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={background_video} type="video/mp4" />
      </video>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={4}
        data-aos="fade-up"
        style={{
          width: '80%',
          textAlign: 'left',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)', // Transparent black background
            borderRadius: '8px',
            zIndex: -1,
          }}
        />
        <Box 
          flex={1} 
          mr={2} 
          display="flex" 
          justifyContent="center" 
          alignItems="center"
        >
          <Typography variant="h3" component="h1" gutterBottom style={{ color: 'white' }}>
            We Are Uninet
          </Typography>
        </Box>

        <Box flex={1}>
          <Typography variant="body1" style={{ color: 'white' }}>
            Founded in 2022, Uninet builds smart algorithms that enhance efficiency and reliability for the Internet of Space Things. Our advanced software solutions ensure low-latency communication and optimal resource management, driving innovation in satellite management.
            <p><a href='/about' className="learn-more-link" style={{ color: 'white' }}><b>More about the team.</b></a></p>
          </Typography>
        </Box>
      </Box>
    </Container>

    <Container
      maxWidth={false}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
        overflow: 'hidden',
        backgroundImage: `url(${stars})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={4}
        data-aos="fade-up"
        style={{
          width: '80%',
          textAlign: 'left',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), transparent, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))',
            borderRadius: '8px',
            zIndex: -1,
          }}
        />

        
          {/* Left side: Header */}
          <Box flex={1} mr={2}>
            <Typography variant="h3" component="h1" gutterBottom style={{ color: '#6A0D91' }}>
            We Design Smart Algorithms for Smarter Satellite Operations
            </Typography>
          </Box>
          
          {/* Right side: Paragraph */}
          <Box flex={1} data-aos="fade-left">
          <Typography variant="body1" style={{ color: 'white' }}>
              Our state-of-the-art satellite routing algorithms optimize over dynamic constellation topologies. We ensure fast, load-balanced routing decisions to get your data where it needs to go.
              <p><a href='/' className="learn-more-link"><b>Learn more about our tech.</b></a></p>
            </Typography>
          </Box>
          {/* <Box flex={1.5} data-aos="fade-up">
            <img src={constellation} alt="Descriptive Alt Text" style={{ width: '100%', maxWidth: '800px' }} />
          </Box> */}
        </Box>
      </Container>
    </>
  );
}

export default LandingPage;
