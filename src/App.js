import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminLogin from './components/AdminLogin';
import Results from './components/Results';
import AdminLandingPage from './components/AdminLandingPage';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true); // Update login state when user logs in
    };

    const handleAdminLogin = () => {
        console.log('Admin logged in successfully!');
        setIsLoggedIn(true); // Example: set admin login state
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Reset login state when user logs out
    };

    return (
        <Router>
            <div className="App">
                {isLoggedIn && <Navbar onLogout={handleLogout} />}

                <Routes>
                    <Route
                        path="/"
                        element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}
                    />
                    <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
                    <Route path="/results" element={isLoggedIn ? <Results /> : <Navigate to="/" />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/admin"
                        element={<AdminLogin onAdminLogin={handleAdminLogin} />}
                    />
                    <Route path="/admin-page" element={isLoggedIn ? <AdminLandingPage /> : <Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
