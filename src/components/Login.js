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
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Id Number:</label>
                <input
                    type="text"
                    value={idNumber}
                    onChange={(e) => setidNumber(e.target.value)}
                    required />
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />

                        <button type="submit">Submit</button>
            </form>
            <p>Don't have an account? <span onClick={onLogin}>Register</span></p>
            </div>
    );
}

export default Login;