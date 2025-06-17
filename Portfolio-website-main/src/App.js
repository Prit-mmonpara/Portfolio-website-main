import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar.js';
import Header from './Components/Header/Header.js';
import CodingProfiles from './Components/CodingProfiles/CodingProfiles.js';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';
import Footer from './Components/Footer/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Apply theme changes to the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-theme' : ''}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <div id="home">
        <Header darkMode={darkMode} />
      </div>

      <div id="about">
        <CodingProfiles darkMode={darkMode} />
      </div>

      <div id="services">
        <Services darkMode={darkMode} />
      </div>

      <div id="portfolio">
        <Works darkMode={darkMode} />
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;