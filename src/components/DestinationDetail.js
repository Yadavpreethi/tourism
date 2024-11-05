import React from 'react';
import { useParams } from 'react-router-dom';
import './DestinationDetail.css';

function DestinationDetail() {
    const { name } = useParams();

    // Set the background image based on the destination name
    const getBackgroundImage = () => {
        switch (name.toLowerCase()) {
            case 'taj mahal':
                return require('./tajmahal.webp'); // Replace with the correct path if needed
            case 'jaipur palace':
                return require('./jaipur.jfif'); // Replace with the correct path if needed
            case 'kerala backwaters':
                return require('./kerala backwaters.cms'); // Replace with the correct path if needed
            // Add more cases for other destinations
            default:
                return require('./jaipur.jfif'); // A default image if the destination is not found
        }
    };

    const backgroundStyle = {
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust as needed
        color: 'white', // Text color on the background
        padding: '20px', // Adjust as needed
    };

    return (
        <div style={backgroundStyle}>
            <h1>{name}</h1>
            <p>Information about {name}...</p>
            {/* Add more content as needed */}
        </div>
    );
}

export default DestinationDetail;
