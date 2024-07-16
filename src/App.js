import React, { useRef, useEffect } from 'react';
import { Box, Typography, ThemeProvider } from '@mui/material';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import theme from './theme';
import banner from './banner2.mp4';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';

function App() {
  const videoRef = useRef(null);

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
            <>
              <Box sx={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                paddingBottom: '2rem'
              }}>
                {/* Fullscreen Video Banner */}
                <video ref={videoRef} autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src={banner} type="video/mp4" />
                  Your browser does not support the video tag.
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
                  zIndex: 2
                }}>
                  <Typography variant="h2" component="h2" sx={{ color: 'white', textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                    <b>Optimizing Satellite Networks for Tomorrow</b>
                  </Typography>
                </Box>
              </Box>
              <LandingPage />
              <Footer />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* You can add more routes as needed */}
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
