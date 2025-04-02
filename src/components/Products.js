import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Products.css";
import granite1 from "../assets/product-1.png";
import granite2 from "../assets/product-2.png";
import granite3 from "../assets/product-3.png";

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 200,
      easing: "ease-in-out",
    });
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="products-section" id="products">
      <h2 className="section-title" data-aos="fade-up">Our Premium Granite & Marble Collection</h2>
      <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Explore our exquisite range of high-quality stones that redefine elegance.
      </p>

      <div className="products-container">
        <div className="product-card" data-aos="zoom-in" data-aos-delay="200">
          <img src={granite1} alt="Granite 1" />
          <div className="product-info">
            <h3>Luxury Black Granite</h3>
            <p>Perfect for modern interiors with a rich & elegant look.</p>
            <button className="product-btn" onClick={scrollToContact}>Order Now</button>
          </div>
        </div>

        <div className="product-card" data-aos="zoom-in" data-aos-delay="300">
          <img src={granite2} alt="Granite 2" />
          <div className="product-info">
            <h3>Royal White Marble</h3>
            <p>A timeless beauty that enhances your spaces with purity.</p>
            <button className="product-btn" onClick={scrollToContact}>Order Now</button>
          </div>
        </div>

        <div className="product-card" data-aos="zoom-in" data-aos-delay="400">
          <img src={granite3} alt="Granite 3" />
          <div className="product-info">
            <h3>Exotic Gold Granite</h3>
            <p>Add warmth & luxury to your interiors with this premium stone.</p>
            <button className="product-btn" onClick={scrollToContact}>Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
