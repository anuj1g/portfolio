import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaJava, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiTypescript, SiPython, SiFlask } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 95 },
    { name: 'JavaScript', icon: <FaJs />, level: 90 },
    { name: 'React.js', icon: <FaReact />, level: 85 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
    { name: 'Express.js', icon: <SiExpress />, level: 78 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
    { name: 'Java', icon: <FaJava />, level: 82 },
    { name: 'Data Structures', icon: <FaDatabase />, level: 85 },
    { name: 'Algorithms', icon: <FaDatabase />, level: 83 },
    { name: 'Git', icon: <FaGitAlt />, level: 80 }

  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-header">
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-progress">
                <div 
                  className="skill-progress-bar" 
                  style={{ width: `${skill.level}%` }}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
