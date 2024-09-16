import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function CandidateLogin({ onCandidateLogin }) {
    const [candidateId, setCandidateId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/candidate_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                candidate_user_id: candidateId,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                onCandidateLogin(data.candidate_name);
                navigate('/candidate-dashboard');
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div className="auth-container-1">
            <h2>Candidate Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Candidate ID:</label>
                    <input
                        type="number"
                        placeholder="Enter your Candidate ID"
                        value={candidateId}
                        onChange={(e) => setCandidateId(e.target.value)}
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

export default CandidateLogin;