import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [idNumber, setIdNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
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

        const userData = {
            idNumber,
            firstName,
            lastName,
            dob,
            password
        };

        // Make a POST request to the signup route
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Signup successful') {
                console.log("signup successful")
                setMessage(data.message);
                setTimeout(() => navigate('/'), 3000); // Redirect to login after 3 seconds
            } else {
                setMessage('Signup failed.');
            }
        })
        .catch(error => {
            setMessage('An error occurred during signup.');
            console.log(error)
        });
    };

    return (
        <div className="auth-container">
             <h1>MY VOTE - MY VOICE</h1>
             <p className="tag">MAKE YOUR VOICE HEARD</p>

            <h2 className='sign'>Sign Up</h2>
            <form onSubmit={handleSubmit}>

                <div className="input-container">
                    <label className='label'>First Name:</label>
                    <input
                        type="text"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <label className='label'>Last Name:</label>
                    <input
                        type="text"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>

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
            <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
    );
}

export default Signup;
