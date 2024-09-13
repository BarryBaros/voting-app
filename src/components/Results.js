import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";

const Results = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch('/api/candidates')
      .then(response => response.json())
      .then(data => setCandidates(data))
      .catch(error => console.error("Error fetching candidates:", error));
  }, []);

  const groupByPosition = (candidates) => {
    return candidates.reduce((acc, candidate) => {
      if (!acc[candidate.position]) {
        acc[candidate.position] = [];
      }
      acc[candidate.position].push(candidate);
      return acc;
    }, {});
  };

  const groupedCandidates = groupByPosition(candidates);

  const renderTable = (position, candidates) => (
    <section key={position} className="results-section">
      <h3 className="results-heading">{position.charAt(0).toUpperCase() + position.slice(1)} Results</h3>
      <table className="results-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Candidate</th>
            <th>Party</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id} className="results-row">
              <td><img src={candidate.image} alt={candidate.name} className="candidate-image" /></td>
              <td>{candidate.name}</td>
              <td>{candidate.party}</td>
              <td>{candidate.votes || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );

  return (
    <>
      {/* <Navbar /> */}
      <div id="election-results-container">
        <h2 id="results-title">Election Results</h2>
        <div id="results-wrapper">
          {Object.entries(groupedCandidates).map(([position, candidates]) => 
            renderTable(position, candidates)
          )}
        </div>
      </div>
    </>
  );
};

export default Results;
