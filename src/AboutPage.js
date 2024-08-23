import React from 'react';
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import imageSrc from "./nasa.jpg"

function AboutPage() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          width: '100%',
          height: { xs: '200px', sm: '300px', md: '400px', lg: '500px' }, 
          backgroundImage: `url(${imageSrc})`,
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
            We Are Uninet
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
            <Typography
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
              Pioneering next-generation satellite software
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: isMobile ? '80%' : '100%',
                margin: isMobile ? '0 auto' : '0',
                textAlign: 'left',
                padding: isMobile ? '0 16px' : '0',
              }}
            >

            Founded in 2022, Uninet is a small R&D-focused business at the forefront of innovation in networking and computational technology. We specialize in creating intelligent satellite software by leveraging advanced optimization and systems science. Our expertise includes software-defined and virtualized networks, multi-access edge cloud computing, resource allocation, and the application of AI and deep learning in complex systems.
            <p>We're extending the reach of terrestrial 5G technology to low-Earth orbiting satellites, developing pioneering solutions for non-terrestrial networks. As part of our commitment to innovation, we're proud to be participating in the NSF SBIR Phase 1 program.</p>
            <p>Our R&D team is a blend of deep expertise and hands-on experience, working together to solve the toughest challenges in networking technology. We're committed to delivering products that meet our customers' needs, staying flexible and efficient to ensure we bring the right solutions to the table. </p>
            </Typography>
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default AboutPage;
