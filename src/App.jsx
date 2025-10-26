import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import LikeButton from "./components/LikeButton/LikeButton";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-b from-primary to-background opacity-50"></div>
      </div>
      <div className="relative z-10">
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
      <LikeButton />
    </div>
  );
}

export default App;
