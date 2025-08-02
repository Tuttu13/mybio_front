import {createTheme,ThemeProvider} from '@mui/material/styles';
import About from './components/About';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PersonalProjects from './components/PersonalProjects';
import Projects from './components/Projects';
import Skills from './components/Skills';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF',
    },
    secondary: {
      main: '#66D4D4',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '0.75rem',
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div style={{ marginTop: '64px' }}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <PersonalProjects />
        <Hobbies />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;