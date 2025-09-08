import React from 'react';
import { 
  FaHeart, 
  FaArrowUp, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone 
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>Anuj Gupta</h3>
            <p>Frontend Developer passionate about creating beautiful, responsive, and user-friendly web experiences.</p>
            <div className="footer-social">
              <a href="https://github.com/anujgupta" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/anujgupta" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/anujgupta" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="mailto:anujg6167@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} offset={-80}>
                  About
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500} offset={-80}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} offset={-80}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="experience" smooth={true} duration={500} offset={-80}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} offset={-80}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>Bhopal, India</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <a href="mailto:anujg6167@gmail.com">anujg6167@gmail.com</a>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <a href="tel:+919301454622">+91 93014 54622</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Anuj Gupta. All rights reserved.
            <br />
            Made with <FaHeart className="heart-icon" /> by Anuj Gupta
          </p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
