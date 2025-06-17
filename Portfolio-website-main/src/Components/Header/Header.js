import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../../assets/profile.png";
import "./Header.css";

const Header = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    // Scroll down below navbar when loaded
    if (typewriterRef.current) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      window.scrollTo(0, navbarHeight);
    }
  }, []);

  return (
    <div className="header-container" id="header">
      <div className="header-content">
        <h1>Hi, I am</h1>
        <h2 className="fullname">Prit Manishbhai Monpara</h2>
        <h2>
          I'm a{" "}
          <span ref={typewriterRef} className="typewriter-wrapper">
            <Typewriter
              words={[
                "Full Stack Developer 💙",
                "Frontend Developer 🚀",
                "Backend Developer 🏆",
                "Competitive Coder 🔥💻"
              ]}
              loop={0} // 0 = infinite
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

        {/* payment links  */}
        <div className="header-payment-container">
          <button>Hire me</button>
          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i>
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
