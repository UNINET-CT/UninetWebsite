import React, { useEffect } from 'react';
import { Box, Typography, Container, useMediaQuery, Card, CardContent, Button, Divider } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS
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

      <div className='scroll-section'>
        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: { xs: '16px 0', sm: '64px 0' },
            margin: 0,
            overflow: 'hidden',
          }}
        >
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '0px',
            flexDirection: 'column', // Stack heading and cards vertically
            
          }}
          >
            {/* Heading and Paragraph Container */}
            <Box sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row', // Stack vertically on mobile
              justifyContent: isMobile ? 'center' : 'flex-start',
              alignItems: isMobile ? 'center' : 'flex-start',
              maxWidth: '1200px',
              width: '100%',
              marginBottom: '32px',
              padding: { xs: '0 8px', sm: '0 16px' },
              textAlign: isMobile ? 'center' : 'left',
              paddingTop: { xs: '16px', sm: '32px' }, // Adds padding above the Box (16px on mobile, 32px on desktop)

            }}>
              <Typography
                variant={isMobile ? 'h4' : 'h3Purple'}
                component="h1"
                gutterBottom
                sx={{
                  flex: 1,
                  color: '#967bb6',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '1.8rem' : '2.5rem',
                  textAlign: isMobile ? 'center' : 'left',
                  maxWidth: isMobile ? '80%' : '100%', // Limits the width on mobile
                  margin: isMobile ? '1rem auto' : '2rem auto', // Centers the text on mobile
                }}
              >
                We Are Uninet
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  flex: 2,
                  maxWidth: isMobile ? '80%' : '100%', // Adds margin on the sides for mobile
                  margin: isMobile ? '0 auto' : '0', // Centers the text block on mobile
                  textAlign: isMobile ? 'left' : 'left', // Center-align text on mobile
                  padding: isMobile ? '0 16px' : '0', // Adds side padding on mobile
                }}
              >
                Founded in 2022, Uninet builds smart algorithms that enhance efficiency and reliability for the Internet of Space Things. Our advanced software solutions ensure low-latency communication and optimal resource management, driving innovation in satellite management.
                <p>Our mission is to design software that brings next-generation networking technology from terrestrial to non-terrestrial networks (NTNs).</p>
                <p>
                  <a href='/about' className="learn-more-link" style={{ color: 'black' }}>
                    <b>Learn more about us.</b>
                  </a>
                </p>
              </Typography>
            </Box>

            <Divider sx={{ my: 4, bgcolor: '#2A2A2A', height: '1px', width: '100%', opacity: '25%' }} />

            <Box sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row', // Stack vertically on mobile
              justifyContent: isMobile ? 'center' : 'flex-start',
              alignItems: isMobile ? 'center' : 'flex-start',
              maxWidth: '1200px',
              width: '100%',
              marginBottom: '32px',
              padding: { xs: '0 8px', sm: '0 16px' },
              textAlign: isMobile ? 'center' : 'left',
              paddingTop: { xs: '16px', sm: '32px' }, // Adds padding above the Box (16px on mobile, 32px on desktop)

            }}>
              <Typography
                variant={isMobile ? 'h4' : 'h3Purple'}
                component="h1"
                gutterBottom
                sx={{
                  flex: 1,
                  color: '#967bb6',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '1.8rem' : '2.5rem',
                  textAlign: isMobile ? 'center' : 'left',
                  maxWidth: isMobile ? '80%' : '100%', // Limits the width on mobile
                  margin: isMobile ? '1rem auto' : '2rem auto', // Centers the text on mobile
                }}
              >
                Expertise in R&D
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  flex: 2,
                  maxWidth: isMobile ? '80%' : '100%', // Adds margin on the sides for mobile
                  margin: isMobile ? '0 auto' : '0', // Centers the text block on mobile
                  textAlign: isMobile ? 'left' : 'left', // Center-align text on mobile
                  padding: isMobile ? '0 16px' : '0', // Adds side padding on mobile
                }}
              >
                At Uninet, our R&D team brings together a wealth of knowledge and experience, working closely to solve complex challenges in networking technology. We pride ourselves on being agile, delivering solutions quickly and efficiently while adapting to the needs of each project. 
                <p>By collaborating and drawing on our collective strengths, we’re able to create innovative technologies that advance both terrestrial and space-based networks.</p>
              </Typography>
            </Box>

            <Divider sx={{ my: 4, bgcolor: '#2A2A2A', height: '1px', width: '100%', opacity: '25%' }} />


            {/* Second Section */}
            <Box sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: isMobile ? 'center' : 'flex-start',
              alignItems: isMobile ? 'center' : 'flex-start',
              maxWidth: '1200px',
              width: '100%',
              marginBottom: '32px',
              padding: { xs: '0 8px', sm: '0 16px' },
              textAlign: isMobile ? 'center' : 'left',
              paddingTop: { xs: '16px', sm: '32px' }, // Adds padding above the Box (16px on mobile, 32px on desktop)

            }}>
              <Typography
                variant={isMobile ? 'h4' : 'h3Purple'}
                component="h1"
                gutterBottom
                sx={{
                  flex: 1,
                  color: '#967bb6',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '1.8rem' : '2.5rem',
                  textAlign: isMobile ? 'center' : 'left',
                  maxWidth: isMobile ? '80%' : '100%', // Limits the width on mobile
                  margin: isMobile ? '1rem auto' : '2rem auto', // Centers the text on mobile
                }}
              >
                Our Technology
              </Typography>
              <Typography variant="body1" sx={{ flex: 2,
                  maxWidth: isMobile ? '80%' : '100%', // Adds margin on the sides for mobile
                  margin: isMobile ? '0 auto' : '0', // Centers the text block on mobile
                  textAlign: isMobile ? 'left' : 'left', // Center-align text on mobile
                  padding: isMobile ? '0 16px' : '0',  }}>
                The rise of LEO satellite mega-constellations will greatly enhance network coverage and edge cloud resources, enabling transformative IoT applications like autonomous sensing and asset tracking. These applications require significant bandwidth, computation, and storage with strict QoS demands. 
                
                <p>To meet these needs, Uninet is developing advanced algorithms for routing, scheduling, and orchestration in the space domain.</p>
                
                </Typography>
            </Box>

            {/* Cards Container */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'center', // Center cards on mobile
              alignItems: 'flex-start',
              gap: '24px',
              flexWrap: 'wrap',
              maxWidth: '100%',
              padding: { xs: '2rem 8px', sm: '2rem 16px' },
            }}>
              {/* First Card */}
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '400px',
                borderRadius: '16px',
                minHeight: '400px',
                background: '-webkit-linear-gradient(45deg, #6A0D91, #9a77cf)'

              }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', textAlign: 'center' }}>
                    <b>High-throughput & Low-latency Routing</b>
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white'}}>
                    Uninet is developing dynamic, distributed algorithms for routing network traffic between satellites and ground stations.
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '16px' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#E5E5E5', // Neutral base color
                      color: '#6A0D91', // Text color that matches the gradient for better contrast
                      '&:hover': {
                        backgroundColor: '#CCCCCC', // Slightly darker shade of the neutral color
                        color: '#ffffff', // Change text color to white on hover for better contrast
                      }
                    }}
                  >
                    Learn More                 
                  </Button>
                </Box>
              </Card>

              {/* Second Card */}
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '400px',
                borderRadius: '16px',
                minHeight: '400px',
                background: '-webkit-linear-gradient(45deg, #6A0D91, #9a77cf)'

              }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', textAlign: 'center' }}>
                    <b>Edge Cloud Scheduling for IoT</b>
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white'}}>
                    Uninet is developing a task scheduler for remote sensing applications that run on the satellite edge.
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '16px' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#E5E5E5', // Neutral base color
                      color: '#6A0D91', // Text color that matches the gradient for better contrast
                      '&:hover': {
                        backgroundColor: '#CCCCCC', // Slightly darker shade of the neutral color
                        color: '#ffffff', // Change text color to white on hover for better contrast
                      }
                    }}
                  >
                    Learn More                 
                  </Button>
                </Box>
              </Card>

              {/* Third Card */}
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '400px',
                borderRadius: '16px',
                minHeight: '400px',
                background: '-webkit-linear-gradient(45deg, #6A0D91, #9a77cf)'

              }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', textAlign: 'center' }}>
                    <b>Network Slice Orchestration for Complex Workflows</b>
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white'}}>
                    Uninet uses state-of-the-art optimization methods from terrestrial 5G network slicing to minimize computation and bandwidth resource usage and satisfy capacity constraints.
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '16px' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#E5E5E5', // Neutral base color
                      color: '#6A0D91', // Text color that matches the gradient for better contrast
                      '&:hover': {
                        backgroundColor: '#CCCCCC', // Slightly darker shade of the neutral color
                        color: '#ffffff', // Change text color to white on hover for better contrast
                      }
                    }}
                  >
                    Learn More                 
                  </Button>
                </Box>
              </Card>
            </Box>
          </Box>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
