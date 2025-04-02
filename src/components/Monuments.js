import React from "react";
import { motion } from "framer-motion";
import "../styles/Monuments.css";

import img1 from "../assets/monument-1.png";
import img2 from "../assets/monument-2.png";
import img3 from "../assets/monument-3.png";


const monuments = [
  { image: img1, title: "Sacred Temple Pillars", description: "Crafted from solid granite to honor tradition and spirituality." },
  { image: img2, title: "Royal Dome Canopy", description: "Echoing legacy through majestic marble craftsmanship." },
  { image: img3, title: "Heritage Memorial Slab", description: "Engraved with grace, honoring timeless memories." },
];

const Monuments = () => {
  return (
    <section className="monuments-section" id="monuments">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Signature Monuments
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Elegant monuments carved from premium granite & marble, crafted to preserve history and culture.
      </motion.p>

      <div className="monuments-content">
        <div className="monuments-masonry">
          {monuments.map((monument, index) => (
            <motion.div
              key={index}
              className="monument-float-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="monument-image-wrap">
                <img src={monument.image} alt={monument.title} />
                <div className="monument-hover-overlay">
                  <h3>{monument.title}</h3>
                  <p>{monument.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Monuments;
