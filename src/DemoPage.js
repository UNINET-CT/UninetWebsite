import React, { useRef, useEffect } from 'react';
import { Box, Typography, Container, useMediaQuery, Divider } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import OpenGLComponent from './SatelliteVisualizer';

function DemoPage({ openGLComponent }) {
    const isMobile = useMediaQuery('(max-width:600px)');
    const canvasRef = useRef(null);

    return (
        <div>
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
                            variant={isMobile ? 'h4' : 'h3'}
                            component="h2"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                fontSize: isMobile ? '1.8rem' : '2.5rem',
                                textAlign: isMobile ? 'center' : 'left',
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
                            Uninet's low-complexity backpressure-style algorithms tackle the challenge of space communication by optimizing throughput and minimizing latency to ensure real-time data transfer and mission success.
                            <p>Our algorithms effectively balance network demands, a crucial aspect for the growing data needs of space missions.</p>
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
                            We present a demonstration of backpressure-based routing in a LEO constellation environment. 
                            The goal of this demonstration is to highlight the load-balancing characteristics of backpressure compared to shortest path routing. 
                        </Typography>
                    </Box>
                </Box>

                <Divider />

                <div>
                    {/* <canvas ref={canvasRef} id="canvas" width="800" height="600"></canvas> */}
                    {/* <OpenGLComponent canvas={canvasRef.current} /> */}
                    {openGLComponent}
                </div>

                <Divider />
            </Container>

            <Footer />
        </div>
    );
}

export default DemoPage;
