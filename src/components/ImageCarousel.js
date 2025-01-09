import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ImageCarousel.css';

function ImageCarousel({ favorites, handleFavoriteToggle }) {
  const carouselRef = useRef(null);
  const [images, setImages] = useState([
    { src: './tajmahal.webp', alt: 'Taj Mahal', title: 'Taj Mahal' },
    { src: './kerala backwaters.cms', alt: 'Kerala Backwaters', title: 'Kerala Backwaters' },
    { src: './goa beach.jpg', alt: 'Goa Beaches', title: 'Goa Beaches' },
    { src: './jaipur.jfif', alt: 'Jaipur Palace', title: 'Jaipur Palace' },
    { src: './mysore.webp', alt: 'Mysore Palace', title: 'Mysore Palace' },
    { src: './amritsar.avif', alt: 'Amritsar', title: 'Amritsar' },
    { src: './hampi.avif', alt: 'Hampi', title: 'Hampi' },
    { src: './varansi.webp', alt: 'Varanasi', title: 'Varanasi' }
  ]);

  useEffect(() => {
    const cloneImages = () => {
      const imagesContainer = carouselRef.current;
      if (!imagesContainer) return; // Check if the ref is valid before accessing it

      const allItems = [...imagesContainer.children]; // Get all current images
      allItems.forEach(item => {
        const clonedItem = item.cloneNode(true); // Clone each image item
        imagesContainer.appendChild(clonedItem); // Append cloned item to the end
      });
    };

    // Clone images when the component mounts
    cloneImages();

    const handleScroll = () => {
      if (!carouselRef.current) return; // Ensure the ref is valid before handling scroll

      const scrollLeft = carouselRef.current.scrollLeft;
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      if (scrollLeft === maxScrollLeft) {
        // When you reach the end, reset scroll position to the start to continue looping
        carouselRef.current.scrollLeft = 0;
      }
    };

    // Add event listener if the carouselRef is valid
    if (carouselRef.current) {
      carouselRef.current.addEventListener('scroll', handleScroll);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [images]);

  return (
    <div className="carousel-container">
      <div className="image-carousel" ref={carouselRef}>
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
