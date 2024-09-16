import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
    const [idNumber, setIdNumber] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/voter-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idNumber, password })
            });

            const result = await response.json();

            if (response.ok) {
                setMessage('Login successful!');
                onLogin(); // Handle login logic in the parent component
                navigate('/home');
            } else {
                setMessage(result.message || 'Login failed');
            }
        } catch (error) {
            setMessage('An error occurred');
        }
    };

    return (
        <div className="auth-container-1">
            <h1>MY VOTE - MY VOICE</h1>
            <p className="tag">MAKE YOUR VOICE HEARD</p>

            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>ID Number:</label>
                    <input
                        type="number"
                        placeholder="Enter ID Number"
                        value={idNumber}
                        onChange={(e) => setIdNumber(e.target.value)}
                        required
                    />
                </div>

                <div className="input-container">
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Submit</button>
                {message && <p className={message.includes('successful') ? 'success' : 'error'}>{message}</p>}
            </form>

            <p className="link">Login as <Link to="/admin">Admin</Link></p>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
}

export default Login;
