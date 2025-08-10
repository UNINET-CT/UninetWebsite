import React, { useRef, useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import theme from './theme';
// import banner from './background.mp4';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css'; // Import the CSS file
import TechPage from './TechPage';
import DemoPage from './DemoPage';
import OpenGLComponent from './SatelliteVisualizer';


function App() {
  const videoRef = useRef(null);
  // const isMobile = useMediaQuery('(max-width:600px)');
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
          <Route path="/" element={<LandingPage />} />
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
