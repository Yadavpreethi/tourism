import React from 'react';
import './navbar.css'; // Import CSS file
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="navbar">
      <div className='left'>
< img src={require('./Rang-Yatra.png')} alt='logo'/>
<div className='tagline'>
<h1>RangYatra</h1>
<p>Unfolding The Beauty of Bharat</p>
</div>
</div>
<Link to="/favorites" className="nav-link">Favorites</Link>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#tours">Tours</a></li>
        <li><a href="#contact">Contact Us</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
