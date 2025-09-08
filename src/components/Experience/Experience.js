import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Frontend Developer Intern',
      company: 'IBM',
      period: 'June 2024 - Aug 2024',
      description: [
        'Developed and maintained responsive web applications using React.js',
        'Collaborated with UI/UX designers to implement pixel-perfect interfaces',
        'Optimized application performance and improved load times',
      ]
    },
    {
      id: 2,
      type: 'education',
      title: 'Bachelor of Technology in Information Technology',
      company: 'Samrat Ashok Technological Institute',
      period: '2022 - 2026',
      description: [
        'Pursuing B.Tech in Information Technology at Samrat Ashok Technological Institute',
        'Completed coursework in Front-End Development, Database Management, and Software Engineering',
        'Actively involved in technical clubs and college-level project exhibitions'
      ]
    },
    
    {
      id: 4,
      type: 'education',
      title: 'SSC',
      company: 'Rani Laxmi Bai Public School',
      period: '2019 - 2020',
      description: [
        'Completed Secondary Education (Class 10)',
        'Secured 88% in Class 10 Board Examinations',
        'Awarded for excellence in academics and extracurricular activities'
      ]
    },
    {
      id: 4,
      type: 'Intermediate',
      title: 'High School',
      company: 'Anoop Vishwavidyalaya',
      period: '2021 - 2022',
      description: [
        'Completed Higher Secondary Education (Class 12)',
        'Secured 80% in Class 12 Board Examinations',
        'Awarded for excellence in academics and extracurricular activities'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">My professional journey</p>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="timeline-dot">
                {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <div className="timeline-company">
                    {exp.company} • <span className="timeline-period">{exp.period}</span>
                  </div>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
