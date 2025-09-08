import React from 'react';
import './Hero.css';

// Function to handle resume download
const handleDownloadResume = () => {
  // Create a temporary anchor element
  const link = document.createElement('a');
  // Replace 'resume.pdf' with your actual resume file name
  link.href = '/anujgupta.pdf';
  // This makes the browser download the file with the specified name
  link.download = 'Anuj_Gupta_Resume.pdf';
  // Append to the document, trigger the click, and then remove it
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1 className="hero-title">Anuj Gupta</h1>
        <p className="hero-subtitle">Frontend Developer | MERN Stack Enthusiast | Java DSA Explorer</p>
        <p className="hero-tagline">Transforming ideas into elegant, efficient, and accessible web experiences</p>
        <div className="hero-buttons">
          <button onClick={handleDownloadResume} className="btn btn-primary">Download Resume</button>
          <a href="#contact" className="btn btn-outline">Let's Connect</a>
        </div>
      </div>
      
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;
