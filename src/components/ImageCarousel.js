import React from 'react';
import { Link } from 'react-router-dom';
import './ImageCarousel.css';

function ImageCarousel({ favorites, handleFavoriteToggle }) {
  const images = [
    { src: './tajmahal.webp', alt: 'Taj Mahal', title: 'Taj Mahal' },
    { src: './kerala backwaters.cms', alt: 'Kerala Backwaters', title: 'Kerala Backwaters' },
    { src: './goa beach.jpg', alt: 'Goa Beaches', title: 'Goa Beaches' },
    { src: './jaipur.jfif', alt: 'Jaipur Palace', title: 'Jaipur Palace' },
    { src: './mysore.webp', alt: 'Mysore Palace', title: 'Mysore Palace' },
    { src: './amritsar.avif', alt: 'Amritsar', title: 'Amritsar' },
    { src: './hampi.avif', alt: 'Hampi', title: 'Hampi' },
    { src: './varansi.webp', alt: 'Varanasi', title: 'Varanasi' }
  ];

  return (
    <div className="carousel-container">
      <div className="image-carousel">
        <div className="destination-grid">
          {images.map((image, index) => (
            <div key={index} className="destination-item">
              <Link to={`/destination/${encodeURIComponent(image.title)}`}>
                <img src={require(`${image.src}`)} alt={image.alt} />
                <h3>{image.title}</h3>
              </Link>
              <button
                onClick={() => handleFavoriteToggle(image)} // Toggle favorite
                style={{
                  backgroundColor: favorites.some((fav) => fav.title === image.title)
                    ? 'yellow'
                    : 'transparent'
                }}
              >
                {favorites.some((fav) => fav.title === image.title) ? '❤️' : '🤍'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
