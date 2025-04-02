import React from "react";
import Navbar from './components/Navbar';
import BackgroundShapes from "./components/BackgroundShapes";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
/*import Services from "./components/Services";*/
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Quarries from "./components/Quarries";
import Slabs from "./components/Slabs";
import RoughBlocks from "./components/RoughBlocks";
import Monuments from "./components/Monuments";


function App() {
  return (
    <div style={{ marginTop: "10px" }}>  {/* ✅ Prevents overlap */}
      <BackgroundShapes /> {/* This will stay in the background */}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Quarries/>
      <Slabs/>
      <RoughBlocks/>
      <Monuments/>
      <Products />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
