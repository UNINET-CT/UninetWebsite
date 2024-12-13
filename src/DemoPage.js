import React from 'react';
import { Box, Card, CardContent, Typography, Container, useMediaQuery, Divider, CircularProgress } from '@mui/material';
import SignalWifiBadIcon from '@mui/icons-material/SignalWifiBad';
import SpeedIcon from '@mui/icons-material/Speed';
import AccessTimeIcon from '@mui/icons-material/AccessTime'

import Navbar from './Navbar';
import Footer from './Footer';
import legend from './legend.svg';
import spr from './spr.png';
import dldr from './dldr.png';
import controls from './controls.png';
import demo from './demo.png';
import metrics from './metrics.png';
import flows from './flows.svg';
import spr_flows from './spr_flows.svg';
import bp_flows from './bp_flows.svg';
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import InfoIcon from '@mui/icons-material/Info';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from '@mui/material';


// const OpenGLComponent = React.lazy(() => import('./SatelliteVisualizer')); // Adjust path as needed

// import OpenGLComponent from './SatelliteVisualizer';

function DemoPage( {openGLComponent} ) {
    const isMobile = useMediaQuery('(max-width:600px)');


    

    return (
        <div style={{ backgroundColor: 'white' }}>
            <Navbar />
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
                            variant={isMobile ? 'h4' : 'h1'}
                            component="h2"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                fontSize: isMobile ? '1.8rem' : '2.5rem',
                                textAlign: isMobile ? 'center' : 'center',
                                maxWidth: isMobile ? '80%' : '100%',
                                background: '-webkit-linear-gradient(45deg, #967bb6ff, #9a77cf)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                margin: isMobile ? '1rem auto' : '2rem auto',
                            }}
                        >
                            Welcome to the Uninet routing demo
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
                            Uninet's low-complexity backpressure-style algorithms tackle the challenge of space communication by optimizing throughput and latency to ensure real-time data transfer and mission success.
                            <p></p>
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
                            We present an interactive demonstration of backpressure-based routing in a LEO constellation environment.
                            The goal of this demonstration is to highlight the load-balancing characteristics of backpressure compared to open shortest path first routing.
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginBottom: '32px',
                                padding: { xs: '0 8px', sm: '0 16px' },
                                textAlign: isMobile ? 'center' : 'left',
                                paddingTop: { xs: '16px', sm: '32px' },
                            }}
                        >
                            {/* First Image with Caption */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: isMobile ? 'center' : 'flex-start',
                                    margin: isMobile ? '0 auto 16px' : '0 32px 0 0',
                                    maxWidth: isMobile ? '80%' : '100%',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={demo}
                                    alt="Illustration of network challenges in space"
                                    sx={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        boxShadow: 1,
                                    }}
                                />
                                <Typography
                                    variant="caption"
                                    sx={{
                                        marginTop: '8px',
                                        textAlign: isMobile ? 'center' : 'center',
                                        fontSize: { xs: '0.8rem', sm: '1rem' },
                                    }}
                                >
                                </Typography>
                            </Box>
                        </Box>


                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: isMobile ? '80%' : '100%',
                                margin: isMobile ? '0 auto' : '0',
                                textAlign: 'left',
                                padding: isMobile ? '0 16px' : '0',
                            }}
                        >
                            <strong>Instructions:</strong> Scroll down to learn more about the problem and solution. To skip to the interactive demo, click the button below.
                        </Typography>


                        <Button
                            variant="contained"
                            href="#interactive-demo"
                            sx={{
                                background: 'linear-gradient(45deg, #9a77cf, #967bb6)',
                                color: '#ffffff',
                                fontWeight: 'bold',
                                padding: '12px 24px',
                                borderRadius: '8px',
                                textTransform: 'none',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #967bb6, #9a77cf)',
                                    transform: 'scale(1.05)',
                                },
                                margin: '16px auto',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                maxWidth: '200px',
                                textAlign: 'center',
                            }}
                        >
                            Skip to Demo
                        </Button>


                        <Divider sx={{ margin: '16px 16px' }} />

                        <Typography
                            variant={isMobile ? 'h5' : 'h6'}
                            component="h3"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                fontSize: isMobile ? '1.5rem' : '2rem',
                                textAlign: isMobile ? 'center' : 'center',
                                maxWidth: isMobile ? '80%' : '100%',
                                background: '-webkit-linear-gradient(45deg, #967bb6ff, #9a77cf)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                margin: isMobile ? '1rem auto' : '2rem auto',
                            }}

                        >
                            Hot-spot congestion in space networks
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
                            <p>
                                In non-terrestrial networks (NTNs), limited bandwidth resources leads to challenges in routing data efficiently.

                                <p>
                                    Sensing applications, such as Earth observation, require high-quality data flows with low latency so your data is delivered as quickly and efficiently as possible.
                                </p>
                                {/* Define data flows */}

                            </p>
                        </Typography>


                        <Box
                            sx={{
                                maxWidth: isMobile ? '90%' : '80%', // Keep it centered and well-sized
                                margin: '24px auto',
                                padding: { xs: '20px', sm: '28px' },
                                background: 'linear-gradient(135deg, #fffde7, #fff9c4)', // Soft yellow gradient
                                borderRadius: '12px',
                                boxShadow: '0px 8px 24px rgba(255, 193, 7, 0.2)', // Yellow glow-like shadow
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                border: '1px solid #ffecb3', // Light yellow border for structure
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <LightbulbIcon
                                    sx={{
                                        color: '#fbc02d', // Warm yellow for the lightbulb icon
                                        fontSize: '2.5rem',
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#f57f17', // Darker amber for the title text
                                        fontWeight: 'bold',
                                        fontSize: '1.25rem',
                                    }}
                                >
                                    What are data flows in space networks?
                                </Typography>
                            </Box>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#5d4037', // Warm brown-gray for the text for better contrast
                                    lineHeight: 1.6,
                                    // fontSize: '1rem',
                                }}
                            >
                                Data flows are the paths that packets take from the source to the destination.
                                <p>

                                    For satellite sensing applications, this may look like data packets moving from a sensor on a satellite to another satellite that will process the data.
                                </p>
                                <p>
                                    In general, we map data flows to service function chains (SFCs) that represent the sequence of network functions that data packets must traverse.
                                </p>
                            </Typography>
                        </Box>



                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginBottom: '32px',
                                padding: { xs: '0 8px', sm: '0 16px' },
                                textAlign: isMobile ? 'center' : 'left',
                                paddingTop: { xs: '16px', sm: '32px' },
                            }}
                        >
                            {/* First Image with Caption */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: isMobile ? 'center' : 'flex-start',
                                    margin: isMobile ? '0 auto 16px' : '0 32px 0 0',
                                    maxWidth: isMobile ? '80%' : '70%',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={flows}
                                    alt="Illustration of network challenges in space"
                                    sx={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        boxShadow: 1,
                                    }}
                                />
                                <Typography
                                    variant="caption"
                                    sx={{
                                        marginTop: '8px',
                                        textAlign: isMobile ? 'center' : 'center',
                                        fontSize: { xs: '0.8rem', sm: '1rem' },
                                    }}
                                >
                                    Example of a flow in a satellite network.
                                    Yellow satellites are endpoints of a flow, where one contains a sensor and the other a processor.
                                    White satellites are intermediate nodes that relay data packets.
                                    Blue lines indicate the path taken by data packets. Dotted gray lines represent potential paths.
                                </Typography>
                            </Box>

                            {/* Second Image with Caption */}

                        </Box>

                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: isMobile ? '80%' : '100%',
                                margin: isMobile ? '0 auto' : '0',
                                textAlign: 'left',
                                padding: isMobile ? '0 16px' : '0',
                            }}
                        >

                            <p>
                                However, the dynamic nature of space networks makes it difficult to maintain high throughput and low latency.

                            </p>

                            Open shortest path first routing (OSPF) minimizes latency when bandwidth resources are abundant but causes hot-spots of overutilized links when bandwidth is scarce.

                            <p></p>
                            <br />



                        </Typography>

                        {/*  side by side images for spr and dldr */}



                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginBottom: '32px',
                                padding: { xs: '0 8px', sm: '0 16px' },
                                textAlign: isMobile ? 'center' : 'left',
                                paddingTop: { xs: '16px', sm: '32px' },
                            }}
                        >
                            {/* First Image with Caption */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: isMobile ? 'center' : 'flex-start',
                                    margin: isMobile ? '0 auto 16px' : '0 32px 0 0',
                                    maxWidth: isMobile ? '80%' : '40%',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={spr}
                                    alt="Illustration of network challenges in space"
                                    sx={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        boxShadow: 1,
                                    }}
                                />
                                <Typography
                                    variant="caption"
                                    sx={{
                                        marginTop: '8px',
                                        textAlign: isMobile ? 'center' : 'center',
                                        fontSize: { xs: '0.8rem', sm: '1rem' },
                                    }}
                                >
                                    OSPF causes hot-spots of overutilized links. The thickness of the lines represents the congestion level.
                                </Typography>
                            </Box>

                            {/* Second Image with Caption */}

                        </Box>

                        <Box
                            sx={{
                                maxWidth: isMobile ? '80%' : '100%',
                                margin: isMobile ? '0 auto' : '0',
                                backgroundColor: '#ffdddd',
                                padding: isMobile ? '12px' : '16px',
                                borderRadius: '8px',
                                border: '1px solid #f44336',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px', // space between icon and text
                                boxShadow: 1,
                            }}
                        >
                            <WarningAmberIcon
                                sx={{
                                    color: '#d32f2f',
                                    fontSize: isMobile ? '1.5rem' : '2rem',
                                    flexShrink: 0, // keep icon size consistent
                                }}
                            />

                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#d32f2f',
                                    fontWeight: 'bold',
                                    textAlign: 'left',
                                    lineHeight: 1.6,
                                }}
                            >
                                OSPF may lead to packet loss and decreased throughput, which can be detrimental for mission-critical flows.
                            </Typography>

                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginBottom: '32px',
                                padding: { xs: '0 8px', sm: '0 16px' },
                                textAlign: isMobile ? 'center' : 'left',
                                paddingTop: { xs: '16px', sm: '32px' },
                            }}
                        >
                            {/* First Image with Caption */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: isMobile ? 'center' : 'flex-start',
                                    margin: isMobile ? '0 auto 16px' : '0 32px 0 0',
                                    maxWidth: isMobile ? '80%' : '70%',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={spr_flows}
                                    alt="Illustration of network challenges in space"
                                    sx={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        boxShadow: 1,
                                    }}
                                />
                                <Typography
                                    variant="caption"
                                    sx={{
                                        marginTop: '8px',
                                        textAlign: isMobile ? 'center' : 'center',
                                        fontSize: { xs: '0.8rem', sm: '1rem' },
                                    }}
                                >
                                    Example of an OSPF flow with red links indicating congestion and packet loss. Open shortest path first routing does not consider these factors and thus affects flow quality.
                                </Typography>
                            </Box>

                            {/* Second Image with Caption */}

                        </Box>



                        <Divider sx={{ margin: '16px 0' }} />


                        <Typography
                            variant={isMobile ? 'h5' : 'h6'}
                            component="h3"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                fontSize: isMobile ? '1.5rem' : '2rem',
                                textAlign: isMobile ? 'center' : 'center',
                                maxWidth: isMobile ? '80%' : '100%',
                                background: '-webkit-linear-gradient(45deg, #967bb6ff, #9a77cf)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                margin: isMobile ? '1rem auto' : '2rem auto',
                            }}

                        >
                            Solution: Load-balancing with backpressure-based routing
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
                            Backpressure is a network routing algorithm that balances network demands by using congestion information to make routing decisions.
                            It is a distributed algorithm that uses local information from network switches to make global routing decisions. It is throughput-optimal and can handle dynamic network conditions.
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginBottom: '32px',
                                padding: { xs: '0 8px', sm: '0 16px' },
                                textAlign: isMobile ? 'center' : 'left',
                                paddingTop: { xs: '16px', sm: '32px' },
                            }}
                        >
                            {/* First Image with Caption */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: isMobile ? 'center' : 'flex-start',
                                    margin: isMobile ? '0 auto 16px' : '0 32px 0 0',
                                    maxWidth: isMobile ? '80%' : '40%',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={dldr}
                                    alt="Illustration of network challenges in space"
                                    sx={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        boxShadow: 1,
                                    }}
                                />
                                <Typography
                                    variant="caption"
                                    sx={{
                                        marginTop: '8px',
                                        textAlign: isMobile ? 'center' : 'center',
                                        fontSize: { xs: '0.8rem', sm: '1rem' },
                                    }}
                                >
                                    Backpressure-based routing avoids hot-spots by balancing network demands. The thickness of the lines represents the congestion level.
                                </Typography>
                            </Box>

                            {/* Second Image with Caption */}

                        </Box>

                        <Box
                            sx={{
                                maxWidth: isMobile ? '80%' : '100%',
                                margin: isMobile ? '0 auto' : '0',
                                backgroundColor: '#e8f5e9',
                                padding: isMobile ? '12px' : '16px',
                                borderRadius: '8px',
                                border: '1px solid #a5d6a7',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px', // space between icon and text
                                boxShadow: 1,
                            }}
                        >
                            <CheckCircleIcon
                                sx={{
                                    color: '#388e3c',
                                    fontSize: isMobile ? '1.5rem' : '2rem',
                                    flexShrink: 0, // keeps icon size consistent
                                }}
                            />

                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#388e3c',
                                    fontWeight: '500',
                                    textAlign: 'left',
                                    lineHeight: 1.5,
                                }}
                            >
                                Backpressure minimizes packet loss and maximizes throughput due to its load-balancing characteristics.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginBottom: '32px',
                                padding: { xs: '0 8px', sm: '0 16px' },
                                textAlign: isMobile ? 'center' : 'left',
                                paddingTop: { xs: '16px', sm: '32px' },
                            }}
                        >
                            {/* First Image with Caption */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: isMobile ? 'center' : 'flex-start',
                                    margin: isMobile ? '0 auto 16px' : '0 32px 0 0',
                                    maxWidth: isMobile ? '80%' : '70%',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={bp_flows}
                                    alt="Illustration of network challenges in space"
                                    sx={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        boxShadow: 1,
                                    }}
                                />
                                <Typography
                                    variant="caption"
                                    sx={{
                                        marginTop: '8px',
                                        textAlign: isMobile ? 'center' : 'center',
                                        fontSize: { xs: '0.8rem', sm: '1rem' },
                                    }}
                                >
                                    Example of a backpressure-routed flow with green links that represent reroutes through less congested paths, and avoiding red links. Backpressure routing ensures that data flows are not affected by congestion.
                                </Typography>
                            </Box>

                            {/* Second Image with Caption */}

                        </Box>


                        <Divider sx={{ margin: '16px 0' }} />



                        <Typography
                            variant={isMobile ? 'h5' : 'h6'}
                            component="h3"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                fontSize: isMobile ? '1.5rem' : '2rem',
                                textAlign: isMobile ? 'center' : 'center',
                                maxWidth: isMobile ? '80%' : '100%',
                                background: '-webkit-linear-gradient(45deg, #967bb6ff, #9a77cf)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                margin: isMobile ? '1rem auto' : '2rem auto',
                            }}

                        >
                            How to use the Uninet Satellite Visualizer
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
                            The Uninet Satellite Visualizer allows you to interact with a simulated LEO constellation network for sensor-to-processor satellite Earth observation applications.

                            <p>
                                To begin, use the slider to control the number of tracking targets. This will begin to create data flows between a randomly selected sensing satellite and its closest processing satellite. As you move the slider, you will see dashed lines appear in increasing thickness. As the congestion increases, the thickness of the dashed lines will increase.
                            </p>
                            <p>
                                To toggle backpressure, click the "Enable backpressure" button so it turns green. To switch back to open shortest path first routing, click the button again.
                            </p>

                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginBottom: '32px',
                                padding: { xs: '0 8px', sm: '0 16px' },
                                textAlign: isMobile ? 'center' : 'left',
                                paddingTop: { xs: '16px', sm: '32px' },
                            }}
                        >
                            {/* First Image with Caption */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: isMobile ? 'center' : 'flex-start',
                                    margin: isMobile ? '0 auto 16px' : '0 32px 0 0',
                                    maxWidth: isMobile ? '80%' : '40%',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={controls}
                                    alt="Illustration of network challenges in space"
                                    sx={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        boxShadow: 1,
                                    }}
                                />
                                <Typography
                                    variant="caption"
                                    sx={{
                                        marginTop: '8px',
                                        textAlign: isMobile ? 'center' : 'center',
                                        fontSize: { xs: '0.8rem', sm: '1rem' },
                                    }}
                                >
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                maxWidth: isMobile ? '80%' : '100%',
                                margin: isMobile ? '0 auto' : '0',
                                backgroundColor: '#e3f2fd',
                                padding: isMobile ? '12px' : '16px',
                                borderRadius: '8px',
                                border: '1px solid #90caf9',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px', // space between icon and text
                                boxShadow: 1,
                            }}
                        >
                            <InfoIcon
                                sx={{
                                    color: '#1976d2',
                                    fontSize: isMobile ? '1.5rem' : '2rem',
                                    flexShrink: 0, // keeps icon size consistent
                                }}
                            />

                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#1976d2',
                                    fontWeight: '500',
                                    textAlign: 'left',
                                    lineHeight: 1.5,
                                }}
                            >
                                Note: When backpressure is enabled, the link congestion will quickly converge to a balanced state. This may take a few seconds. To see the effects quickly, fast-forward with the <strong>L</strong> key.
                            </Typography>
                        </Box>


                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: isMobile ? '80%' : '100%',
                                margin: isMobile ? '0 auto' : '0',
                                textAlign: 'left',
                                padding: isMobile ? '0 16px' : '0',
                            }}
                        >

                            <p>
                                Our simulated network metrics display the real-time packet-loss, throughput and latency of the data flows. We present the instantaneous averages of these metrics in the <strong>Simulation Network Metrics</strong> tab.

                            </p>
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginBottom: '32px',
                                padding: { xs: '0 8px', sm: '0 16px' },
                                textAlign: isMobile ? 'center' : 'left',
                                paddingTop: { xs: '16px', sm: '32px' },
                            }}
                        >
                            {/* First Image with Caption */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: isMobile ? 'center' : 'flex-start',
                                    margin: isMobile ? '0 auto 16px' : '0 32px 0 0',
                                    maxWidth: isMobile ? '80%' : '40%',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={metrics}
                                    alt="Illustration of network challenges in space"
                                    sx={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        boxShadow: 1,
                                    }}
                                />
                                <Typography
                                    variant="caption"
                                    sx={{
                                        marginTop: '8px',
                                        textAlign: isMobile ? 'center' : 'center',
                                        fontSize: { xs: '0.8rem', sm: '1rem' },
                                    }}
                                >
                                </Typography>
                            </Box>
                        </Box>




                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                gap: 2, // Space between the cards
                                justifyContent: 'center',
                                alignItems: 'stretch',
                                padding: { xs: '16px', sm: '32px' },
                            }}
                        >
                            {/* Packet Loss Card */}
                            <Card
                                sx={{
                                    width: isMobile ? '100%' : '250px',
                                    backgroundColor: '#2d2d2d', // Dark space gray
                                    color: '#ffffff',
                                    boxShadow: 3,
                                    borderRadius: '8px',
                                }}
                            >
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <SignalWifiBadIcon sx={{ fontSize: '3rem', color: '#d32f2f' }} />
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1, color: '#ffffff' }}>
                                        Packet Loss
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 1, color: '#e0e0e0' }}>
                                        Impacts data quality and disrupts communication, making it a key metric to monitor in network performance.                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* Throughput Card */}
                            <Card
                                sx={{
                                    width: isMobile ? '100%' : '250px',
                                    backgroundColor: '#2d2d2d', // Dark space gray
                                    color: '#ffffff',
                                    boxShadow: 3,
                                    borderRadius: '8px',
                                }}
                            >
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <SpeedIcon sx={{ fontSize: '3rem', color: '#1976d2' }} />
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1, color: '#ffffff' }}>
                                        Throughput
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 1, color: '#e0e0e0' }}>
                                        The amount of data that is transferred in a given amount of time.
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* Latency Card */}
                            <Card
                                sx={{
                                    width: isMobile ? '100%' : '250px',
                                    backgroundColor: '#2d2d2d', // Dark space gray
                                    color: '#ffffff',
                                    boxShadow: 3,
                                    borderRadius: '8px',
                                }}
                            >
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <AccessTimeIcon sx={{ fontSize: '3rem', color: '#388e3c' }} />
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1, color: '#ffffff' }}>
                                        Latency
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 1, color: '#e0e0e0' }}>
                                        The time it takes for data to travel from the source to the destination.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>


                        <Typography
                            variant="body1"
                            id="interactive-demo"
                            sx={{
                                maxWidth: isMobile ? '80%' : '100%',
                                margin: isMobile ? '0 auto' : '0',
                                textAlign: 'left',
                                padding: isMobile ? '0 16px' : '0',
                            }}
                        >


                            <p></p>
                            <p></p>
                        </Typography>


                        <Divider
                            sx={{ margin: '16px 0' }} />

                        <Typography
                            variant={isMobile ? 'h5' : 'h6'}
                            component="h3"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                fontSize: isMobile ? '1.5rem' : '2rem',
                                textAlign: isMobile ? 'center' : 'center',
                                maxWidth: isMobile ? '80%' : '100%',
                                background: '-webkit-linear-gradient(45deg, #967bb6ff, #9a77cf)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                margin: isMobile ? '1rem auto' : '2rem auto',
                            }}

                        >
                            Interactive Demonstration
                        </Typography>


                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                gap: 2,
                                padding: { xs: '16px', sm: '32px' },
                            }}
                        >
                            {/* Image with Caption */}


                            <Box
                                sx={{
                                    maxWidth: isMobile ? '90%' : '80%',
                                    margin: '16px auto',
                                    backgroundColor: '#f5f5f5',
                                    padding: { xs: '16px', sm: '24px' },
                                    borderRadius: '8px',
                                    border: '1px solid #ccc',
                                    boxShadow: 2,
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <InfoIcon sx={{ color: '#1976d2', fontSize: '1.8rem' }} />
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                                        Info
                                    </Typography>
                                </Box>

                                <Divider sx={{ my: 1 }} />

                                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6, mt: 1 }}>
                                    <strong>Total number of satellites:</strong>  144 (12 satellites in each of the 12 orbital planes)
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6, mt: 1 }}>
                                    <strong>Number of sensing satellites:</strong>  114
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6, mt: 1 }}>
                                    <strong>Number of processor satellites:</strong>  30
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6, mt: 0.5 }}>
                                    <strong>Targets/Flows:</strong> Size 1.5 kB packets sent at a rate of 10 kBps.
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6, mt: 0.5 }}>
                                    <strong>Link capacity:</strong> 80 kBps
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6, mt: 0.5 }}>
                                    <strong>Simulation Details:</strong> The simulation is done at the ethernet frame level. The topology is a mesh network.
                                </Typography>

                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: isMobile ? 'center' : 'flex-start',
                                    margin: isMobile ? '0 auto 16px' : '0 32px 0 0',
                                    maxWidth: isMobile ? '90%' : '50%', // Adjusts width based on screen size
                                    minWidth: isMobile ? '90%' : '30%', // Adjusts width based on screen size
                                }}
                            >
                                <Box
                                    component="img"
                                    src={legend}
                                    sx={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        boxShadow: 3,
                                    }}
                                />

                            </Box>
                        </Box>


                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: '32px',
                                padding: { xs: '16px', sm: '24px' },
                                textAlign: 'center',
                                paddingTop: { xs: '16px', sm: '32px' },
                                border: '2px solid #2d2d2d',
                                borderRadius: '8px',
                                boxShadow: '0px 4px 12px rgba(45, 45, 45, 0.2)',
                                backgroundColor: '#1f1f1f',
                                maxWidth: '100%',
                                minHeight: '300px',
                                position: 'relative', // Relative positioning for stacking
                                overflow: 'hidden', // Ensure child content stays contained
                            }}
                        >
                            {/* Constant loading background */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    zIndex: 0, // Keep it behind the OpenGL component
                                }}
                            >
                                <CircularProgress
                                    sx={{
                                        color: '#4caf50',
                                        zIndex: 1, // Keep it above the background
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: '#ffffff',
                                        marginTop: '16px',
                                        fontSize: '1.2rem',
                                    }}
                                >
                                    Loading Satellite Visualizer...
                                </Typography>
                            </Box>

                            
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        zIndex: 5, // Overlay the loader
                                    }}
                                >
                                    {openGLComponent}
                                </Box>
                            
                        </Box>

                        {/* <Box
                            sx={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginBottom: '32px',
                                padding: { xs: '16px', sm: '24px' },
                                textAlign: isMobile ? 'center' : 'left',
                                paddingTop: { xs: '16px', sm: '32px' },
                                border: '2px solid #2d2d2d', // Space gray border color
                                borderRadius: '8px',          // Slight rounding for a window effect
                                boxShadow: '0px 4px 12px rgba(45, 45, 45, 0.2)', // Soft shadow
                                backgroundColor: '#1f1f1f',   // Optional background for contrast
                                maxWidth: '100%',
                            }}
                        >
                            {openGLComponent}
                        </Box> */}

                    </Box>
                </Box>

                <Divider />

                <div>
                    {/* <canvas ref={canvasRef} id="canvas" width="800" height="600"></canvas> */}
                    {/* <OpenGLComponent canvas={canvasRef.current} /> */}
                    {/* {openGLComponent} */}
                </div>

                <Divider />
            </Container>

            <Footer />
        </div>
    );
}

export default DemoPage;
