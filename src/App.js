import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ImageCarousel from './components/ImageCarousel';
import DestinationDetail from './components/DestinationDetail';
import Footer from './components/footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import FavoritesPage from './components/FavoritesPage'; // Import the Favorites page

function App() {
  const [favorites, setFavorites] = useState([]); // Manage favorites list
  const location = useLocation();

  // Determine if the current route is the home page
  const isHomePage = location.pathname === '/';

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
      {/* Show Navbar only on the home page */}
      {isHomePage && <Navbar />}

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
      </Routes>
      <ThemeSwitcher />

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
