import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/project.scss';

import image1 from "../../public/furniture.png"

const projects = [
  {
    id: 1,
    title: 'PLANTERS',
    description: "FRP and GRC planters merge enduring style with rugged durability. FRP offers sleek, lightweight design, while GRC delivers sturdy, eco-conscious elegance. Both effortlessly elevate indoor or outdoor spaces.",
    name: 'EXPLORE BIG PLANTERS ↗',
    image: "mobile2.png",
    description1: '@STUDIO MASON',
    route: '/test-comp'
  },
  {
    id: 2,
    title: "DESK PLANTERS",
    description: "Transform your workspace with minimalist Concrete Desk Planters that blend function and modern style. Handcrafted from premium concrete, their sleek industrial design elevates any desk or shelf with understated sophistication.",
    name: 'EXPLORE DESK PLANTERS ↗',
    image: 'mobile1.png',
    description1: '@STUDIO MASON',
    route: '/test-comp2'
  },
  {
    id: 3,
    title: "BREEZE BLOCKS",
    description: "Breeze Blocks are timeless and versatile, blending functionality with stunning design. Crafted from durable concrete, their iconic geometric patterns enhance airflow and natural light while adding a bold architectural statement to any interior or exterior space.",
    name: 'EXPLORE BREEZE BLOCKS ↗',
    image: 'mobile5.png',
    description1: '@STUDIO MASON',
    route: '/breezeBlocks'
  },
  {
    id: 4,
    title: 'FURNITURE',
    description: "Polished terrazzo table tops feature customizable colors, chip sizes, and thicknesses (20mm-40mm). Durable, low-maintenance, and reinforced with fiberglass mesh, they resist water, moss, and stains. Available in 1.5' to 8' diameters with customizable MS, SS, or wood bases.",
    name: 'EXPLORE FURNITURE ↗',
    image: 'mobile6.png',
    description1: '@STUDIO MASON',
    route: '/test-comp4'
  },
];

const Project = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = projectRefs.current.indexOf(entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          if (index > 0 ) {
            projectRefs.current[index - 1].classList.add('fade-out'); 
          
          }


        } else {
          entry.target.classList.remove('show');
          if (index > 0) {
            projectRefs.current[index - 1].classList.remove('fade-out');
            
          }
        }
      });
    }, options);

    if (projectRefs.current) {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (projectRefs.current) {
        projectRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <div className="projects-container" id="project">
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => (projectRefs.current[index] = el)}
          className={`project-card bg-${project.id}`} 
        >
        
      
           
        
          <h2 className='title'>{project.title}</h2>
          <p className='des'>{project.description}</p>
          <a href = {project.route}>
          <img src= {project.image}  className='proj-img'/>
          </a>
          <p className='desc-1'>{project.description1}</p>
          <a href={project.route}>
         
          <span className='name'>{project.name}</span>
          </a>
         
         
         
        </div>
      ))}
    </div>
  );
};

export default Project;