import React, {useState} from "react";

function Login({ onLogin }) {
    const [idNumber, setidNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(); //perfom login here
    };

    return (
        <div className="auth-container">
            <h1>MY VOTE - MY VOICE</h1>
            <p className="tag">MAKE YOUR VOICE HEARD</p>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>ID Number:</label>
                    <input
                    type="text"
                    placeholder="Eneter ID Number"
                    value={idNumber}
                    onChange={(e) => setidNumber(e.target.value)}
                    required />
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

                <button type="submit">Submit:</button>
            </form>
            <p>Don't have an account? <span onClick={onLogin}>Register</span></p>
            </div>
    );
}

export default Login;