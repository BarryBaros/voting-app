import React from 'react'


const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-title">
            MY VOTE - MY CHOICE
        </div>
        <div className="navbar-links">
            <a href="candidates">Home</a>
            <a href="results">Results</a>
            <a href="about">About</a>
            <span><a href="logout">logout</a></span>
    
        </div>
    </nav>
  )
}

export default Navbar