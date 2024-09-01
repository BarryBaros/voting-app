import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
                <switch>
                    <Route exact path="/">
                    {!isLoggedIn ? (
                        isRegistering? (
                            <Signup onSignup={handleSignup} />
                        ): (
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
                            
                            {/*Home:*/}
                        </div>
                    )}
                    </Route>

                    <Route path="/admin">
                    <AdminLogin onAdminLogin={handleIsAdmin} />
                    </Route>
                </switch>
            </div>
        </Router>
    );
}

export default App;
