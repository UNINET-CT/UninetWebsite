import React from 'react';
import { Box, Typography, Container, useMediaQuery, Divider } from '@mui/material';
import Navbar from './Navbar';

function TechPage() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <div style={{ marginBottom: '150px' }}>  
        <Navbar />
      </div>
      
      <Container maxWidth="lg">
        <Box 
          display="flex" 
          flexDirection={isMobile ? 'column' : 'row'}  // Stack columns vertically on mobile
          justifyContent="space-between" 
          alignItems="flex-start" // Align items to the top on mobile for a better look
          p={isMobile ? 2 : 4}  // Adjust padding for mobile
        >
          {/* Left side: Header */}
          <Box 
            flex={2} 
            mb={isMobile ? 2 : 0}  // Margin bottom on mobile to separate the sections
            mr={isMobile ? 0 : 2}  // Remove right margin on mobile
          >
            <Typography 
              variant={isMobile ? 'h4' : 'h3Black'}  // Adjust font size for mobile
              component="h1" 
              color="black"
              gutterBottom
            >
              Delivering next-generation resource allocation solutions to space.
            </Typography>
          </Box>
          
          {/* Right side: Paragraph */}
          <Box flex={2}>
            <Typography 
              variant="body1" 
              color="textSecondary"
              sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}  // Adjust font size for readability on mobile
            >
              Uninet designs and implements resource allocation schemes across terrestrial and non-terrestrial domains.
              </Typography>
          </Box>
        </Box>

        <Box 
          display="flex" 
          flexDirection={isMobile ? 'column' : 'row'}  // Stack columns vertically on mobile
          justifyContent="space-between" 
          alignItems="flex-start" // Align items to the top on mobile for a better look
          p={isMobile ? 2 : 4}  // Adjust padding for mobile
        >
          {/* Left side: Header */}
          <Box 
            flex={2} 
            mb={isMobile ? 2 : 0}  // Margin bottom on mobile to separate the sections
            mr={isMobile ? 0 : 2}  // Remove right margin on mobile
          >
            <Typography 
              variant={isMobile ? 'h4' : 'h3Black'}  // Adjust font size for mobile
              component="h1" 
              color="black"
              gutterBottom
            >
              Software-as-a-service for Satellite-as-a-service providers.
            </Typography>
          </Box>
          <Divider sx={{ bgcolor: 'black', my: 4 }} />

          {/* Right side: Paragraph */}
          <Box flex={2}>
            <Typography 
              variant="body1" 
              color="textSecondary"
              sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}  // Adjust font size for readability on mobile
            >
              Uninet's implements its algorithms as microservices for satellite-as-a-service providers. We work closely with our partners to design algorithms tailored for the resource-constrained environments on satellites, and across satellite networks.
              </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default TechPage;
