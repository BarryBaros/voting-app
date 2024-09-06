import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup({ onSignup }) {
    const [idNumber, setIdNumber] = useState('');
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Passwords do not match!');
            return;
        }
        // Collect user data and pass it to the onSignup function
        const userData = {
            idNumber,
            name,
            dob,
            password
        };
        onSignup(userData); // Pass user data to parent component for signup logic
        setMessage('You have successfully signed up!');
        setTimeout(() => navigate('/'), 2000); //Redirect to login after signing up
    };

    return (
        <div className="auth-container">
             <h1>MY VOTE - MY VOICE</h1>
             <p className="tag">MAKE YOUR VOICE HEARD</p>
             
            <h2 className='sign'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label className='label'>ID Number:</label>
                    <input
                        type="number"
                        placeholder="Enter ID Number"
                        value={idNumber}
                        onChange={(e) => setIdNumber(e.target.value)}
                        required
                    />
                </div>

                <div className="input-container">
                    <label className='label'>Name:</label>
                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="input-container">
                    <label className='label'>Date of Birth:</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </div>

                <div className="input-container">
                    <label className='label'>Password:</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className='input-container'>
                    <label className='label'>Confirm Password:</label>
                    <input
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    />
                </div>

                <button className='sign_up' type="submit">Sign Up</button>
                {message && <p className={message.includes('do not') ? 'error' : 'success'}>{message}</p>}
            </form>
            <p>Already have an account? <Link to="/">Login</Link></p> {/* Link to Login Page */}
        </div>
    );
}

export default Signup;
