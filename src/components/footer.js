import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div>
        {/* Footer */}
        <footer className="footer" id="contact">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Email: info@rangyatra.com</p>
          <p>Phone: +91 1234567890</p>
          <p>Follow us on social media!</p>
          <div className="social-icons">
            <a href="#"> <img src={require('./facebook.png')} alt='facebook'/>
            </a>
            <a href="#">          <img src={require('./insta.avif')} alt='insta'/>
            </a>
            <a href="#"><img src={require('./twitter.jfif')} alt='twitter'/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
