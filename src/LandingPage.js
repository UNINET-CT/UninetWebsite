import * as React from 'react';
import { Box, Typography, Container } from '@mui/material';
import constellation from './constellation.gif';  // Ensure this path is correct

const LandingPage = () => {
  return (
    <>
      {/* Fullscreen Video Banner */}
      {/* <Box sx={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={banner} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box> */}

      {/* Text Content below the video */}
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center" p={4}>
          {/* Left side: Header */}
          <Box flex={1} mr={2}> {/* Margin right for spacing between the columns */}
            <Typography variant="h3" component="h1" gutterBottom>
              Smart Algorithms for Smarter Satellite Operations
            </Typography>
          </Box>
          
          {/* Right side: Paragraph */}
          <Box flex={1}>
            <Typography variant="body1" color="textSecondary">
              Uninet builds smart algorithms that enhance efficiency and reliability for the Internet of Space Things. Our advanced software solutions ensure low-latency communication and optimal resource management, driving innovation in satellite management. <a href='/'>Learn more.</a>
            </Typography>
          </Box>
        </Box>
      </Container>

  

      {/* Image Section */}
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <img src={constellation} alt="Descriptive Alt Text" style={{ width: '100%', maxWidth: '800px' }} />
      </Box>
    </>
  );
}


export default LandingPage;
