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
            <h1>MY VOTE - MY VOICE</h1>
            <p className="tag">MAKE YOUR VOICE HEARD</p>
            <div className=" signup-container">
            <h2>Sign-up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" placeholder="Enter First Name" required/>
                    </div>
                    
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" placeholder="Enter your Last Name" required/>
                        </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                        <label>ID Number:</label>
                        <input type="text" placeholder="Enter your ID Number" required/>                    </div>
                <div className="form-group">
                    <label>Year of Birth:</label>
                    <input type="date" required/>
                </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" placeholder="Enter Password" required/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input type="password" placeholder="Re-enter password" required/>
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    );
}

export default Signup;