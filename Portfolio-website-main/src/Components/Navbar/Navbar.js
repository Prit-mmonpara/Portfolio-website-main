import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleTheme }) => {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const targetPosition = targetSection.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={darkMode ? 'dark' : ''}>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="links">
        <ul>
          <li>
            <a href="#home" onClick={handleSmoothScroll}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={handleSmoothScroll}>About</a>
          </li>
          <li>
            <a href="#services" onClick={handleSmoothScroll}>Services</a>
          </li>
          <li>
            <a href="#portfolio" onClick={handleSmoothScroll}>Portfolio</a>
          </li>
        </ul>
      </div>
      
      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input 
            type="checkbox" 
            id="checkbox" 
            checked={darkMode}
            onChange={toggleTheme}
          />
          <div className="slider round"></div>
        </label>
        <span>{darkMode ? '🌙 Dark' : '☀️ Light'}</span>
      </div>
    </nav>
  );
};

export default Navbar;