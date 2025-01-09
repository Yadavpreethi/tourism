import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './DestinationDetail.css';

function DestinationDetail() {
  const { title } = useParams();

  const destinationData = {
    "Taj Mahal": {
      description: "The Taj Mahal is an iconic monument located in Agra, India.",
      image: './tajmahal.webp',
    },
    "Kerala Backwaters": {
      description: "Kerala's backwaters are a network of serene waterways.",
      image: './kerala backwaters.cms',
    },
    "Goa Beaches": {
      description: "Goa is known for its beautiful beaches and nightlife.",
      image: './goa beach.jpg',
    },
    "Jaipur Palace": {
      description: "The Jaipur Palace is a historic site in Rajasthan, India.",
      image: './jaipur.jfif',
    },
    "Mysore Palace": {
      description: "The Mysore Palace is an architectural masterpiece.",
      image: './mysore.webp',
    },
    "Amritsar": {
      description: "Amritsar is home to the Golden Temple.",
      image: './amritsar.avif',
    },
    "Hampi": {
      description: "Hampi is known for its ancient ruins and temples.",
      image: './hampi.avif',
    },
    "Varanasi": {
      description: "Varanasi is a spiritual city located on the Ganges River.",
      image: './varansi.webp',
    },
  };

  const destination = destinationData[title];

  if (!destination) {
    return <h1>Destination Not Found</h1>;
  }
  

  return (
    <div
      className="destination-detail"
      style={{
        backgroundImage: `url(${require(`${destination.image}`)})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0.9,
      }}
    >
      <div className="content">
        <h1>{title}</h1>
        <p>{destination.description}</p>
      </div>
    </div>
  );
  function LazyImage({ src, alt }) {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const image = document.getElementById(alt);
        const rect = image.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check visibility on initial render
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [alt]);
  
    return <img id={alt} src={isVisible ? src : ''} alt={alt} />;
  }
}

export default DestinationDetail;
