import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import './styles.css';

function App() {
    const [isloggedIn, setIsLoggedIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleSignup = () => {
        setIsRegistering(false);
    };
    
}
