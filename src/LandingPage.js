import React, { useEffect } from 'react';
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS
// import constellation from './constellation.gif';  // Ensure this path is correct
// import nasa_img from './nasa.jpg';  // Make sure the path to your logo is correct
import stars from './stars.jpg';  // Make sure the path to your logo is correct
import background_video from './background.mp4';
import Footer from './Footer';


const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <style>
        {`
          .learn-more-link {
            text-decoration: none;
            color: inherit;
            position: relative;
            display: inline-block;
          }

          .learn-more-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #967bb6;
            transition: width 0.3s ease-in-out;
          }

          .learn-more-link:hover::after {
            width: 100%;
          }
        `}
      </style>
      <div className="scroll-section">
        <Container
          maxWidth={false}
          style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            margin: 0,
            overflow: 'hidden',
          }}
        >
          <video
            autoPlay
            muted
            loop
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -2,
            }}
          >
            <source src={background_video} type="video/mp4" />
          </video>
          <Box
            display="flex"
            flexDirection={isMobile ? 'column' : 'row'}
            justifyContent="space-between"
            alignItems="center"
            p={4}
            style={{
              width: isMobile ? '90%' : '80%',
              textAlign: isMobile ? 'center' : 'left',
              zIndex: 2,
              position: 'relative',
            }}
          >
            <Box
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.85)',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.7)',
                zIndex: -1,
              }}
            />
            <Box
              flex={1}
              mb={isMobile ? 2 : 0}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant={isMobile ? 'h4' : 'h3'}
                component="h1"
                gutterBottom
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '2rem' : '2.5rem',
                }}
              >
                We Build Smart Algorithms for Smarter Satellites
              </Typography>
            </Box>

            <Box flex={1}>
              <Typography
                variant="body1"
                style={{
                  color: 'white',
                  fontSize: isMobile ? '1rem' : '1.2rem',
                }}
              >
                Founded in 2022, Uninet builds smart algorithms that enhance efficiency and reliability for the Internet of Space Things. Our advanced software solutions ensure low-latency communication and optimal resource management, driving innovation in satellite management.
                <p>
                  <a href='/about' className="learn-more-link" style={{ color: 'white' }}>
                    <b>More about the team.</b>
                  </a>
                </p>
              </Typography>
            </Box>
          </Box>
        </Container>
      </div>

      <div className="scroll-section">
        <Container
          maxWidth={false}
          style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            margin: 0,
            overflow: 'hidden',
            backgroundImage: `url(${stars})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            display="flex"
            flexDirection={isMobile ? 'column' : 'row'}
            justifyContent="space-between"
            alignItems="center"
            p={4}
            style={{
              width: isMobile ? '90%' : '80%',
              textAlign: isMobile ? 'center' : 'left',
              zIndex: 2,
              position: 'relative',
            }}
          >
            <Box
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                zIndex: 1,
              }}
            />

            <Box
              flex={1}
              mb={isMobile ? 2 : 0}
              display="flex"
              justifyContent="center"
              alignItems="center"
              zIndex={2}
            >
              <Typography
                variant={isMobile ? 'h4' : 'h3'}
                component="h1"
                gutterBottom
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '2rem' : '2.5rem',
                }}
              >
                State-of-the-art Optimization
              </Typography>
            </Box>

            <Box flex={1} zIndex={2}>
              <Typography
                variant="body1"
                style={{
                  color: 'white',
                  fontSize: isMobile ? '1rem' : '1.2rem',
                }}
              >
                Our state-of-the-art satellite routing algorithms optimize over dynamic constellation topologies. We ensure fast, load-balanced routing decisions to get your data where it needs to go.
                <p>
                  <a href='/tech' className="learn-more-link" style={{ color: 'white' }}>
                    <b>Learn more about our tech.</b>
                  </a>
                </p>
              </Typography>
            </Box>
          </Box>
        </Container>
      </div>
      <div className="scroll-section">
      <Container
          maxWidth={false}
          style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            margin: 0,
            overflow: 'hidden',
            backgroundColor: "black"
          }}
        >
          
        <Footer></Footer>
        </Container>
      </div>
    </>
  );
}

export default LandingPage;

