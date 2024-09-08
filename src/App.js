import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminLogin from './components/AdminLogin';
import Results from './components/Results';
import AdminLandingPage from './components/AdminLandingPage';
import Navbar from './Navbar';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true); // Update login state when user logs in
    };

    const handleSignup = () => {
        // Handle signup logic here
    };

    const handleAdminLogin = () => {
        console.log('Admin logged in successfully!');
        setIsAdminLoggedIn(true); // Update admin login state
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Reset login state when user logs out
    };

    const handleAdminLogout = () => {
        setIsAdminLoggedIn(false); // Reset admin login state
    };

    return (
        <Router>
            <div className="App">
                {isLoggedIn && <Navbar onLogout={handleLogout} />}
                
                <Routes>
                    <Route
                        path="/"
                        element={
                            !isLoggedIn ? (
                                <Login onLogin={handleLogin} />
                            ) : (
                                <div>
                                    <h2>Hi, Welcome!</h2>
                                    <button
                                        className="welcome"
                                        onClick={() => setIsLoggedIn(false)}
                                    >
                                        Back to Login
                                    </button>
                                    {/* Home component with candidate list goes here */}
                                </div>
                            )
                        }
                    />
                    <Route path="/candidates" element={<HomePage />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/about" element={<About />} />
                    
                    <Route
                        path="/signup"
                        element={<Signup onSignup={handleSignup} />}
                    />
                    <Route
                        path="/admin"
                        element={<AdminLogin onAdminLogin={handleAdminLogin} />}
                    />
                    <Route
                        path="/admin-page"
                        element={isAdminLoggedIn ? (
                            <AdminLandingPage onAdminLogout={handleAdminLogout} />
                        ) : (
                            <Navigate to="/admin" />
                        )}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
