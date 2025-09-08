import React from 'react';
import './About.css';
import anujgupta from '../../assets/anujgupta.jpeg';

const About = () => {
  const dskills =[
    'Adobe Phtoshop', 'Adobe Illustrator', 'Figma', 'Canva', 'Adobe Premiere Pro',
  ];
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React.js',
    'Node.js', 'Express', 'MongoDB', 'Java', 'Data Structures',
    'Algorithms', 'Responsive Design', 'Power Automate', 'Git'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src={anujgupta}
                alt="Anuj Gupta"
                className="profile-img"
              />
            </div>
          </div>
          
          <div className="about-text">
            <p>
              Hello! I'm Anuj, a passionate frontend developer with a keen eye for design and 
              a love for clean, efficient code. I specialize in creating responsive, 
              user-friendly web applications using modern technologies.
            </p>
            <p>
              With a strong foundation in JavaScript and a growing expertise in the MERN stack, 
              I enjoy turning complex problems into simple, beautiful, and intuitive solutions. 
              My journey in tech is driven by curiosity and a constant desire to learn and grow.
            </p>
            
            <div className="skills-summary">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              ))}
              
              {dskills.map((dskill, index) => (
                <div key={index} className="dskill-tag">
                  {dskill}
                </div>
              ))}  
              
            </div>
            
            <blockquote className="quote">
              "Code is like humor. When you have to explain it, it's bad."
              <cite>- Cory House</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
