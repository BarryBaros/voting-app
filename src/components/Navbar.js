import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-title">
        <h1>MY VOTE - MY VOICE</h1>
        <p className="tag">MAKE YOUR VOICE HEARD</p>
        </div>
        <div className="navbar-links">
            <a href="HOME">Home</a>
            <a href="RESULTS">Results</a>
            <a href="ABOUT">About</a>
            <a href="LOGOUT" className='logout'>Logout</a>
    
        </div>
    </nav>
  )
}

export default Navbar