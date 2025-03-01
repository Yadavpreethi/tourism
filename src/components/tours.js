import React from 'react';
import { Link } from 'react-router-dom';
import Parallax from './parallax'; // Ensure the import path is correct
import './tours.css'; // Add styling for the tours page

function Tours() {
  const tours = [
    { id: 1, title: 'Golden Triangle Tour', description: 'A tour covering Delhi, Agra, and Jaipur.' },
    { id: 2, title: 'Kerala Backwaters Tour', description: 'A peaceful houseboat experience in Kerala.' },
    { id: 3, title: 'Goa Beach Tour', description: 'Relax on the beautiful beaches of Goa.' },
    { id: 4, title: 'Mysore and Hampi Tour', description: 'Explore historical sites in Mysore and Hampi.' },
  ];

  return (
    <>
      {/* Parallax Section */}
      <Parallax image={require('./parallaxImg.jpg')}>
        <h1 className="parallax-heading">Explore Incredible Tours</h1>
      </Parallax>

      {/* Tour Information */}
      <div className="tours-container">
        <h2 className="tours-heading">Our Tour Packages</h2>
        <p className="tours-subheading">Discover amazing destinations across India!</p>
        <ul className="tours-list">
          {tours.map((tour) => (
            <li key={tour.id} className="tour-item">
              <Link to={`/tour/${tour.id}`} className="tour-link">
                <h3>{tour.title}</h3>
                <p>{tour.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Tours;