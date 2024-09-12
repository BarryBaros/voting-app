import React, { useState } from 'react';
import Navbar from './Navbar';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const HomePage = () => {
  const [isVoted, setIsVoted] = useState({});  // Track if the user has voted for a specific candidate

  // Candidate data remains the same as in your original code
  const presidentialCandidates = [/* ... */];
  const gubernatorialCandidates = [/* ... */];
  const senatorialCandidates = [/* ... */];
  const mpCandidates = [/* ... */];

  // Function to handle the voting process by sending the vote to the backend
  const voteForCandidate = (candidateId) => {
    const token = localStorage.getItem("access_token");  // Get the JWT token from localStorage

    fetch('http://localhost:5000/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`  // Include JWT token for authentication
      },
      body: JSON.stringify({ candidate_id: candidateId })  // Send candidate ID in request body
    })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          alert('Vote successfully cast!');
          setIsVoted(prevIsVoted => ({ ...prevIsVoted, [candidateId]: true }));  // Disable voting after success
        } else {
          alert(data.error);  // Handle errors (e.g., already voted, unauthorized)
        }
      })
      .catch(error => {
        console.error('Error voting for candidate:', error);
        alert('An error occurred while casting the vote. Please try again.');
      });
  };

  // Section component to render candidates and vote buttons
  const Section = ({ title, candidates }) => (
    <div className="candidates-section">
      <h2>{title}</h2>
      <div className="candidates-container">
        {candidates.map(candidate => (
          <div key={candidate.id} className="candidate-card">
            <div className="candidate-info">
              <h3>{candidate.name}</h3>
              <p>{candidate.party}</p>
            </div>
            <div className="candidate-image">
              <img src={candidate.image} alt={candidate.name} />
            </div>
            <button
              className="b-vote"
              onClick={() => voteForCandidate(candidate.id)}
              disabled={isVoted[candidate.id]}  // Disable the vote button after voting
            >
              {isVoted[candidate.id] ? 'Voted' : 'Vote'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="candidates-page">
      <Section title="Presidential Candidates" candidates={presidentialCandidates} />
      <Section title="Gubernatorial Candidates" candidates={gubernatorialCandidates} />
      <Section title="Senatorial Candidates" candidates={senatorialCandidates} />
      <Section title="MP Candidates" candidates={mpCandidates} />
      <Footer />
    </div>
  );
};

// Footer component remains unchanged
const Footer = () => (
  <footer className="footer">
    <div className="social-media-links">
      <a href="facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebookF />
      </a>
      <a href="twitter" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="instagram" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
    <div className="rights-reserved">
      <p>&copy; 2024 All Rights Reserved.</p>
    </div>
  </footer>
);

export default HomePage;
