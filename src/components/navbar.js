import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <img src={require('./Rang-Yatra.png')} alt="logo" />
        <div className="tagline">
          <h1>RangYatra</h1>
          <p>Unfolding The Beauty of Bharat</p>
        </div>
      </div>

      

      <ul className="nav-links">
     <li><Link to="/favorites" className="nav-link">Favorites</Link></li>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/tours" className="nav-link">Tours</Link></li>
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
