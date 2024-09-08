import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin({ onAdminLogin }) {
    const [idNumber, setIdNumber] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onAdminLogin) {
            onAdminLogin(); // Call this after logging in successfully
        }
        navigate('/admin-page');
    };

    return (
        <div className="auth-container-1">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>ID Number:</label>
                    <input
                        type="number"
                        placeholder="Enter your ID Number"
                        value={idNumber}
                        onChange={(e) => setIdNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Go back to <Link to="/">User Login</Link></p>
        </div>
    );
}

export default AdminLogin;
