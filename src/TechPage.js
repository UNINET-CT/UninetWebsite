import React from 'react';
import { Box, Typography, Container, useMediaQuery, Divider } from '@mui/material';
import Navbar from './Navbar';
import imageSrc from './dish.jpg';
import Footer from './Footer';
import network from './network.jpg'
import constellation from './constellation.gif'
import edge from "./edge.png"
import edge_schedule from "./edge_schedule.png"

function TechPage() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Banner Section */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '200px', sm: '300px', md: '400px', lg: '500px' }, // Adjust height for different screen sizes
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: { xs: '150%', sm: '120%', md: 'cover' }, // Zoom out on smaller screens, cover on larger screens
          backgroundPosition: 'center', // Center the image on all screen sizes
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
            Uninet Technology Overview
          </Typography>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ marginTop: 4, minHeight: '50vh' }}> {/* Ensure content section has enough height */}
        {/* First Section */}
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'flex-start',
            alignItems: 'flex-start',  // Aligns top of image and header
            marginBottom: '32px',
            padding: { xs: '0 8px', sm: '0 16px' },
            textAlign: isMobile ? 'center' : 'left',
            paddingTop: { xs: '16px', sm: '32px' },
          }}
        >
          <Box
            component="img"
            src={edge} // Image source passed as a prop
            alt="Illustration of network challenges in space"
            sx={{
              flex: isMobile ? '0 1 auto' : '0 0 40%',
              maxWidth: isMobile ? '80%' : '40%',
              margin: isMobile ? '0 auto 16px' : '0 32px 0 0',
              borderRadius: '8px',
              boxShadow: 3,
              alignSelf: 'flex-start', // Ensures the image is aligned with the top of the header
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography
              variant={isMobile ? 'h4' : 'h3'}
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: isMobile ? '1.8rem' : '2.5rem',
                textAlign: isMobile ? 'center' : 'left',
                maxWidth: isMobile ? '80%' : '100%',
                //margin: isMobile ? '1rem auto' : '2rem auto',
                background: '-webkit-linear-gradient(45deg, #6A0D91, #9a77cf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              How we address network challenges in space
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
              Uninet is developing an advanced algorithmic framework to optimize SDN and network slicing for non-terrestrial networks (NTNs), enhancing performance and efficiency while reducing network loads.
              
              <p>Inspired by terrestrial 5G technologies, our solution emphasizes flexibility, scalability, and robustness to meet the unique challenges of NTNs.</p>
            </Typography>
          </Box>
        </Box>


        <Divider sx={{ my: 4, bgcolor: '#2A2A2A', height: '1px', width: '100%', opacity: '25%' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'flex-start',
            alignItems: 'flex-start',  // Aligns top of image and header
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
                textAlign: isMobile ? 'center' : 'left',
                maxWidth: isMobile ? '80%' : '100%',
                //margin: isMobile ? '1rem auto' : '2rem auto',
                background: '-webkit-linear-gradient(45deg, #6A0D91, #9a77cf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              High-throughput, low-latency routing

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
                Uninet's low-complexity backpressure-style algorithms tackle the challenge of space communication by optimizing throughput and minimizing latency to ensure real-time data transfer and mission success.
          <p>Our algorithms effectively balance network demands, a crucial aspect for the growing data needs of space missions.</p>
          
             </Typography>
          </Box>
          
          <Box
            component="img"
            src={constellation} // Image source passed as a prop
            alt="Illustration of network challenges in space"
            sx={{
              flex: isMobile ? '0 1 auto' : '0 0 40%',
              maxWidth: isMobile ? '80%' : '40%',
              margin: isMobile ? '0 auto 16px' : '0 32px 0 0',
              borderRadius: '8px',
              //boxShadow: 3,
              alignSelf: 'flex-start', // Ensures the image is aligned with the top of the header
            }}
          />

        </Box>

        
        <Divider sx={{ my: 4, bgcolor: '#2A2A2A', height: '1px', width: '100%', opacity: '25%' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'flex-start',
            alignItems: 'flex-start',  // Aligns top of image and header
            marginBottom: '32px',
            padding: { xs: '0 8px', sm: '0 16px' },
            textAlign: isMobile ? 'center' : 'left',
            paddingTop: { xs: '16px', sm: '32px' },
          }}
        >
          <Box
            component="img"
            src={edge_schedule} // Image source passed as a prop
            alt="Illustration of network challenges in space"
            sx={{
              flex: isMobile ? '0 1 auto' : '0 0 40%',
              maxWidth: isMobile ? '80%' : '40%',
              margin: isMobile ? '0 auto 16px' : '0 32px 0 0',
              borderRadius: '8px',
              //boxShadow: 3,
              alignSelf: 'flex-start', // Ensures the image is aligned with the top of the header
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography
              variant={isMobile ? 'h4' : 'h3'}
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: isMobile ? '1.8rem' : '2.5rem',
                textAlign: isMobile ? 'center' : 'left',
                maxWidth: isMobile ? '80%' : '100%',
                //margin: isMobile ? '1rem auto' : '2rem auto',
                background: '-webkit-linear-gradient(45deg, #6A0D91, #9a77cf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
            Edge-cloud scheduling for IoT


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
             Uninet's task scheduler software optimizes IoT management in space by minimizing task completion times while meeting energy, bandwidth, and computational constraints.
            <p> Designed for both space and terrestrial environments, our scheduling solution ensures efficient and reliable data processing for satellite providers.</p>
           
             </Typography>
          </Box>
          
          

        </Box>

        
        <Divider sx={{ my: 4, bgcolor: '#2A2A2A', height: '1px', width: '100%', opacity: '25%' }} />
        {/* Second Section */}
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent="space-between"
          alignItems="flex-start"
          p={isMobile ? 2 : 4}
        >
          <Box flex={2} mb={isMobile ? 2 : 0} mr={isMobile ? 0 : 2}>
            <Typography
              variant={isMobile ? 'h4' : 'h3'}
              component="h2"
              gutterBottom
              sx={{
                flex: 1,
                fontWeight: 'bold',
                fontSize: isMobile ? '1.8rem' : '2.5rem',
                textAlign: isMobile ? 'center' : 'left',
                maxWidth: isMobile ? '80%' : '100%', // Limits the width on mobile
                margin: isMobile ? '1rem auto' : '2rem auto', // Centers the text on mobile
                background: '-webkit-linear-gradient(45deg, #6A0D91, #9a77cf)', // Gradient background
                WebkitBackgroundClip: 'text', // Apply gradient to text
                WebkitTextFillColor: 'transparent', // Make the text itself transparent to show the gradient
              }}
            >
              Software-as-a-service for Satellite-as-a-service providers.
            </Typography>
          </Box>

          <Box flex={2}>
            <Typography
              variant="body1"
              sx={{
                flex: 1,
                maxWidth: isMobile ? '80%' : '100%', // Adds margin on the sides for mobile
                margin: isMobile ? '0 auto' : '0', // Centers the text block on mobile
                textAlign: isMobile ? 'left' : 'left',
                padding: isMobile ? '0 16px' : '0',
              }}
            >
              Uninet's SaaS solutions empower satellite providers to deploy and manage advanced networking with ease, ensuring high performance and reliability.
              <p>By leveraging a microservices architecture, Uninet's SDN algorithms offer scalability and fault tolerance, seamlessly integrating across multiple satellites and networking platforms.</p>
              </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4, bgcolor: '#2A2A2A', height: '1px', width: '100%', opacity: '25%' }} />
        {/* Second Section */}
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent="space-between"
          alignItems="flex-start"
          p={isMobile ? 2 : 4}
        >
          <Box flex={2} mb={isMobile ? 2 : 0} mr={isMobile ? 0 : 2}>
            <Typography
              variant={isMobile ? 'h4' : 'h3'}
              component="h2"
              gutterBottom
              sx={{
                flex: 1,
                fontWeight: 'bold',
                fontSize: isMobile ? '1.8rem' : '2.5rem',
                textAlign: isMobile ? 'center' : 'left',
                maxWidth: isMobile ? '80%' : '100%', // Limits the width on mobile
                margin: isMobile ? '1rem auto' : '2rem auto', // Centers the text on mobile
                background: '-webkit-linear-gradient(45deg, #6A0D91, #9a77cf)', // Gradient background
                WebkitBackgroundClip: 'text', // Apply gradient to text
                WebkitTextFillColor: 'transparent', // Make the text itself transparent to show the gradient
              }}
            >
            Network Slice Orchestration for Complex Workflows
            </Typography>
          </Box>

          <Box flex={2}>
            <Typography
              variant="body1"
              sx={{
                flex: 1,
                maxWidth: isMobile ? '80%' : '100%', // Adds margin on the sides for mobile
                margin: isMobile ? '0 auto' : '0', // Centers the text block on mobile
                textAlign: isMobile ? 'left' : 'left',
                padding: isMobile ? '0 16px' : '0',
              }}
            >
             “Service chains” of sensing applications that fuse data collected by multiple satellites pose more complex scheduling problems. 
             <p>Uninet uses state-of-the-art optimization methods from terrestrial 5G network slicing to minimize computation and bandwidth resource usage and satisfy capacity constraints.</p>
            
             </Typography>
          </Box>
          
        </Box>

        
        
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default TechPage;
