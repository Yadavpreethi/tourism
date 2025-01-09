import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.css';

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.body.classList.toggle('dark-theme', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="theme-switcher">
      {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}

export default ThemeSwitcher;
