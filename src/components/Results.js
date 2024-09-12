import React, { useEffect, useState } from "react";

// Initial data for candidates without vote counts
const elect_results_initial = {
  presidential: [
    { id: 1, name: 'Mercy Lee', party: 'ODM', imageUrl: 'https://media.istockphoto.com/id/1267842050/photo/management-staff-speaking-at-a-company-meeting.webp' },
    { id: 2, name: 'Raila Odinga', party: 'UDA', imageUrl: 'https://media.gettyimages.com/id/85213614/photo/rear-view-of-politician.jpg' },
    { id: 3, name: 'Harry Putin', party: 'WIPER', imageUrl: 'https://media.istockphoto.com/id/1406307321/photo/portrait-of-successful-mature-businessman-standing-in-office.webp' },
    { id: 4, name: 'Jemma Karanja', party: 'JUBILEE', imageUrl: 'https://media.gettyimages.com/id/1385767484/photo/mature-man-leading-a-demonstration-using-a-megaphone.jpg' }
  ],
  gubernatorial: [
    { id: 1, name: 'Michael Johnson', party: 'ODM', imageUrl: 'https://media.istockphoto.com/id/1809906850/photo/corporate-black-man-and-smile-in-portrait-with-arms-crossed-in-city-town-or-metro-in.jpg' },
    { id: 2, name: 'Emma Brown', party: 'WIPER', imageUrl: 'https://media.gettyimages.com/id/130406402/photo/politician-speaking-to-reporters.jpg' },
    { id: 3, name: 'Willy James', party: 'ODM', imageUrl: 'https://media.istockphoto.com/id/1317961862/photo/portrait-of-organization-female-representative-speaking-at-press-conference-in-government.jpg' },
    { id: 4, name: 'Ashley Johnson', party: 'WIPER', imageUrl: 'https://media.istockphoto.com/id/1406308823/photo/portrait-of-multiracial-african-american-black-young-businesswoman-standing-in-office-lobby.jpg' }
  ]
  // Add other categories similarly...
};

const Results = () => {
  const [results, setResults] = useState(elect_results_initial); // Default results

  // Fetch results from the backend API
  const fetchResults = () => {
    fetch('/api/results') // Ensure your backend API serves this endpoint
      .then((response) => response.json())
      .then((data) => {
        // Update the results with the data from backend
        const updatedResults = { ...results };

        // Update vote counts for each position and candidate
        data.forEach((result) => {
          Object.keys(updatedResults).forEach((position) => {
            updatedResults[position] = updatedResults[position].map((candidate) =>
              candidate.id === result.candidate_id ? { ...candidate, votes: result.votes } : candidate
            );
          });
        });

        setResults(updatedResults); // Set updated vote counts
      })
      .catch((error) => {
        console.error("Error fetching results:", error);
      });
  };

  // Fetch results on component mount
  useEffect(() => {
    fetchResults();
  }, []);

  // Render the table for each position
  const renderTable = (position, candidates) => (
    <section key={position} className="results-section">
      <h3 className="results-heading">
        {position.charAt(0).toUpperCase() + position.slice(1)} Results
      </h3>
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
              <td>
                <img
                  src={candidate.imageUrl}
                  alt={candidate.name}
                  className="candidate-image"
                />
              </td>
              <td>{candidate.name}</td>
              <td>{candidate.party}</td>
              <td>{candidate.votes || 0}</td> {/* Show votes or default to 0 */}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );

  return (
    <>
      <div id="election-results-container">
        <h2 id="results-title">Election Results</h2>
        <div id="results-wrapper">
          {Object.entries(results).map(([position, candidates]) =>
            renderTable(position, candidates)
          )}
        </div>
      </div>
    </>
  );
};

export default Results;
