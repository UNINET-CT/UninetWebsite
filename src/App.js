import React, { useRef, useEffect } from 'react';
import { Box, Typography, ThemeProvider, useMediaQuery } from '@mui/material';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import theme from './theme';
import banner from './background.mp4';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css'; // Import the CSS file
import TechPage from './TechPage';
import DemoPage from './DemoPage';
import OpenGLComponent from './SatelliteVisualizer';


function App() {
  const videoRef = useRef(null);
  const isMobile = useMediaQuery('(max-width:600px)');
  const openGLComponent = <OpenGLComponent />;

  useEffect(() => {
    // Global error handler to suppress specific errors
    window.addEventListener('error', function (event) {
      if (event.message && event.message.includes('redeclaration of let ExceptionInfo')) {
        event.preventDefault(); // Prevents the error popup from showing
        console.warn('Suppressed error: redeclaration of let ExceptionInfo');
      }
    });

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('error', function (event) {
        if (event.message && event.message.includes('redeclaration of let ExceptionInfo')) {
          event.preventDefault();
        }
      });
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="scroll-container">
              <div className="scroll-section">
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
                      /* Define your animation as needed */
                    }
                    .typing-text::before {
                      content: '';
                      display: inline-block;
                      color: #967bb6;
                      animation: typing 10s steps(20) infinite;
                    }
                  `}</style>
              </div>
              <LandingPage />
            </div>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo" element={<DemoPage openGLComponent={openGLComponent} />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
