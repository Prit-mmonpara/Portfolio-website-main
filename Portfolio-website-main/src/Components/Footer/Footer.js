import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand section */}
          <div className='footer-brand'>
            <div className='footer-logo'>
              <img src={logo} alt="Prit Monpara Logo"/>
            </div>
            <h3>Prit Monpara</h3>
            <p>Full Stack Developer & UI/UX Designer</p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/prit-monpara-aa5164247/" aria-label="LinkedIn">
                <i className='fa-brands fa-linkedin'></i>
              </a>
              <a href="https://github.com/PritMonpara" aria-label="GitHub">
                <i className='fa-brands fa-github'></i>
              </a>
              <a href="https://www.instagram.com/monpara_prit?utm_source=qr&igsh=NGJ0eGk2cjFmNXJ5" aria-label="Instagram">
                <i className='fa-brands fa-instagram'></i>
              </a>
              <a href="https://twitter.com/PritMonpara" aria-label="Twitter">
                <i className='fa-brands fa-twitter'></i>
              </a>
              <a href="https://www.youtube.com/" aria-label="YouTube">
                <i className='fa-brands fa-youtube'></i>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className='footer-section footer-links'>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className='footer-section footer-contact'>
            <h4>Contact Me</h4>
            <ul>
              <li>
                <i className="fa-solid fa-envelope"></i> 
                <span>pmonpara2004@gmail.com</span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i> 
                <span>+91 91067 48736</span>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i> 
                <span>Surat, Gujarat, India</span>
              </li>
              <li>
                <i className="fa-solid fa-clock"></i> 
                <span>Available: Mon-Fri, 9AM - 6PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className='footer-section footer-newsletter'>
            <h4>Stay Updated</h4>
            <p>Subscribe to my newsletter for the latest updates and projects</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button>
                <i className="fa-solid fa-paper-plane"></i>
                Subscribe
              </button>
            </div>
            <div className="footer-cta">
              <p>Have a project in mind?</p>
              <button className="contact-btn">
                Let's Connect <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className='footer-copyright'>
            <p>© 2025 Prit Monpara. All Rights Reserved</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;