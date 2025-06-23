import React, { useState } from 'react';
import './Works.css';
import w1 from '../../assets/w1.jpg';
import w2 from '../../assets/w2.jpg';
import w3 from '../../assets/w3.jpg';
import w4 from '../../assets/w4.jpg';
import w5 from '../../assets/w5.jpg';
import w6 from '../../assets/w6.jpg';

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    { id: 1, title: "E-Commerce Platform", category: "web", image: w1, url: "https://ecommerce-platform.com" },
    { id: 2, title: "Web Scraping Website", category: "Web", image: w2, url: "https://web-scraping-omega.vercel.app/" },
    { id: 3, title: "FilmFolio Movie Website", category: "web", image: w3, url: "https://filmfolio-one.vercel.app/" },
    { id: 4, title: "Linked List Visualization", category: "web", image: w4, url: "https://linked-list-visualization-main-qho5.vercel.app/" },
    { id: 5, title: "Typing Master", category: "web", image: w5, url: "https://linked-list-visualization-main-upw3.vercel.app/" },
    { id: 6, title: "Investment Calculator", category: "Web", image: w6, url: "https://investment-calculator-main-lvmo.vercel.app/" },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className='works-container' id="portfolio">
      <div className="works-header">
        <h1>My <span>Recent Works</span></h1>
        <p>Check out my latest projects and creative work</p>
        
        <div className="portfolio-filters">
          <button 
            className={activeFilter === 'all' ? 'active' : ''}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={activeFilter === 'web' ? 'active' : ''}
            onClick={() => setActiveFilter('web')}
          >
            Web Apps
          </button>
          <button 
            className={activeFilter === 'mobile' ? 'active' : ''}
            onClick={() => setActiveFilter('mobile')}
          >
            Mobile Apps
          </button>
        </div>
      </div>

      <div className='works-grid'>
        {console.log(filteredProjects)}
        {filteredProjects.map(project => (
          <div className='works-item' key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              <div className="overlay-content">
                <h3>{project.title}</h3>
                <p>{project.category === 'web' ? 'Web Application' : 'Mobile Application'}</p>
                <div className="project-actions">
                  <button className="view-btn">View Details</button>
                  <button className="demo-btn"><a href={project.url}>Live Demo</a></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="portfolio-cta">
        <p>Want to see more of my work?</p>
        <button>View Full Portfolio</button>
      </div>
    </div>
  )
}

export default Works;