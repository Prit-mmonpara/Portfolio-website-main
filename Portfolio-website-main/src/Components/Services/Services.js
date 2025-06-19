import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className='services-container' id="services">
      <div className='services-list-container'>
        {/* Header section */}
        <div className='services-header'>
          <h1>Awesome <span>Services</span></h1>
          <p>
            I provide a range of professional services to help your business grow. With expertise in modern technologies and a passion for creating exceptional digital experiences, I deliver solutions that exceed expectations.
          </p>
          <button className='cta-button'>
            Hire Me <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {/* Services grid */}
        <div className='services-grid'>
          {/* Service Card 1 */}
          <div className='service-card'>
            <div className="service-icon">
              <div className="icon-circle">
                <i className='fa-solid fa-code'></i>
              </div>
            </div>
            <div className='service-content'>
              <h3>Web Development</h3>
              <p>
                Custom websites and web applications built with React, Node.js, and modern frameworks. Responsive designs that work flawlessly across all devices.
              </p>
              <div className="service-features">
                <span><i className="fa-solid fa-check"></i> React & Next.js</span>
                <span><i className="fa-solid fa-check"></i> Node.js & Express</span>
                <span><i className="fa-solid fa-check"></i> Responsive Design</span>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className='service-card'>
            <div className="service-icon">
              <div className="icon-circle">
                <i className='fa-solid fa-desktop'></i>
              </div>
            </div>
            <div className='service-content'>
              <h3>Desktop Applications</h3>
              <p>
                Cross-platform desktop solutions using Electron and modern web technologies. Performance-optimized applications with native-like experiences.
              </p>
              <div className="service-features">
                <span><i className="fa-solid fa-check"></i> Electron.js</span>
                <span><i className="fa-solid fa-check"></i> Cross-platform</span>
                <span><i className="fa-solid fa-check"></i> Native Integration</span>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className='service-card'>
            <div className="service-icon">
              <div className="icon-circle">
                <i className='fa-solid fa-tablet-alt'></i>
              </div>
            </div>
            <div className='service-content'>
              <h3>UI/UX Design</h3>
              <p>
                User-centered design solutions that enhance usability and engagement. Beautiful interfaces with intuitive interactions and seamless workflows.
              </p>
              <div className="service-features">
                <span><i className="fa-solid fa-check"></i> Figma & Adobe XD</span>
                <span><i className="fa-solid fa-check"></i> User Testing</span>
                <span><i className="fa-solid fa-check"></i> Prototyping</span>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Services;