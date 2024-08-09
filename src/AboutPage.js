import React from 'react';
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import Navbar from './Navbar';

function AboutPage() {
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
            flex={1} 
            mb={isMobile ? 2 : 0}  // Margin bottom on mobile to separate the sections
            mr={isMobile ? 0 : 2}  // Remove right margin on mobile
          >
            <Typography 
              variant={isMobile ? 'h4' : 'h2'}  // Adjust font size for mobile
              component="h1" 
              color="black"
              gutterBottom
            >
              We are Uninet
            </Typography>
          </Box>
          
          {/* Right side: Paragraph */}
          <Box flex={1}>
            <Typography 
              variant="body1" 
              color="textSecondary"
              sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}  // Adjust font size for readability on mobile
            >
              Founded in 2022 to develop innovative solutions in networking and computational challenges in operations and industry, Uninet leverages tools from optimization and system science to develop intelligent satellite software.​ Our technical expertise includes, but is not limited to:​ Software-defined and virtualized networks​, multi-access edge cloud computing​, resource allocation and optimization​, artificial intelligence and deep learning in systems and computing.
              <p>We are extending state-of-the-art terrestrial 5G resource allocation technology and algorithms to non-terrestrial networks of low-Earth orbiting satellites.</p>
              <p>Uninet is currently participating in the NSF SBIR Phase 1.</p>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default AboutPage;
