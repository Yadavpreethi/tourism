import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ImageCarousel from './components/ImageCarousel';
import DestinationDetail from './components/DestinationDetail';
import Footer from './components/footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import FavoritesPage from './components/FavoritesPage'; // Import the Favorites page
import Tours from './components/tours'; // Import the Tours page
import TourDetail from './components/toursDetail'; // Import the TourDetail page


function App() {
  const [favorites, setFavorites] = useState([]); // Manage favorites list
  const [theme, setTheme] = useState('light'); // Manage theme state
  const location = useLocation();

  // Determine if the current route is the home page
  const isHomePage = location.pathname === '/';

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme); // This modifies the <html> tag
  };

  

  // Function to add/remove favorites
  const handleFavoriteToggle = (image) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.title === image.title)
        ? prevFavorites.filter((fav) => fav.title !== image.title) // Remove if already in favorites
        : [...prevFavorites, image] // Add if not in favorites
    );
  };

  return (
    <div className="App">
      {/* Show Navbar */}
      <Navbar />

      {/* Show ThemeSwitcher */}
      <ThemeSwitcher
        toggleTheme={toggleTheme}
        currentTheme={theme}
        positionClass={isHomePage ? 'hero' : 'other-pages'}
      />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <ImageCarousel favorites={favorites} handleFavoriteToggle={handleFavoriteToggle} />
            </>
          }
        />
        {/* Destination Detail Page */}
        <Route path="/destination/:title" element={<DestinationDetail />} />
        {/* Favorites Page */}
        <Route path="/favorites" element={<FavoritesPage favorites={favorites} />} />
        {/* Tours Page */}
        <Route path="/tours" element={<Tours />} />
        {/* Tour Detail Page */}
        <Route path="/tour/:id" element={<TourDetail />} />
      </Routes>

      {/* Show Footer only on the home page */}
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
