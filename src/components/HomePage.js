import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer';

const HomePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [votedCandidates, setVotedCandidates] = useState([]);  // To track voted candidates
  const [votedPositions, setVotedPositions] = useState({});    // To track voted positions

  useEffect(() => {
    fetch('/api/candidates')
      .then(response => response.json())
      .then(data => {
        setCandidates(data);
      })
      .catch(error => console.error("Error fetching candidates:", error));
  }, []);

  const handleVote = (candidateId, position) => {
    // Prevent multiple votes for the same candidate or the same position
    if (votedPositions[position] || votedCandidates.includes(candidateId)) {
      return;  // Ignore if already voted for this position or candidate
    }

    console.log("Voted for candidate with id:", candidateId);

    // Update the voted position and candidate
    setVotedCandidates([...votedCandidates, candidateId]);
    setVotedPositions(prevState => ({ ...prevState, [position]: true }));
  };

  const presidentialCandidates = candidates.filter(candidate => candidate.position === 'President');
  const senatorialCandidates = candidates.filter(candidate => candidate.position === 'Senator');
  const gubernatorialCandidates = candidates.filter(candidate => candidate.position === 'Governor');

  return (
    <div className="candidates-page">
      <Section 
        title="Presidential Candidates" 
        candidates={presidentialCandidates} 
        votedPositions={votedPositions} 
        votedCandidates={votedCandidates} 
        onVote={handleVote} 
      />
      <Section 
        title="Senatorial Candidates" 
        candidates={senatorialCandidates} 
        votedPositions={votedPositions} 
        votedCandidates={votedCandidates} 
        onVote={handleVote} 
      />
      <Section 
        title="Gubernatorial Candidates" 
        candidates={gubernatorialCandidates} 
        votedPositions={votedPositions} 
        votedCandidates={votedCandidates} 
        onVote={handleVote} 
      />
      <Footer />
    </div>
  );
};

const Section = ({ title, candidates, votedPositions, votedCandidates, onVote }) => (
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
            onClick={() => onVote(candidate.id, candidate.position)} 
            disabled={votedPositions[candidate.position] || votedCandidates.includes(candidate.id)}  // Disable if voted
          >
            {votedPositions[candidate.position] || votedCandidates.includes(candidate.id) ? 'Voted' : 'Vote'}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default HomePage;
