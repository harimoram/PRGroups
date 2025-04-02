import React, { useState, useEffect } from "react";
import "../styles/Gallery.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../assets/gallery-1.png";
import img2 from "../assets/gallery-2.png";
import img3 from "../assets/gallery-3.png";
import img4 from "../assets/gallery-4.png";

const images = [img1, img2, img3, img4];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="section-title" data-aos="fade-up">Granite & Marble Showcase</h2>
      <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
        Hand-picked slabs and designs that speak luxury and elegance.
      </p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-tile"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <img src={img} alt={`Granite ${index + 1}`} />
            <div className="tile-overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </section>
  );
};

export default Gallery;
