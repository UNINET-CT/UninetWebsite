import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF', //'#967bb6', // This is just an example of dark lavender
    },
    text: {
      primary: '#FFFFFF', // Dark lavender for text
    }
  },
  typography: {
    fontFamily: 'Lato, Arial, sans-serif',
    h3: {
        background: 'black', //'-webkit-linear-gradient(45deg, #6a4595, #9a77cf)', // Deeper gradient from dark lavender to a lighter shade
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        //textShadow: '0px 3px 6px rgba(106, 69, 149, 0.6)', // Darker and more pronounced shadow
        fontWeight: 'bold',
      },
    h3Purple: {
      background: '-webkit-linear-gradient(45deg, #967bb6ff, #9a77cf)', // Deeper gradient from dark lavender to a lighter shade
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      //textShadow: '0px 3px 6px rgba(106, 69, 149, 0.6)', // Darker and more pronounced shadow
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'bold',
    },
    button: {
        textTransform: 'none',
        fontSize: '1.2rem', // Sets a larger font size for all buttons
        color: 'white',//'#967bb6', // Ensures button text color is dark lavender
        padding: '0rem'
      },
    body1: {
        fontSize:'1.2rem', // Sets a larger font size for all buttons
        color: 'black',

    },
    body2: {
      fontSize: '1.1rem'
    }
  },
});


export default theme;
