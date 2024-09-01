import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminLogin from "./components/AdminLogin";
import './styles.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleSignup = () => {
        setIsRegistering(false);
        setIsLoggedIn(true);
    };

    const handleIsAdmin = () => {
        setIsAdmin(true);
        setIsLoggedIn(true);
        setIsRegistering(false);
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={
                        !isLoggedIn ? (
                            isRegistering ? (
                                <Signup onSignup={handleSignup} />
                            ) : (
                                <Login onLogin={handleLogin} />
                            )
                        ) : (
                            <div>
                                <h2>Hi, Welcome!</h2>
                                <button className="welcome" onClick={() => {
                                    setIsRegistering(false);
                                    setIsLoggedIn(false);
                                }}>
                                    Back to Login
                                </button>
                                {/* Home component with candidate list goes here */}
                            </div>
                        )
                    } />
                    <Route path="/admin" element={<AdminLogin onAdminLogin={handleIsAdmin} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
