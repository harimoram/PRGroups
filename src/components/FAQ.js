import React, { useEffect, useState } from "react";
import "../styles/FAQ.css";
import { FaChevronDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "What types of granite & marble do you offer?",
    answer:
      "We offer a wide range of high-quality granite & marble, including luxury black granite, royal white marble, and exotic gold stone.",
  },
  {
    question: "Do you provide custom stone cutting services?",
    answer:
      "Yes! We offer precision stone cutting tailored to your project’s needs, including countertops, flooring, and decorative installations.",
  },
  {
    question: "How long does the installation process take?",
    answer:
      "Our professional team ensures a seamless installation within 3-5 days, depending on the project size and complexity.",
  },
  {
    question: "Do you offer wholesale supply for bulk orders?",
    answer:
      "Absolutely! We provide bulk orders for commercial projects with competitive pricing and premium quality materials.",
  },
  {
    question: "How do I maintain and clean granite surfaces?",
    answer:
      "Simply wipe with a damp cloth and mild detergent. Avoid acidic cleaners to preserve the natural shine and durability.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <h2 className="section-title" data-aos="fade-up">
        Frequently Asked Questions
      </h2>
      <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
        Find answers to common questions about our products and services.
      </p>

      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <FaChevronDown
                className={`faq-icon ${activeIndex === index ? "rotate" : ""}`}
              />
            </div>
            <div
              className="faq-answer"
              style={{
                display: activeIndex === index ? "block" : "none",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
