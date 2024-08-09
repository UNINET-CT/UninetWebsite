import React, { useRef, useEffect } from 'react';
import { Box, Typography, ThemeProvider, useMediaQuery } from '@mui/material';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import theme from './theme';
import banner from './banner2.mp4';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './Footer';
import './styles.css'; // Import the CSS file
import TechPage from './TechPage';


function App() {
  const videoRef = useRef(null);
  const isMobile = useMediaQuery('(max-width:600px)');

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
                    <source src={banner} type="video/mp4" />
                  </video>

                  {/* Text Overlay */}
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
                      <b>Optimizing Satellite Operations for Tomorrow</b>
                    </Typography>
                  </Box>
                </Box>
              </div>
              <LandingPage />
              {/* <Footer /> */}
            </div>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Additional routes as needed */}
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;