import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Footer.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import footerBg from "../assets/custom-stone-designs.png";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer
      className="footer-section"
      id="contact"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="footer-overlay">
        <div className="footer-container">
          {/* Contact Form */}
          <div className="contact-form" data-aos="fade-right">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Footer Info */}
          <div className="footer-info" data-aos="fade-left">
            <h2>PR Granites & Marbles</h2>
            <p>
              Premium quality granite & marble solutions for your dream spaces.
            </p>
            <div className="footer-contacts">
              <p>
                <FaPhone /> +1 234 567 890
              </p>
              <p>
                <FaEnvelope /> info@prgranites.com
              </p>
              <p>
                <FaMapMarkerAlt /> 123 Stone Street, California, USA
              </p>
            </div>
            <div className="footer-socials">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PR Granites & Marbles. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
