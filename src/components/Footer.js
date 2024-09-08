import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => (
    <footer className="footer">
      <div className="social-media-links">
        <a href="facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="twitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div className="rights-reserved">
        <p>&copy; 2024 All Rights Reserved.</p>
      </div>
    </footer>
  );

  export default Footer;