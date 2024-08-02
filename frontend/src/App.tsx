import About from "./components/About";
// メール機能
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PersonalProjects from "./components/PersonalProjects";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "64px" }}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <PersonalProjects />
        <Hobbies />
        <Footer />
      </div>
    </div>
  );
}

export default App;
