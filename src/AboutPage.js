// AboutPage.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';


import Navbar from './Navbar';

function AboutPage() {
  return (
    <div>
       <div style={{ marginBottom: '150px' }}>  
        <Navbar />
      </div>
      
      <Container maxWidth="lg">
        
        <Box display="flex" justifyContent="space-between" alignItems="center" p={4}>
          {/* Left side: Header */}
          <Box flex={1} mr={2}> {/* Margin right for spacing between the columns */}
            <Typography variant="h3" component="h1" gutterBottom>
              We are Uninet
            </Typography>
          </Box>
          
          {/* Right side: Paragraph */}
          <Box flex={2}>
            <Typography variant="body1" color="textSecondary">
            Founded in 2022 to develop innovative solutions in networking and computational challenges in operations and industry, Uninet leverages tools from optimization and system science to develop intelligent satellite software.​ Technical Expertise​ Software-defined and virtualized networks​ Multi-access edge cloud computing​ Resource allocation and optimization​ Artificial intelligence and deep learning in systems and computing
            </Typography>
          </Box>
        </Box>
      </Container>

    </div>
  );
}

export default AboutPage;
