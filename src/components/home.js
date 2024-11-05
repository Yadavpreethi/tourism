import React from 'react';
import './home.css'; 
import videoFile from './herosection.mp4';


function Home() {
  return (
    <div>
     

      {/* Hero Section */} 
      <section className="hero" id="home">
      <div className="hero-container">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
      <h1>Discover the Beauty of India</h1>
          <p>Join us at RangYatra to explore the incredible landscapes, cultures, and traditions of India.</p>
          <a href="#destinations" className="btn">Explore Now</a>

      </div>
    </div>
      </section>
      
      {/* Destinations Section */}
      <section className="destinations" id="destinations">
        <h2>Featured Destinations</h2>

       
      </section>

    
    </div>
  );
}

export default Home;
