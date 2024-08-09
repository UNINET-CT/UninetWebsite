import React from 'react';
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import ContactForm from './ContactForm';
import Navbar from './Navbar';

function ContactPage() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <div style={{ marginBottom: '150px' }}>  
        <Navbar />
      </div>
      
      <Container maxWidth="lg">
        <Box 
          display="flex" 
          flexDirection={isMobile ? 'column' : 'row'}  // Stack vertically on mobile
          justifyContent={isMobile ? 'center' : 'space-between'}  // Center content horizontally on mobile
          alignItems={isMobile ? 'center' : 'center'}  // Center content vertically on mobile
          p={isMobile ? 2 : 4}  // Adjust padding for mobile
          minHeight={isMobile ? 'calc(100vh - 150px)' : 'auto'}  // Ensure it fills the screen height on mobile
        >
          {/* Left side: Header */}
          <Box 
            flex={1} 
            mb={isMobile ? 2 : 0}  // Margin bottom on mobile to separate sections
            mr={isMobile ? 0 : 2}  // Remove right margin on mobile
            textAlign={isMobile ? 'center' : 'left'}  // Center text on mobile
          >
            <Typography 
              variant={isMobile ? 'h4' : 'h2'}  // Adjust font size for mobile
              component="h1" 
              gutterBottom
              color="black"
            >
              Contact Us
            </Typography>
          </Box>
          
          {/* Right side: Contact Form */}
          <Box flex={2} width={isMobile ? '100%' : 'auto'}>  {/* Ensure the form takes full width on mobile */}
            <ContactForm />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default ContactPage;
