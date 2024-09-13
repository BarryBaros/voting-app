import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Results from './components/Results';
import About from './components/About';
import AdminLogin from './components/AdminLogin';
import AdminLandingPage from './components/AdminLandingPage';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true); // Example login state update
    };

    const handleSignup = (userData) => {
        console.log('User data:', userData);
        // Handle the signup logic, e.g., send data to API
    };

    const handleAdminLogin = () => {
        setIsLoggedIn(true); // Example admin login state update
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Reset login state
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
                    <Route path="/about" element={isLoggedIn ? <About />: <Navigate to="/" />} />
                    <Route
                        path="/signup"
                        element={<Signup onSignup={handleSignup} />}
                    />
                    <Route path="/admin" element={<AdminLogin onAdminLogin={handleAdminLogin} />} />
                    <Route path="/admin-page" element={isLoggedIn ? <AdminLandingPage /> : <Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
