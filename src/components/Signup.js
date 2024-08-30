import React, {useState} from "react";

function Signup({ onSignup }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [idNumber, setidNumber] = useState('');
    const [yearOfBirth, setYearOfBirth] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        onSignup(); //Perfom Signup here
    };

    return (
        <div className="auth-container">
            <h2>Sign-up</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input 
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                />
                <label>Last Name:</label>
                <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                />
                <label>Year of Birth</label>
                <input
                type="text"
                value={yearOfBirth}
                onChange={(e) => setYearOfBirth(e.target.value)}
                required
                />
                <label>Id Number</label>
                <input
                type="numbers"
                value={idNumber}
                onChange={(e) => setidNumber(e.target.value)}
                required
                />


                <label>Password:</label>
                <input
                type="passwor"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <label>Confirm Password:</label>
                <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Signup;