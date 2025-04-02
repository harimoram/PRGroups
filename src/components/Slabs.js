import React from "react";
import { motion } from "framer-motion";
import "../styles/Slabs.css";

import slab1 from "../assets/slabs-1.png";
import slab2 from "../assets/slabs-2.png";
import slab3 from "../assets/slabs-3.png";

const slabs = [
  {
    title: "Polished Black Granite",
    description: "Experience the rich, bold contrast of polished black granite, adding timeless elegance to modern spaces.",
    image: slab1,
  },
  {
    title: "Exotic Blue Marble",
    description: "A mesmerizing blue marble slab with natural veins, perfect for luxurious interiors with an artistic touch.",
    image: slab2,
  },
  {
    title: "Desert Sandstone",
    description: "Warm desert hues bring nature's beauty indoors with this sandstone slab, ideal for classic and contemporary spaces.",
    image: slab3,
  },
];

const Slabs = () => {
  return (
    <section className="slabs-section" id="slabs">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Premium Slabs
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Discover our finest slabs, meticulously crafted for elegance and durability.
      </motion.p>

      <div className="slabs-container">
        {slabs.map((slab, index) => (
          <motion.div
            key={index}
            className="slab-box"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="slab-image-container"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={slab.image} alt={slab.title} className="slab-image" />
            </motion.div>

            <motion.div
              className="slab-content"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="slab-title">{slab.title}</h3>
              <p className="slab-description">{slab.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Slabs;
