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
            position: 'relative',
            width: '100vw',
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
          }}>
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
                  <a href='/tech' className="learn-more-link" style={{ color: 'black' }}>
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
                Founded in 2022, Uninet builds smart algorithms that enhance efficiency and reliability for the Internet of Space Things. Our advanced software solutions ensure low-latency communication and optimal resource management, driving innovation in satellite management.
                <p>Our mission is to design software that brings next-generation networking technology from terrestrial to non-terrestrial networks (NTNs).</p>
                <p>
                  <a href='/tech' className="learn-more-link" style={{ color: 'black' }}>
                    <b>Learn more about us.</b>
                  </a>
                </p>
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
                The proliferation of mega-constellations of low-Earth orbiting (LEO) satellites will make network coverage and edge cloud resources more accessible than ever, even in some of the most isolated locations. Networks of satellites, their arrays of sensors, and their onboard processing capabilities will enable transformative Internet of Things (IoT) applications, including autonomous remote sensing, surveillance, and asset tracking.
                <p>Workflows for some of these IoT applications can demand substantial amounts of bandwidth, computation, and storage resources and require strict quality of service (QoS) requirements in terms of low latency and high resilience. As a result, sophisticated resource scheduling algorithms are necessary to balance the demands of the applications and the network’s supply of available hardware. </p>
                <p>To address the challenges of resource allocation in NTNs, Uninet is researching, developing, and testing solutions that improve and enable routing, scheduling, and orchestration in the space domain. </p>
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
              }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black', textAlign: 'center' }}>
                    High-throughput & Low-latency Routing
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Uninet is developing dynamic, distributed algorithms for routing network traffic between satellites and ground stations. Uninet’s low-complexity backpressure-style algorithms can balance maximal throughput and minimal end-to-end latency according to the QoS requirements of individual flows.
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '16px' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#967bb6',
                      '&:hover': {
                        backgroundColor: '#845a96',
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
              }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black', textAlign: 'center' }}>
                    Edge Cloud Scheduling for IoT
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Uninet is developing a task scheduler for remote sensing applications that run on the satellite edge. Our algorithms dynamically minimize the overall makespan of submitted tasks and satisfy energy, bandwidth, and computation resource constraints.
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '16px' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#967bb6',
                      '&:hover': {
                        backgroundColor: '#845a96',
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
              }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black', textAlign: 'center' }}>
                    Network Slice Orchestration for Complex Workflows
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    “Service chains” of sensing applications that fuse data collected by multiple satellites pose more complex scheduling problems. Uninet uses state-of-the-art optimization methods from terrestrial 5G network slicing to minimize computation and bandwidth resource usage and satisfy capacity constraints.
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '16px' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#967bb6',
                      '&:hover': {
                        backgroundColor: '#845a96',
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
