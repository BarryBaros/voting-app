import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import './styles.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleSignup = () => {
        setIsRegistering(false);
        handleLogin();
    };

    return (
        <div className="App">
            {!isLoggedIn ? (
                isRegistering ? (
                    <Signup onSignup={handleSignup} />
                ) : (
                    <Login onLogin={() => setIsRegistering(true)} />
                )
            ) : (
                <div>
                    <h2>Welcome to the Voting App!</h2>

                    {/* Home component with candidate list goes here */}

                </div>
            )}
        </div>
    );
}

export default App;
