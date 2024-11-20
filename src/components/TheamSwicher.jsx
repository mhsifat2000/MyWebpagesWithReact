import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import classes from '../styles/TheamSwich.module.css';

function TheamSwicher() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for stored theme on initial load
    const storedTheme = localStorage.getItem('darkMode');
    return storedTheme === 'true'; // Initial state based on local storage
  });

  useEffect(() => {
    // Apply theme to body class
    if (isDarkMode) {
      document.body.classList.add('darkmode');
    } else {
      document.body.classList.remove('darkmode');
    }
    localStorage.setItem('darkMode', isDarkMode.toString()); // Save theme preference
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <input
      className={classes.l}
      type="checkbox"
      onChange={toggleTheme}
      checked={isDarkMode}
    />
  );
}

export default TheamSwicher;