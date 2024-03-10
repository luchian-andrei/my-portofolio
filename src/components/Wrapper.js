import Navbar from "./Navbar";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Wrapper() {
  return (
    <div className="Wrapper">
      <Navbar />
      <Welcome />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}
