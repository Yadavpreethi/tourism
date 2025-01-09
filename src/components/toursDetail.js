// Tours.js
import React from 'react';
import { Link } from 'react-router-dom';

function Tours() {
  // List of tours (can be fetched from an API, for now, we'll hardcode it)
  const tours = [
    { id: 1, title: 'Golden Triangle Tour', description: 'A tour covering Delhi, Agra, and Jaipur.' },
    { id: 2, title: 'Kerala Backwaters Tour', description: 'A peaceful houseboat experience in Kerala.' },
    { id: 3, title: 'Goa Beach Tour', description: 'Relax on the beautiful beaches of Goa.' },
    { id: 4, title: 'Mysore and Hampi Tour', description: 'Explore historical sites in Mysore and Hampi.' }
  ];

  return (
    <div className="tours-container">
      <h2>Available Tours</h2>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>
            <Link to={`/tour/${tour.id}`}>
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tours;
