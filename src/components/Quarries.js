import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Quarries.css";

import quarry1 from "../assets/quarries-1.png";
import quarry2 from "../assets/quarries-2.png";
import quarry3 from "../assets/quarries-3.png";

const quarries = [
  {
    title: "Mountain Majesty Quarry",
    description:
      "Nestled in the highlands, this quarry produces premium-grade granite with a rich blend of earthy hues and intricate textures. Known for its resilience, it has been a top choice for luxury projects worldwide.",
    image: quarry1,
  },
  {
    title: "Desert Mirage Quarry",
    description:
      "A vast expanse of fine marble extraction, producing slabs that shimmer with natural mineral patterns and golden veins. The desert heat gives the stones a unique, sun-kissed tone, making them perfect for elegant interiors.",
    image: quarry2,
  },
  {
    title: "Coastal Emerald Quarry",
    description:
      "Famous for its deep green granite with oceanic undertones, extracted from the rocky coastal cliffs. This quarry produces stones that reflect the beauty of nature, making them perfect for both contemporary and classic designs.",
    image: quarry3,
  },
];

const Quarries = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="quarries-section" id="quarries">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Exclusive Quarries
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Discover the origins of our finest granite and marble, crafted by nature and perfected by us.
      </motion.p>

      <div className="quarries-container">
        {quarries.map((quarry, index) => (
          <motion.div
            key={index}
            className="quarry-box"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <motion.div
              className="quarry-image-container"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={quarry.image}
                alt={quarry.title}
                className="quarry-image"
              />
            </motion.div>

            <motion.div
              className="quarry-content"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="quarry-title">{quarry.title}</h3>
              <p className="quarry-description">{quarry.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Quarries;
