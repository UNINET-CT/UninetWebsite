import React, { useEffect } from 'react';
import { Box, Typography, Container, useMediaQuery, Card, CardContent, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS
import Footer from './Footer';
import programmer from './programmer.png'
import routingIcon from './routing_icon.svg'
import scheduleIcon from './schedule_icon.svg'
import cloudIcon from './cloud_icon.svg'
import banner from './background.mp4'
import darpa from './darpa.png'
import sda from './sda.webp'
import dod from './dod.png'
import nsf from './nsf.png'
import demo from './demo.png'
import Navbar from './Navbar';



// const LandingPage = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: 'ease-in-out',
//       once: false,
//       mirror: true,
//     });
//   }, []);


function LandingPage() {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  const logos = [
    { src: darpa, alt: "darpa"},
    { src: sda, alt: "sda"},
    { src: dod, alt: "dod"},
    { src: nsf, alt: "nsf"},
  ]
  return (
    <>
 
      <div className='scroll-section'>
        <Box sx={{
                  position: 'relative',
                  width: '100vw',
                  height: '100vh',
                  overflow: 'hidden',
                  paddingBottom: 0,
                }}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline // This prevents mobile browsers from showing controls
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      zIndex: -2,
                      pointerEvents: 'none', // This ensures the video is not interactable
                    }}
                  >
                    <source src={banner} type="video/mp4" />
                  </video>
                  
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isMobile ? '0 16px' : '0', // Add padding on mobile for better text alignment
                    zIndex: 2,
                    textAlign: 'center',  // Center text on mobile
                  }}>
                    <Typography
                      variant={isMobile ? 'h4' : 'h2'}
                      component="h2"
                      sx={{
                        color: 'white',
                        textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
                        fontSize: isMobile ? '1.5rem' : '2.5rem',  // Adjust font size for mobile
                      }}
                    >
                      We <u><span className="typing-text" color='Purple'></span></u> Smart Algorithms for Smart Satellites
                    </Typography>
                  </Box>
                </Box>
                

                <style jsx global>{`
                  @keyframes typing {
                    0% { content: ''; }
                    1.5% { content: 'D'; }
                    3% { content: 'De'; }
                    4.5% { content: 'Des'; }
                    6% { content: 'Desi'; }
                    7.5% { content: 'Desig'; }
                    9% { content: 'Design'; }
                    22% { content: 'Design'; }

                    23.5% { content: 'Desig'; }
                    25% { content: 'Desi'; }
                    27.5% { content: 'Des'; }
                    29% { content: 'De'; }
                    30.5% { content: 'D'; }
                    32% { content: ''; }
                    33.5% { content: 'B'; }
                    35% { content: 'Bu'; }
                    36.5% { content: 'Bui'; }
                    38% { content: 'Buil'; }
                    39.5% { content: 'Build'; }
                    52.5% { content: 'Build'; }

                    54% { content: 'Buil'; }
                    55.5% { content: 'Bui'; }
                    57% { content: 'Bu'; }
                    58.5% { content: 'B'; }
                    60% { content: ''; }
                    61.5% { content: 'D'; }
                    63% { content: 'De'; }
                    64.5% { content: 'Dep'; }
                    66% { content: 'Depl'; }
                    67.5% { content: 'Deplo'; }
                    69% { content: 'Deploy'; }
                    82% { content: 'Deploy'; }
                    83.5% { content: 'Deplo'; }
                    85% { content: 'Depl'; }
                    86.5% { content: 'Dep'; }
                    88% { content: 'De'; }
                    89.5% { content: 'D'; }
                    91% { content: ''; }
                    92.5% { content: ''; } /* Extra space to ensure a clean reset */
                }


                  .typing-text::before {
                    content: '';
                    display: inline-block;
                    color: #967bb6;
                    animation: typing 10s steps(20) infinite;
                  }
                `}</style>
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

            {/* {!isMobile && (
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
            )}*/}

            {/* <Divider sx={{ my: 4, bgcolor: '#2A2A2A', height: '-1px', width: '100%', opacity: '0%' }} />  */}


            {/* Heading and Paragraph Container */}
            <Box sx={{
              display: 'flex', //removes the text being side by side
              flexDirection: isMobile ? 'column' : 'column', // Stack vertically on mobile
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
                variant={isMobile ? 'h4' : 'h'}
                component="h1"
                gutterBottom
                sx={{
                  flex: 1,
                  color: '#967bb6',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '1.8rem' : '2.5 rem',
                  textAlign: isMobile ? 'center' : 'center',
                  maxWidth: isMobile ? '80%' : '100%',
                  margin: isMobile ? '1rem auto' : '2rem auto',


                }}
              >
                WE ARE UNINET
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  flex: 2,
                  color: 'white',
                  maxWidth: isMobile ? '80%' : '100%',
                  margin: isMobile ? '0 auto' : '0',
                  textAlign: isMobile ? 'left' : 'left',
                  padding: isMobile ? '0 16px' : '0 36px',
                }}
              >
                Founded in 2022, Uninet builds smart algorithms that enhance efficiency and reliability for the Internet of Space Things. Our advanced software solutions ensure low-latency communication and optimal resource management, driving innovation in satellite management.
                <p>Our mission is to design customer-focused software that brings next-generation networking technology from terrestrial to non-terrestrial networks (NTNs).</p>
                <p>
                  <Link to="/about" className="learn-more-link" style={{ color: 'white' }}>
                    <b>Learn more about us.</b>
                  </Link>

                </p>
              </Typography>
              <Typography
                variant={isMobile ? 'h3' : 'h'}
                component="h2"
                gutterBottom
                sx={{
                  flex: 1,
                  color: '#967bb6',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '1.8rem' : '2.5 rem',
                  textAlign: isMobile ? 'center' : 'center',
                  maxWidth: isMobile ? '80%' : '100%',
                  margin: isMobile ? '1rem auto' : '2rem auto',


                }}
              >
                PARTNERSHIPS
              </Typography>
              
              {/* <Divider sx={{ my: 4, bgcolor: '#967bb6', height: '1px', width: '100%', opacity: '25%' }} /> */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center", // center in row
                      alignContent: 'center',
                      textAlign: isMobile ? 'center' : 'center',
                      gap:10, // space between logos
                      flexWrap: "wrap", // wrap on small screens
                      p: 2,
                      maxWidth: isMobile ? '80%' : '100%',
                      margin: isMobile ? '1rem auto' : '2rem auto'
                    }}

                    // sx={{
                    //   flex: 1,
                    //   color: '#967bb6',
                    //   fontWeight: 'bold',
                    //   fontSize: isMobile ? '1.8rem' : '2.5 rem',
                    //   textAlign: isMobile ? 'center' : 'center',
                    //   maxWidth: isMobile ? '80%' : '100%',
                    //   margin: isMobile ? '1rem auto' : '2rem auto',
                    // }}
                      >
                    {logos.map((logo) => (
                      <Box
                        key={logo.alt}
                        component="img"
                        src={logo.src}
                        alt={logo.alt}
                        sx={{
                          width: 150, // fixed width
                          height: 100, // fixed height
                          objectFit: "contain", // keep aspect ratio inside the box
                          borderRadius: 1, // optional rounded corners
                        }}
                      />
                    ))}
                </Box>
                
            </Box>

            {/* <Divider sx={{ my: 4, bgcolor: '#967bb6', height: '1px', width: '100%', opacity: '25%' }} /> */}


