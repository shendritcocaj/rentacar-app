import "./App.css";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import Cars from "./components/Cars/Cars";
import Questions from "./components/Questions/Questions";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonials/Testimonial";
import Footer from "./components/Footer/Footer";

function Mainpage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cars />
      <Questions />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Mainpage;
