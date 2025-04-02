import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../styles/Hero.css";

import granite1 from "../assets/hero-1.png";
import granite2 from "../assets/hero-2.png";
import granite3 from "../assets/hero-3.png";

const Hero = () => {
  // Smooth scroll handler
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="carousel-frame">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          speed={1200}
          effect="fade"
          pagination={{ clickable: true }}
          loop={true}
          className="hero-carousel"
        >
          {/* Slide 1 */}
          <SwiperSlide className="hero-slide">
            <div className="overlay"></div>
            <img src={granite1} alt="Granite 1" />
            <div className="hero-text">
              <h1>Premium Granites & Marbles</h1>
              <p>Discover the finest selection for your dream home.</p>
              <button className="hero-btn" onClick={() => scrollToSection("products")}>
                Explore Our Collection
              </button>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="hero-slide">
            <div className="overlay"></div>
            <img src={granite2} alt="Granite 2" />
            <div className="hero-text">
              <h1>Luxury Meets Durability</h1>
              <p>Choose from a wide range of high-quality stones.</p>
              <button className="hero-btn" onClick={() => scrollToSection("contact")}>
                Request a Free Quote
              </button>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="hero-slide">
            <div className="overlay"></div>
            <img src={granite3} alt="Granite 3" />
            <div className="hero-text">
              <h1>Transform Your Interiors</h1>
              <p>Elegant designs that redefine beauty.</p>
              <button className="hero-btn" onClick={() => scrollToSection("contact")}>
                Schedule a Visit
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
