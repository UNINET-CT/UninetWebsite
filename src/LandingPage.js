import React, { useEffect } from 'react';
import { Box, Typography, Container, useMediaQuery, Card, CardContent, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS
import Footer from './Footer';
import programmer from './programmer.jpg'
import routingIcon from './routing_icon.svg'
import scheduleIcon from './schedule_icon.svg'
import cloudIcon from './cloud_icon.svg'
import demo from './demo.png'



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

            {!isMobile && (
              <Box
                sx={{
                  maxWidth: '800px', // Box width for larger screens
                  minWidth: '500px', // Box width for smaller screens
                  margin: '0 auto', // Center the box horizontally
                  backgroundColor: '#333333', // Space gray background
                  padding: '24px', // Spacious padding for desktop
                  borderRadius: '12px', // Larger border radius for modern look
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center', // Centers content horizontally
                  gap: '24px', // Space between elements
                  boxShadow: 4, // Prominent shadow for better visibility
                  color: 'white', // Text color
                  textAlign: 'center', // Centers text alignment
                }}
              >
                <Typography
                  variant="h4" // Larger heading for better emphasis
                  sx={{
                    fontWeight: '700',
                    color: '#ffffff', // White text for the heading
                  }}
                >
                  Uninet Technology Demo
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: '500',
                    lineHeight: 1.8, // Increased line height for readability
                    color: '#ffffff',
                  }}
                >
                  Check out the new Uninet 3D routing demo{' '}
                  <a href="https://uninet-ct.com/demo" style={{ color: '#64b5f6' }}>
                    here
                  </a>
                  ! (*Best viewed on desktop)
                </Typography>
                <img
                  src={demo} // Replace with your image URL
                  alt="Uninet 3D Routing Demo"
                  style={{
                    width: '100%',
                    maxWidth: '500px', // Larger max width for the image
                    borderRadius: '12px', // Match box radius for consistency
                  }}
                />
              </Box>
            )}

            <Divider sx={{ my: 4, bgcolor: '#2A2A2A', height: '1px', width: '100%', opacity: '0%' }} />


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
              paddingTop: { xs: '16px', sm: '32px' },

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
                  maxWidth: isMobile ? '80%' : '100%',
                  margin: isMobile ? '1rem auto' : '2rem auto',
                }}
              >
                We Are Uninet
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  flex: 2,
                  maxWidth: isMobile ? '80%' : '100%',
                  margin: isMobile ? '0 auto' : '0',
                  textAlign: isMobile ? 'left' : 'left',
                  padding: isMobile ? '0 16px' : '0',
                }}
              >
                Founded in 2022, Uninet builds smart algorithms that enhance efficiency and reliability for the Internet of Space Things. Our advanced software solutions ensure low-latency communication and optimal resource management, driving innovation in satellite management.
                <p>Our mission is to design customer-focused software that brings next-generation networking technology from terrestrial to non-terrestrial networks (NTNs).</p>
                <p>
                  <Link to="/about" className="learn-more-link" style={{ color: 'black' }}>
                    <b>Learn more about us.</b>
                  </Link>

                </p>
              </Typography>
            </Box>

            <Divider sx={{ my: 4, bgcolor: '#2A2A2A', height: '1px', width: '100%', opacity: '25%' }} />

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
              paddingTop: { xs: '16px', sm: '32px' },

            }}>
              <Box
                component="img"
                src={programmer}
                alt="Programmer on computer"
                sx={{
                  flex: isMobile ? '0 1 auto' : '0 0 40%',
                  maxWidth: isMobile ? '80%' : '35%',
                  margin: isMobile ? '0 auto 16px' : '0 32px 0 0',
                  borderRadius: '8px',
                  //boxShadow: 3,
                  alignSelf: 'flex-start',
                }}
              />
              <Box sx={{ flex: 1 }}>

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
                    maxWidth: isMobile ? '80%' : '100%',
                    margin: isMobile ? '1rem auto' : '2rem auto',
                  }}
                >
                  Expertise in R&D
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    flex: 2,
                    maxWidth: isMobile ? '80%' : '100%',
                    margin: isMobile ? '0 auto' : '0',
                    textAlign: isMobile ? 'left' : 'left',
                    padding: isMobile ? '0 16px' : '0',
                  }}
                >
                  At Uninet, our R&D team brings together a wealth of knowledge and experience, working closely to solve complex challenges in networking technology. We pride ourselves on being agile, delivering solutions quickly and efficiently while adapting to the needs of each project.
                  <p>By collaborating and drawing on our collective strengths, we’re able to create innovative technologies that advance both terrestrial and space-based networks.</p>
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 4, bgcolor: '#2A2A2A', height: '1px', width: '100%', opacity: '25%' }} />

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
              paddingTop: { xs: '16px', sm: '32px' },

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
                  maxWidth: isMobile ? '80%' : '100%',
                  margin: isMobile ? '1rem auto' : '2rem auto',
                }}
              >
                Our Technology
              </Typography>
              <Typography variant="body1" sx={{
                flex: 2,
                maxWidth: isMobile ? '80%' : '100%',
                margin: isMobile ? '0 auto' : '0',
                textAlign: isMobile ? 'left' : 'left',
                padding: isMobile ? '0 16px' : '0',
              }}>
                The rise of LEO satellite mega-constellations will greatly enhance network coverage and edge cloud resources, enabling transformative IoT applications like autonomous sensing and asset tracking. These applications require significant bandwidth, computation, and storage with strict QoS demands.

                <p>To meet these needs, Uninet is developing advanced algorithms for routing, scheduling, and orchestration in the space domain.</p>
                <p>
                  <Link to="/tech" className="learn-more-link" style={{ color: 'black' }}>
                    <b>Discover our technology.</b>
                  </Link>
                </p>
              </Typography>
            </Box>

            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '24px',
              flexWrap: 'wrap',
              maxWidth: isMobile ? '80%' : '100%',
              padding: { xs: '2rem 8px', sm: '2rem 16px' },
            }}>

              {[
                {
                  title: "High-throughput & Low-latency Routing",
                  description: "Uninet is developing dynamic, distributed algorithms for routing network traffic between satellites and ground stations.",
                  icon: routingIcon,
                },
                {
                  title: "Edge Cloud Scheduling for IoT",
                  description: "Uninet is developing a task scheduler for remote sensing applications that run on the satellite edge.",
                  icon: scheduleIcon,
                },
                {
                  title: "Network Slice Orchestration for Complex Workflows",
                  description: "Uninet uses state-of-the-art optimization methods from terrestrial 5G network slicing to minimize computation and bandwidth resource usage and satisfy capacity constraints.",
                  icon: cloudIcon,
                },
              ].map((card, index) => (
                <Card key={index} sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  maxWidth: '400px',
                  borderRadius: '16px',
                  height: '500px',  // Set a fixed height for all cards
                  background: 'linear-gradient(45deg, #967bb6ff, #9a77cf)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  padding: '24px',
                  boxSizing: 'border-box',
                }}>
                  <CardContent sx={{
                    width: '100%',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                  }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      {card.title}
                    </Typography>

                    <Box
                      component="img"
                      src={card.icon}
                      alt={`${card.title} icon`}
                      sx={{
                        width: '128px',
                        height: '128px',
                        margin: '16px auto',  // Center the icon with margin
                      }}
                    />

                    <Typography
                      variant="body1"
                      sx={{
                        color: 'white',
                        lineHeight: '1.6',
                      }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '16px' }}>
                    {/* <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#E5E5E5', 
                                    color: '#6A0D91', 
                                    borderRadius: '8px',
                                    fontWeight: 'bold',
                                    padding: '10px 24px',
                                    '&:hover': {
                                        backgroundColor: '#CCCCCC', 
                                        color: '#ffffff', 
                                    }
                                }}
                            >
                                Learn More                 
                            </Button> */}
                  </Box>
                </Card>
              ))}
            </Box>

          </Box>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
