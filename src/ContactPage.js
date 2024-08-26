import React from 'react';
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import ContactForm from './ContactForm';
import Navbar from './Navbar';
import contact from './contact.jpg'
import Footer from './Footer';

function ContactPage() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <div style={{ }}>  
        <Navbar />
      </div>
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
      <Container maxWidth="lg" sx={{ marginTop: 4, minHeight: '50vh' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'flex-start',
            alignItems: 'flex-start',  
            marginBottom: '32px',
            padding: { xs: '0 8px', sm: '0 16px' },
            textAlign: isMobile ? 'center' : 'left',
            paddingTop: { xs: '16px', sm: '32px' },
          }}
        >
        
          
          <Box sx={{ flex: 1 }}>
            {/* <Typography
              variant={isMobile ? 'h4' : 'h3'}
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: isMobile ? '1.8rem' : '2.5rem',
                textAlign: isMobile ? 'center' : 'center',
                maxWidth: isMobile ? '80%' : '100%',
                //margin: isMobile ? '1rem auto' : '2rem auto',
                background: '-webkit-linear-gradient(45deg, #6A0D91, #9a77cf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '32px',

              }}
            >
              Get in touch with us
            </Typography> */}
            <ContactForm></ContactForm>
          </Box>
        </Box>
      </Container>
      <Footer />

    </div>
  );
}

export default ContactPage;
