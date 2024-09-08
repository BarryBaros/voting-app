import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout(); 
      navigate('/');  
    }
  };

  return (
    <nav className="navbar">
        <div className="navbar-title">
            <h1>MY VOTE MY CHOICE</h1>
            <p className="tag">MAKE YOUR VOICE HEARD</p>
        </div>
        <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/results">Results</Link>
            <Link to="/about">About</Link>
    
        </div>
    </nav>
  );
};

export default Navbar;
