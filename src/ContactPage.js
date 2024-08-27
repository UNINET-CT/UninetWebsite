import React from 'react';
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import ContactForm from './ContactForm';
import Navbar from './Navbar';
import contact from './contact.jpg';
import Footer from './Footer';

function ContactPage() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <Navbar />
      
      <Box
        sx={{
          width: '100%',
          height: { xs: '200px', sm: '300px', md: '400px', lg: '500px' }, 
          backgroundImage: `url(${contact})`,
          backgroundSize: { xs: '150%', sm: '120%', md: 'cover' }, 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <Container
          sx={{
            textAlign: 'center',
            padding: { xs: '16px', sm: '24px' },
          }}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h2'}
            component="h1"
            sx={{
              fontWeight: 'bold',
              marginBottom: '16px',
            }}
          >
            Get in touch with us
          </Typography>
        </Container>
      </Box>
      
      <Container 
        maxWidth="lg" 
        sx={{ 
          marginTop: 4, 
          minHeight: '50vh',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '32px',
            padding: { xs: '0 8px', sm: '0 16px' },
            paddingTop: { xs: '16px', sm: '32px' },
            textAlign: isMobile ? 'center' : 'left',
            width: '100%',
          }}
        >
          <Box 
            sx={{ 
              flex: 1, 
              maxWidth: '700px', // Ensures a max-width for the form, keeping it centered and well-sized
              padding: isMobile ? '0 16px' : '0', 
              width: '100%',
            }}
          >
            <ContactForm />
          </Box>
        </Box>
      </Container>
      
      <Footer />
    </div>
  );
}

export default ContactPage;
