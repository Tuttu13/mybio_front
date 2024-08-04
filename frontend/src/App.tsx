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
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
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