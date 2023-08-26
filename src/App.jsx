import "./App.css";
import Contact from "./Components/Contact/Contact";
import FirstBanner from "./Components/FirstBanner/FirstBanner";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import Projects from "./Projects/Projects";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <FirstBanner />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
