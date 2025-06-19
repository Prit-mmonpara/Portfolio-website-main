import React, { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../../assets/profile.png";
import "./Header.css";

const Header = ({ darkMode }) => {
  const typewriterRef = useRef(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (typewriterRef.current) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      window.scrollTo(0, navbarHeight);
    }
    
    // Initialize particles for animated background
    const newParticles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 15}s`,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className={`header-container ${darkMode ? "dark-theme" : "light-theme"}`} id="header">
      {/* Animated particles */}
      <div className="particles-container">
        {particles.map(particle => (
          <div 
            key={particle.id}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: particle.top,
              left: particle.left,
              animationDelay: particle.animationDelay,
              opacity: particle.opacity,
              backgroundColor: darkMode 
                ? 'rgba(200, 220, 255, 0.5)' 
                : 'rgba(100, 120, 220, 0.4)'
            }}
          />
        ))}
      </div>
      
      <div className="header-content">
        <h1>Hi, I am</h1>
        <h2 className="fullname">Prit Manishbhai Monpara</h2>
        <h2>
          I'm a{" "}
          <span ref={typewriterRef} className="typewriter-wrapper">
            <Typewriter
              words={[
                "Full Stack Developer 💙",
                "Backend Developer 🏆",
                "Frontend Developer 🚀",
                "Competitive Coder 🔥💻🏆",
                "Programming Enthusiast 💻🤖",
                "Open Source Contributor 🌍",
                "Tech Blogger ✍️",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h2>
        <p>
          A passionate developer specializing in creating responsive,
          high-performance web applications with modern technologies.
          I transform ideas into reality through clean code and intuitive design.
        </p>

        <div className="header-payment-container">
          <button className="hire-btn">
            Hire me
          </button>
          <div className="payment-icons">
            <i className="fa-brands fa-paypal"></i>
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-amex"></i>
          </div>
        </div>
      </div>

      <div className="profile-img-container">
        <img src={profileImg} alt="Prit Monpara" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;