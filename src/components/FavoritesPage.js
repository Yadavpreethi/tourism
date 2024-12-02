import React from 'react';
import './FavouritesPage.css';

function FavoritesPage({ favorites }) {
  return (
    <div className="favorites-page">
      <h1>Your Favorite Destinations</h1>
      {favorites.length === 0 ? (
        <p>No favorites added yet. Go back and explore!</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((item, index) => (
            <div key={index} className="favorite-item">
              <img src={require(`${item.src}`)} alt={item.alt} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
