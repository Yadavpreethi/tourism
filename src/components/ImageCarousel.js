import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ImageCarousel.css';

function ImageCarousel() {
  const carouselRef = useRef(null);

  const scrollRight = () => {
    if (carouselRef.current) {
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      carouselRef.current.scrollLeft += (carouselRef.current.scrollLeft + 300 >= maxScrollLeft) ? -maxScrollLeft : 300;
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= (carouselRef.current.scrollLeft <= 0) ? -carouselRef.current.scrollWidth : 300;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) carouselRef.current.scrollLeft = 0;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    { src: './tajmahal.webp', alt: 'Taj Mahal', title: 'Taj Mahal' },
    { src: './kerala_backwaters.cms', alt: 'Kerala Backwaters', title: 'Kerala Backwaters' },
    { src: './goa_beach.jpg', alt: 'Goa Beaches', title: 'Goa Beaches' },
    { src: './jaipur.jfif', alt: 'Jaipur Palace', title: 'Jaipur Palace' },
    { src: './mysore.webp', alt: 'Mysore Palace', title: 'Mysore Palace' },
    { src: './amritsar.avif', alt: 'Amritsar', title: 'Amritsar' },
    { src: './hampi.avif', alt: 'Hampi', title: 'Hampi' },
    { src: './varansi.webp', alt: 'Varanasi', title: 'Varanasi' }
  ];

  return (
    <div className="carousel-container">
      <button className="scroll-button left" onClick={scrollLeft}>←</button>

      <div className="image-carousel" ref={carouselRef}>
        <div className="destination-grid">
          {images.map((image, index) => (
            <Link to={`/destination/${encodeURIComponent(image.title)}`} key={index}>
              <div className="destination-item">
                <img src={require(`${image.src}`)} alt={image.alt} />
                <h3>{image.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button className="scroll-button right" onClick={scrollRight}>→</button>
    </div>
  );
}

export default ImageCarousel;
