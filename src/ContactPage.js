// AboutPage.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ContactForm from './ContactForm';


import Navbar from './Navbar';

function ContactPage() {
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
              Contact Us
            </Typography>
          </Box>
          
          {/* Right side: Paragraph */}
          <Box flex={2}>
            <ContactForm></ContactForm>
          </Box>
        </Box>
      </Container>

    </div>
  );
}

export default ContactPage;
