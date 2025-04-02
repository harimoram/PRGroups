import React from "react";
import "../styles/Services.css";
import service1 from "../assets/custom-stone-designs.png";
import service2 from "../assets/granite-countertops.png";
import service3 from "../assets/granite-countertops.png";
import service4 from "../assets/custom-stone-designs.png";

const Services = () => {
  return (
    <section className="services-section" id="services">
      {/* Title & Subtitle */}
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        We provide premium granite & marble services with unmatched quality and precision.
      </p>

      {/* Services Grid */}
      <div className="services-container">
        {/* Service 1 - Custom Stone Cutting */}
        <div className="service-card">
          <img src={service1} alt="Custom Stone Cutting" />
          <div className="service-info">
            <h3>Custom Stone Cutting</h3>
            <p>Precision-cut stones tailored to your needs for any project.</p>
          </div>
        </div>

        {/* Service 2 - Installation & Polishing */}
        <div className="service-card">
          <img src={service2} alt="Installation & Polishing" />
          <div className="service-info">
            <h3>Installation & Polishing</h3>
            <p>Seamless installation and polishing for a flawless finish.</p>
          </div>
        </div>

        {/* Service 3 - Wholesale Supply */}
        <div className="service-card">
          <img src={service3} alt="Wholesale Supply" />
          <div className="service-info">
            <h3>Wholesale Supply</h3>
            <p>Bulk supply of high-quality granite & marble at competitive prices.</p>
          </div>
        </div>

        {/* Service 4 - Restoration & Maintenance */}
        <div className="service-card">
          <img src={service4} alt="Restoration & Maintenance" />
          <div className="service-info">
            <h3>Restoration & Maintenance</h3>
            <p>Keep your surfaces shining with expert maintenance and repair services.</p>
          </div>
        </div>
      </div>

      {/* Get a Quote Button */}
      <button className="quote-btn">Get a Quote</button>
    </section>
  );
};

export default Services;
