import React from "react";
// import Navbar from "./Navbar";
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
// import { useEffect } from "react";
// import { useState } from "react";

const elect_results = {
    presidential: [
        { id: 1, name: 'Raila Odinga', party: 'ODM', votes: '5,000,000', imageUrl: 'https://via.placeholder.com/50' },
        { id: 2, name: 'Mercy Lee', party: 'UDA', votes: '1,000,000', imageUrl: 'https://via.placeholder.com/50' },
        { id: 3, name: 'Harry Putin', party: 'WIPER', votes: '800,000', imageUrl: 'https://via.placeholder.com/50' },
        { id: 4, name: 'Jemma Karanja', party: 'JUBILEE', votes: '400,000', imageUrl: 'https://via.placeholder.com/50' },
        
        
    ],

    gubernatorial: [
        { id: 1, name: 'Michael Johnson', party: 'ODM', votes: '500,000', imageUrl: 'https://via.placeholder.com/50' },
        { id: 2, name: 'Emma Brown', party: 'WIPER', votes: '450,000', imageUrl: 'https://via.placeholder.com/50' },
    ],

    senatorial: [
        { id: 5, name: 'Alice White', party: 'WIPER', votes: '300,000', imageUrl: 'https://via.placeholder.com/50' },
        { id: 6, name: 'David Green', party: 'UDA', votes: '270,000', imageUrl: 'https://via.placeholder.com/50' },
    ],
      mp: [
        { id: 7, name: 'Thomas Blue', party: 'ODM', votes: '100,000', imageUrl: 'https://via.placeholder.com/50' },
        { id: 8, name: 'Olivia Gray', party: 'JUBILEE', votes: '95,000', imageUrl: 'https://via.placeholder.com/50' },
    ],
      mca: [
        { id: 9, name: 'Chris Red', party: 'ODM', votes: '50,000', imageUrl: 'https://via.placeholder.com/50' },
        { id: 10, name: 'Sara White', party: 'JUBILEE', votes: '48,000', imageUrl: 'https://via.placeholder.com/50' },
    ],


}

const Results = () => {
  
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
                <td><img src={candidate.imageUrl} alt={candidate.name} className="candidate-image" /></td>
                <td>{candidate.name}</td>
                <td>{candidate.party}</td>
                <td>{candidate.votes}</td>
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
        {Object.entries(elect_results).map(([position, candidates]) => renderTable(position, candidates))}
      </div>
    </div>

        </>
        
    );

    
  };

  export default Results;