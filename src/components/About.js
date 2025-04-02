import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";
import aboutImage from "../assets/about-1.png"; // Update path if needed

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // 🔗 Scroll to Products Section
  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2 className="about-title" data-aos="fade-up">
          About PR Granites & Marbles
        </h2>
        <p className="about-subtitle" data-aos="fade-up" data-aos-delay="150">
          Discover the finest collection of natural stones, crafted for excellence.
        </p>

        <div className="about-flex">
          {/* Left Text */}
          <div className="about-text" data-aos="fade-right">
            <p>
              At PR Granites & Marbles, we pride ourselves on offering a luxurious collection
              of granites and marbles sourced from the finest quarries. Our materials guarantee
              elegance, durability, and timeless beauty.
            </p>
            <p>
              From residential to commercial spaces, we provide stunning surfaces that
              transform interiors and exteriors alike.
            </p>
            <button
              className="about-btn"
              data-aos="zoom-in-up"
              data-aos-delay="300"
              onClick={scrollToProducts}
            >
              Discover More
            </button>
          </div>

          {/* Right Image */}
          <div className="about-image" data-aos="fade-left">
            <img src={aboutImage} alt="About PR Granites & Marbles" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
