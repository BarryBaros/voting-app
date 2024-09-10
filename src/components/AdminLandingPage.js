import React, { useState } from 'react';
import Footer from './Footer';

import Navbar from './Navbar';

// Presidential candidates arrays
const presidentialCandidates = [
  {
    id: 1,
    name: 'Candidate 1',
    party: 'UDA',
    image: 'https://media.gettyimages.com/id/1385767484/photo/mature-man-leading-a-demonstration-using-a-megaphone.jpg?s=612x612&w=0&k=20&c=e1e9IKMU5m3jq71J1--HwahReURFN0wxI8x_arLK2JQ='
  },
  {
    id: 2,
    name: 'Candidate 2',
    party: 'WIPER',
    image: 'https://media.gettyimages.com/id/85213614/photo/rear-view-of-politician.jpg?s=612x612&w=0&k=20&c=7KvCnIMX1dFHZUtHWsoHH4Im3QrIf3FQ_hnea4N2E_w='
  },
  {
    id: 3,
    name: 'Candidate 3',
    party: 'JUBILEE',
    image: 'https://media.gettyimages.com/id/1385767484/photo/mature-man-leading-a-demonstration-using-a-megaphone.jpg?s=612x612&w=0&k=20&c=e1e9IKMU5m3jq71J1--HwahReURFN0wxI8x_arLK2JQ='
  },
  {
    id: 4,
    name: 'Candidate 4',
    party: 'ODM',
    image: 'https://media.gettyimages.com/id/1385767484/photo/mature-man-leading-a-demonstration-using-a-megaphone.jpg?s=612x612&w=0&k=20&c=e1e9IKMU5m3jq71J1--HwahReURFN0wxI8x_arLK2JQ='
  },
];

const senatorialCandidates = [
  {
    id: 1,
    name: 'Senatorial Candidate 1',
    party: 'WIPER',
    image: 'https://media.gettyimages.com/id/1345174163/photo/people-with-raised-fists-at-a-demonstration-in-the-city.jpg?s=612x612&w=0&k=20&c=O9UAMvOuvCVm6DYk_r5_VhMLPHZUHeQVr4Kxc63nZcI='
  },
  {
    id: 2,
    name: 'Senatorial Candidate 2',
    party: 'ODM',
    image: 'https://media.gettyimages.com/id/130406402/photo/politician-speaking-to-reporters.jpg?s=612x612&w=0&k=20&c=OWBq7MjmhsXraAn0BH8wBXZ66yDonJ_mOqy7tzZ1jDs='
  },
  {
    id: 3,
    name: 'Senatorial Candidate 3',
    party: 'UDA',
    image: 'https://media.gettyimages.com/id/1345174163/photo/people-with-raised-fists-at-a-demonstration-in-the-city.jpg?s=612x612&w=0&k=20&c=O9UAMvOuvCVm6DYk_r5_VhMLPHZUHeQVr4Kxc63nZcI='
  },
  {
    id: 4,
    name: 'Senatorial Candidate 4',
    party: 'JUBILEE',
    image: 'https://media.gettyimages.com/id/1345174163/photo/people-with-raised-fists-at-a-demonstration-in-the-city.jpg?s=612x612&w=0&k=20&c=O9UAMvOuvCVm6DYk_r5_VhMLPHZUHeQVr4Kxc63nZcI='
  },
];

const gubernatorialCandidates = [
  {
    id: 1,
    name: 'Gubernatorial Candidate 1',
    party: 'ODM',
    image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE='
  },
  {
    id: 2,
    name: 'Gubernatorial Candidate 2',
    party: 'JUBILEE',
    image: 'https://media.gettyimages.com/id/157376763/photo/politician-debating.jpg?s=612x612&w=0&k=20&c=CTtZdkqJ-43tUoIK3tM6QSbX7y2gV8pNNqYHMFCsYz8='
  },
  {
    id: 3,
    name: 'Gubernatorial Candidate 3',
    party: 'UDA',
    image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE='
  },
  {
    id: 4,
    name: 'Gubernatorial Candidate 4',
    party: 'WIPER',
    image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE='
  },
];

const AdminLandingPage = () => {
  const [candidate, setCandidate] = useState({
    name: '',
    idNumber: '',
    position: '',
    party: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidate({
      ...candidate,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setCandidate({
      ...candidate,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(candidate);
    setCandidate({
      name: '',
      idNumber: '',
      position: '',
      party: '',
      image: null,
    });
  };

  return (
    <>
   
    <div className="admin-dashboard-layout">
      {/* Form Section */}
      <div className="form-panel">
        <h1 className="form-header">Admin Dashboard</h1>
        <h2 className="form-subheader">Add Candidate</h2>
        <form className="candidate-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Candidate Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={candidate.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="idNumber">ID Number:</label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              value={candidate.idNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="position">Position:</label>
            <select
              id="position"
              name="position"
              value={candidate.position}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a Position</option>
              <option value="President">President</option>
              <option value="Senator">Senator</option>
              <option value="Governor">Governor</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="party">Party:</label>
            <select
              id="party"
              name="party"
              value={candidate.party}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a Party</option>
              <option value="JUBILEE">JUBILEE</option>
              <option value="ODM">ODM</option>
              <option value="WIPER">WIPER</option>
              <option value="UDA">UDA</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      {/* Display Section */}
      <div className="display-panel">
        <h2 className="section-header">Presidential Candidates</h2>
        <div className="candidates-list">
          {presidentialCandidates.map((candidate) => (
            <div key={candidate.id} className="candidate-car">
              <img src={candidate.image} alt={candidate.name} className="candidate-imag" />
              <div className="candidate-inf">
                <h3 className="candidate-nam">{candidate.name}</h3>
                <p className="candidate-party">Party: {candidate.party}</p>
              </div>
              <div className="candidate-actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn" >Delete</button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-header">Senatorial Candidates</h2>
        <div className="candidates-list">
          {senatorialCandidates.map((candidate) => (
            <div key={candidate.id} className="candidate-car">
              <img src={candidate.image} alt={candidate.name} className="candidate-imag" />
              <div className="candidate-inf">
                <h3 className="candidate-nam">{candidate.name}</h3>
                <p className="candidate-party">Party: {candidate.party}</p>
              </div>
              <div className="candidate-actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn" >Delete</button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-header">Gubernatorial Candidates</h2>
        <div className="candidates-list">
          {gubernatorialCandidates.map((candidate) => (
            <div key={candidate.id} className="candidate-car">
              <img src={candidate.image} alt={candidate.name} className="candidate-imag" />
              <div className="candidate-inf">
                <h3 className="candidate-nam">{candidate.name}</h3>
                <p className="candidate-party">Party: {candidate.party}</p>
              </div>
              <div className="candidate-actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn" >Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AdminLandingPage;