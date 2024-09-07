import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-title">
            MY VOTE MY CHOICE
        </div>
        <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/results">Results</Link>
            <Link to="/about">About</Link>
    
        </div>
    </nav>
  );
};

export default Navbar