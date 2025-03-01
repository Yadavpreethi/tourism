import React from 'react';
import './parallax.css';

function Parallax({ image, children }) {
  return (
    <div className="parallax" style={{ backgroundImage: `url(${image})` }}>
      <div className="parallax-content">
        {children}
      </div>
    </div>
  );
}

export default Parallax;