{/*             
            {!isMobile && (
              <Box
                sx={{
                  maxWidth: '800px', // Box width for larger screens
                  minWidth: '500px', // Box width for smaller screens
                  alignContent: 'center',
                  margin: '0 auto', // Center the box horizontally
                  backgroundColor: '#967bb63d', // Space gray background
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
                  variant={isMobile ? 'h4' : 'h3Purple'}
                  component="h1"
                  sx={{
                    flex: 1,
                    fontWeight: '700',
                    // color: '#967bb6', // White text for the heading
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
                    maxWidth: '1000px', // Larger max width for the image
                    maxHeight: '1000px',
                    borderRadius: '12px', // Match box radius for consistency
                  }}
                  
                />
              
          
              </Box>
              
              

            )}
               */}
              <Divider sx={{ my: 4, bgcolor: '#967bb6', height: '1px', width: '100%', opacity: '25%' }} />


              
            
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

              {/* <Box
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
              /> */}
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
                    padding: isMobile ? '0 16px' : '0 36px',
                  }}
                >
                  Expertise in R&D
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    flex: 2,
                    color: 'white',
                    maxWidth: isMobile ? '80%' : '100%',
                    margin: isMobile ? '0 auto' : '0',
                    textAlign: isMobile ? 'left' : 'left',
                    padding: isMobile ? '0 16px' : '0 36px',
                  }}
                >
                  At Uninet, our R&D team brings together a wealth of knowledge and experience, working closely to solve complex challenges in networking technology. We pride ourselves on being agile, delivering solutions quickly and efficiently while adapting to the needs of each project.
                  <p>By collaborating and drawing on our collective strengths, we’re able to create innovative technologies that advance both terrestrial and space-based networks.</p>
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 4, bgcolor: '#967bb6', height: '1px', width: '100%', opacity: '25%' }} />

            <Box sx={{
              // display: 'flex',
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
                  float: 'right',
                  flex: isMobile ? '0 1 auto' : '0 0 40%',
                  maxWidth: isMobile ? '80%' : '35%',
                  margin: isMobile ? '0 auto 16px' : '0 32px 0 0',
                  borderRadius: '8px',
                  //boxShadow: 3,
                  alignSelf: 'flex-start',
                }}
              />

              <Typography
                variant={isMobile ? 'h4' : 'h3Purple'}
                component="h1"
                gutterBottom
                sx={{
                  flex: 1,
                  color: '#b272ffff',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '1.8rem' : '2.5rem',
                  textAlign: isMobile ? 'center' : 'left',
                  maxWidth: isMobile ? '80%' : '100%',
                  margin: isMobile ? '1rem auto' : '2rem auto',
                  padding: isMobile ? '0 16px' : '0 36px',
                }}
              >
                Our Technology
              </Typography>
              <Typography variant="body1" sx={{
                flex: 2,
                color: 'white',
                maxWidth: isMobile ? '80%' : '100%',
                margin: isMobile ? '0 auto' : '0',
                textAlign: isMobile ? 'left' : 'left',
                padding: isMobile ? '0 16px' : '0 36px',
              }}>
                The rise of LEO satellite mega-constellations will greatly enhance network coverage and edge cloud resources, enabling transformative IoT applications like autonomous sensing and asset tracking. These applications require significant bandwidth, computation, and storage with strict QoS demands.

                <p>To meet these needs, Uninet is developing advanced algorithms for routing, scheduling, and orchestration in the space domain.</p>
                <p>
                  <Link to="/tech" className="learn-more-link" style={{ color: 'white' }}>
                    <b>Discover our technology.</b>
                  </Link>
                </p>
              </Typography>
              
              {/* <Box
                component="img"
                src={programmer}
                alt="Programmer on computer"
                sx={{
                  // float: 'left',
                  flex: isMobile ? '0 1 auto' : '0 0 40%',
                  justifyContent: 'flex-end',
                  maxWidth: isMobile ? '80%' : '35%',
                  margin: isMobile ? 'auto 0' : '0 auto',
                  borderRadius: '8px',
                  //boxShadow: 3,
                  alignSelf: 'flex-start',
                }}
              /> */}

            </Box>

            <Divider sx={{ my: 4, bgcolor: '#967bb6', height: '1px', width: '100%', opacity: '25%' }} />


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
                  background: 'linear-gradient(45deg, #332d3bff, #A117F2)',
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
