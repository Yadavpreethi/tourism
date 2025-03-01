import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/navbar';
import Home from './components/home';
import ImageCarousel from './components/ImageCarousel';
import DestinationDetail from './components/DestinationDetail';
import Footer from './components/footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import FavoritesPage from './components/FavoritesPage';
import Tours from './components/tours';
import TourDetail from './components/toursDetail';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    }
  }, [location]);

  return null;
}

function App() {
  const [favorites, setFavorites] = useState([]);
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleFavoriteToggle = (image) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.title === image.title)
        ? prevFavorites.filter((fav) => fav.title !== image.title)
        : [...prevFavorites, image]
    );
  };

  return (
    <div className="App">
      <ScrollToSection />
      
      {/* Animated Navbar */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <Navbar />
      </motion.div>

      <ThemeSwitcher toggleTheme={toggleTheme} currentTheme={theme} positionClass={isHomePage ? 'hero' : 'other-pages'} />

      {/* Animated Page Transitions */}
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <ImageCarousel favorites={favorites} handleFavoriteToggle={handleFavoriteToggle} />
              </>
            }
          />
          <Route path="/destination/:title" element={<DestinationDetail />} />
          <Route path="/favorites" element={<FavoritesPage favorites={favorites} />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tour/:id" element={<TourDetail />} />
        </Routes>
      </motion.div>

      {isHomePage && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
