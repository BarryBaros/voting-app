import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import Login from './components/Login';
import Signup from './components/Signup';
import AdminLogin from './components/AdminLogin';
import './styles.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleSignup = (userData) => {
        console.log('User signed up:', userData);
    };

    const handleIsAdmin = () => {
        console.log('Admin logged in');
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        exact
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
                    <Route
                        path="/signup"
                        element={<Signup onSignup={handleSignup} />}
                    />
                    <Route
                        path="/admin"
                        element={<AdminLogin onAdminLogin={handleIsAdmin} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
