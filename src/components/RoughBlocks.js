import React from "react";
import { motion } from "framer-motion";
import "../styles/RoughBlocks.css";

// ✅ Import Rough Block Images
import block1 from "../assets/roughblock-1.png";
import block2 from "../assets/roughblock-2.png";
import block3 from "../assets/roughblock-3.png";
import block4 from "../assets/roughblock-4.png";

const roughBlocks = [
  {
    title: "Majestic Black Granite",
    description: "A stunning black granite rough block, known for its durability and timeless elegance.",
    image: block1,
  },
  {
    title: "Royal Blue Marble",
    description: "This rare blue marble block offers a unique aesthetic with deep natural veins.",
    image: block2,
  },
  {
    title: "Golden Desert Sandstone",
    description: "A beautifully textured sandstone block that enhances architectural excellence.",
    image: block3,
  },
  {
    title: "Emerald Green Quartzite",
    description: "Deep green quartzite blocks with unique patterns, ideal for high-end projects.",
    image: block4,
  }
];

const RoughBlocks = () => {
  return (
    <section className="rough-blocks-section" id="rough-blocks">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Premium Rough Blocks
      </motion.h2>

      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Explore our finest selection of high-quality rough blocks, sourced for excellence.
      </motion.p>

      <div className="rough-blocks-container">
        {roughBlocks.map((block, index) => (
          <motion.div 
            key={index} 
            className="block-card"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={block.image} 
              alt={block.title} 
              className="block-image"
            />
            <div className="block-content">
              <h3 className="block-title">{block.title}</h3>
              <p className="block-description">{block.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RoughBlocks;
