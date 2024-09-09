import React, { useState } from 'react';

function About() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', message);
    // Add logic to handle feedback submission (e.g., send to backend)
    setMessage(''); // Clear the form after submission
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h1>ABOUT THS PLATFORM</h1>
        <p><strong>One Vote:</strong> You can only vote once.</p>
        <p><strong>Final Decision:</strong> Your vote is final and can't be changed.</p>
        <p><strong>Secure Voting:</strong> Your vote is private and secure.</p>
        <p><strong>Confirmation:</strong> You’ll receive a confirmation after voting.</p>
        <p><strong>Eligibility:</strong> Only eligible users can vote.</p>
        <p>Need Help? Reach out if you have any questions.</p>
      </div>
      
      <div className="feedback-form">
        <h3>FEEDBACK FORM</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your feedback"
            rows="5"
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default About;
