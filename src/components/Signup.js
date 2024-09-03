import React, { useState } from "react";

function Signup({ onSignup }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [yearOfBirth, setYearOfBirth] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        onSignup({ firstName, lastName, idNumber, yearOfBirth, password });
    };

    return (
        <div className="auth-container-2">
            <h1>MY VOTE - MY VOICE</h1>
            <p className="tag">MAKE YOUR VOICE HEARD</p>
            <nav className="navbar">Home:</nav>
            <h2 className="signup">Sign-up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label className="sign">First Name:</label>
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="sign">Last Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label className="sign">ID Number:</label>
                        <input
                            type="number"
                            placeholder="Enter your ID Number"
                            value={idNumber}
                            onChange={(e) => setIdNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="sign">Year of Birth:</label>
                        <input
                            type="date"
                            value={yearOfBirth}
                            onChange={(e) => setYearOfBirth(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label className="sign">Password:</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="sign">Confirm Password:</label>
                        <input
                            type="password"
                            placeholder="Re-enter password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="submit-2">Submit</button>
            </form>
        </div>
    );
}

export default Signup;
