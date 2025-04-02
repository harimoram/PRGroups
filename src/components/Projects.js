import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Projects.css';

import img1 from '../assets/projects-1.png';
import img2 from '../assets/projects-2.png';
import img3 from '../assets/projects-3.png';
import img4 from '../assets/projects-4.png';

const projects = [
  {
    id: 1,
    title: 'Luxury Kitchen Installation',
    subtitle: 'Granite Countertops • Residential',
    location: 'Austin, TX',
    description:
      'This custom kitchen features premium polished granite slabs with waterfall edges and seamless finishes. Installed with integrated lighting for a luxurious touch.',
    image: img1,
  },
  {
    id: 2,
    title: 'Marble Master Bath Suite',
    subtitle: 'Marble Slabs • Luxury Bathroom',
    location: 'Scottsdale, AZ',
    description:
      'We installed Carrara marble wall panels and vanities to create a timeless, clean look for this elite client’s master bathroom.',
    image: img2,
  },
  {
    id: 3,
    title: 'Grand Stone Entrance',
    subtitle: 'Custom Stone Design • Exterior',
    location: 'Beverly Hills, CA',
    description:
      'A bold entryway created with custom-cut stone slabs, giving a royal welcome feel with elegant textures and durability.',
    image: img3,
  },
  {
    id: 4,
    title: 'Outdoor Entertaining Patio',
    subtitle: 'Granite Pavers • Backyard Design',
    location: 'Nashville, TN',
    description:
      'Rugged granite pavers with natural surface finishes were laid for this outdoor entertaining area, offering both function and visual appeal.',
    image: img4,
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="single-project-section" id="projects">
      <h2 className="section-heading" data-aos="fade-up">Our Signature Projects</h2>
      <div className="single-project-list">
        {projects.map((project, i) => (
          <div
            className="single-project-card"
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <img src={project.image} alt={project.title} />
            <div className="overlay-info">
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <span className="project-location">{project.location}</span>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
