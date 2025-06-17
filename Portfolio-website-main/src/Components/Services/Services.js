import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className='services-container' id="services">
        <div className='services-list-container'>
            {/* desc */}
            <div className='services-desc-container'>
                <h1>Awesome <span>Services</span></h1>
                <p>
                I provide a range of professional services to help your business grow. With expertise in modern technologies and a passion for creating exceptional digital experiences, I deliver solutions that exceed expectations.
                </p>
                <button>Hire Me</button>
            </div>

            {/* items */}
            <div className='services-item-container'>
                <div className='services-item'>
                    <div className="service-icon">
                      <i className='fa-solid fa-code'></i>
                    </div>
                    <div className='services-desc'>
                        <h3>Web Development</h3>
                        <p>
                        Custom websites and web applications built with React, Node.js, and modern frameworks. Responsive designs that work flawlessly across all devices.
                        </p>
                    </div>
                </div>
                <div className='services-item'>
                    <div className="service-icon">
                      <i className='fa-solid fa-desktop'></i>
                    </div>
                    <div className='services-desc'>
                        <h3>Desktop Applications</h3>
                        <p>
                        Cross-platform desktop solutions using Electron and modern web technologies. Performance-optimized applications with native-like experiences.
                        </p>
                    </div>
                </div>
                <div className='services-item'>
                    <div className="service-icon">
                      <i className='fa-solid fa-tablet-alt'></i>
                    </div>
                    <div className='services-desc'>
                        <h3>UI/UX Design</h3>
                        <p>
                        User-centered design solutions that enhance usability and engagement. Beautiful interfaces with intuitive interactions and seamless workflows.
                        </p>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Services;