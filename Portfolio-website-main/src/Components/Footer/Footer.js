import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* Brand section */}
        <div className='footer-brand'>
          <div className='footer-logo'>
            <img src={logo} alt="Prit Monpara Logo"/>
          </div>
          <h3>Prit Monpara</h3>
          <p>Full Stack Developer & UI/UX Designer</p>
        </div>

        {/* Quick links */}
        <div className='footer-links'>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className='footer-contact'>
          <h4>Contact Me</h4>
          <ul>
            <li><i className="fa-solid fa-envelope"></i> pmonpara2004@gmail.com</li>
            <li><i className="fa-solid fa-phone"></i> +91 91067 48736</li>
            <li><i className="fa-solid fa-location-dot"></i> Surat, Gujarat, India</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className='footer-newsletter'>
          <h4>Stay Updated</h4>
          <p>Subscribe to my newsletter for the latest updates</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button><i className="fa-solid fa-paper-plane"></i></button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        {/* Social media */}
        <div className='footer-social'>
          <ul className='footer-social-media'>
            <li>
              <a href="https://www.linkedin.com/in/prit-monpara-aa5164247/" aria-label="LinkedIn">
                <i className='fa-brands fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/PritMonpara" aria-label="GitHub">
                <i className='fa-brands fa-github'></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/monpara_prit?utm_source=qr&igsh=NGJ0eGk2cjFmNXJ5" aria-label="Instagram">
                <i className='fa-brands fa-instagram'></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/PritMonpara" aria-label="Twitter">
                <i className='fa-brands fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" aria-label="YouTube">
                <i className='fa-brands fa-youtube'></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className='footer-copyright'>
          <p>© 2024 Prit Monpara. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;