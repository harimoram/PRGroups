import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Import customer images
import customer1 from "../assets/custom-stone-designs.png";
import customer2 from "../assets/custom-stone-designs.png";
import customer3 from "../assets/custom-stone-designs.png";
import customer4 from "../assets/custom-stone-designs.png";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title" data-aos="fade-up">
        What Our Customers Say
      </h2>
      <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
        Hear from our satisfied clients who transformed their spaces with our granite & marble.
      </p>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        speed={1200}
        pagination={{ clickable: true }}
        loop={true}
        className="testimonial-slider"
      >
        {/* Testimonial 1 */}
        <SwiperSlide className="testimonial-card">
          <img src={customer1} alt="Customer 1" />
          <p className="testimonial-text">
            "Absolutely stunning quality! The granite countertops transformed my kitchen. Highly recommended!"
          </p>
          <h4 className="customer-name">- Alex Johnson</h4>
        </SwiperSlide>

        {/* Testimonial 2 */}
        <SwiperSlide className="testimonial-card">
          <img src={customer2} alt="Customer 2" />
          <p className="testimonial-text">
            "Fantastic service and high-quality materials. My bathroom now looks like a 5-star hotel!"
          </p>
          <h4 className="customer-name">- Sarah Williams</h4>
        </SwiperSlide>

        {/* Testimonial 3 */}
        <SwiperSlide className="testimonial-card">
          <img src={customer3} alt="Customer 3" />
          <p className="testimonial-text">
            "Great experience! The installation team was professional, and the results were outstanding."
          </p>
          <h4 className="customer-name">- Daniel Smith</h4>
        </SwiperSlide>

        {/* Testimonial 4 */}
        <SwiperSlide className="testimonial-card">
          <img src={customer4} alt="Customer 4" />
          <p className="testimonial-text">
            "Elegant designs, premium quality! My living room looks absolutely beautiful."
          </p>
          <h4 className="customer-name">- Emily Brown</h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
