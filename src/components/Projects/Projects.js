import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import ecommerce from '../../assets/ecommerce.jpg';
import portfolio from '../../assets/portfolio.png';

// If you need to use these as components or icons, you can import them here
// For example, if you're using react-icons:
// import { SiMongodb, SiPython, SiFlask } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'DreamAxis – Career Guidance & Roadmap Platform',
      description: 'Built an AI-powered platform providing personalized career roadmaps and real-time chatbot guidance.',
      image: ecommerce,
      tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Python (AI/ML)'],
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality and real-time updates.',
      image: 'https://via.placeholder.com/600x400/F5F0EB/6C5F5B?text=Task+App',
      tags: ['React', 'Firebase', 'Material-UI', 'Context API'],
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern and responsive portfolio website built with React and styled-components.',
      image: portfolio,
      tags: ['HTML','CSS','JavaScript','React'],
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'AI Resume Analyzer – ATS Optimization Tool',
      description: 'Developed an AI-powered tool that analyzes resumes and evaluates their ATS (Applicant Tracking System)compatibility.',
      image: 'https://via.placeholder.com/600x400/F5F0EB/6C5F5B?text=Weather+App',
      tags: ['Python', 'NLP', 'Flask', 'React'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
