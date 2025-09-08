import React, { useState, useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace these with your EmailJS service ID, template ID, and public key
    const serviceID = 'service_v521o3c';
    const templateID = 'template_jy5de9a';
    const publicKey = 'BFPke6WjxmVX0G151';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent successfully! I\'ll get back to you soon.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSubmitStatus({
          success: false,
          message: 'Failed to send message. Please try again later.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
        // Clear status message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ success: null, message: '' });
        }, 5000);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Feel free to reach out for collaborations or just a friendly hello</p>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>I'm interested in freelance opportunities, especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me using the form.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Bhopal, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:anuj@example.com">anujg6167@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <a href="tel:+919876543210">+91 93014 54622</a>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/anujgupta" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/anujgupta" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/anujgupta" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
          
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                required
              ></textarea>
            </div>
            
            {submitStatus.message && (
              <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    
  </section>
);
};

export default Contact;
