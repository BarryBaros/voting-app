import React, { useState } from 'react';
import Navbar from './Navbar';

// Predefined candidate arrays
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
    id: 2,
    name: 'Candidate 2',
    party: 'WIPER',
    image: 'https://media.gettyimages.com/id/85213614/photo/rear-view-of-politician.jpg?s=612x612&w=0&k=20&c=7KvCnIMX1dFHZUtHWsoHH4Im3QrIf3FQ_hnea4N2E_w='
  },
  {
    id: 2,
    name: 'Candidate 2',
    party: 'WIPER',
    image: 'https://media.gettyimages.com/id/85213614/photo/rear-view-of-politician.jpg?s=612x612&w=0&k=20&c=7KvCnIMX1dFHZUtHWsoHH4Im3QrIf3FQ_hnea4N2E_w='
  },
  {
    id: 2,
    name: 'Candidate 2',
    party: 'WIPER',
    image: 'https://media.gettyimages.com/id/85213614/photo/rear-view-of-politician.jpg?s=612x612&w=0&k=20&c=7KvCnIMX1dFHZUtHWsoHH4Im3QrIf3FQ_hnea4N2E_w='
  },
  {
    id: 2,
    name: 'Candidate 2',
    party: 'WIPER',
    image: 'https://media.gettyimages.com/id/85213614/photo/rear-view-of-politician.jpg?s=612x612&w=0&k=20&c=7KvCnIMX1dFHZUtHWsoHH4Im3QrIf3FQ_hnea4N2E_w='
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
    id: 1,
    name: 'Senatorial Candidate 1',
    party: 'WIPER',
    image: 'https://media.gettyimages.com/id/1345174163/photo/people-with-raised-fists-at-a-demonstration-in-the-city.jpg?s=612x612&w=0&k=20&c=O9UAMvOuvCVm6DYk_r5_VhMLPHZUHeQVr4Kxc63nZcI='
  },
  {
    id: 1,
    name: 'Senatorial Candidate 1',
    party: 'WIPER',
    image: 'https://media.gettyimages.com/id/1345174163/photo/people-with-raised-fists-at-a-demonstration-in-the-city.jpg?s=612x612&w=0&k=20&c=O9UAMvOuvCVm6DYk_r5_VhMLPHZUHeQVr4Kxc63nZcI='
  },
  {
    id: 1,
    name: 'Senatorial Candidate 1',
    party: 'WIPER',
    image: 'https://media.gettyimages.com/id/1345174163/photo/people-with-raised-fists-at-a-demonstration-in-the-city.jpg?s=612x612&w=0&k=20&c=O9UAMvOuvCVm6DYk_r5_VhMLPHZUHeQVr4Kxc63nZcI='
  },
  {
    id: 1,
    name: 'Senatorial Candidate 1',
    party: 'WIPER',
    image: 'https://media.gettyimages.com/id/1345174163/photo/people-with-raised-fists-at-a-demonstration-in-the-city.jpg?s=612x612&w=0&k=20&c=O9UAMvOuvCVm6DYk_r5_VhMLPHZUHeQVr4Kxc63nZcI='
  },
  {
    id: 1,
    name: 'Senatorial Candidate 1',
    party: 'WIPER',
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
    id: 1,
    name: 'Gubernatorial Candidate 1',
    party: 'ODM',
    image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE='
  },
  {
    id: 1,
    name: 'Gubernatorial Candidate 1',
    party: 'ODM',
    image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE='
  },
  {
    id: 1,
    name: 'Gubernatorial Candidate 1',
    party: 'ODM',
    image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE='
  },
  {
    id: 1,
    name: 'Gubernatorial Candidate 1',
    party: 'ODM',
    image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE='
  },
  {
    id: 1,
    name: 'Gubernatorial Candidate 1',
    party: 'ODM',
    image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE='
  },
  {
    id: 1,
    name: 'Gubernatorial Candidate 1',
    party: 'ODM',
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
    <Navbar />
    <div className="admin-page">
      {/* Form Section */}
      <div className="admin-container">
        <h1>Admin Dashboard</h1>
        <h2 >Add Candidate</h2>
        <form className="candidate-form" onSubmit={handleSubmit}>
          <div className="form-group">
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
          <div className="form-group">
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
          <div className="form-group">
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
          <div className="form-group">
            <label htmlFor="party">Party:</label>
            <select
              id="party"
              name="party"
              value={candidate.party}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a Party</option>
              <option value="Party A">JUBILEE</option>
              <option value="Party B">ODM</option>
              <option value="Party C">WIPER</option>
              <option value="Party D">UDA</option>
             
            </select>
          </div>
          <div className="form-group">
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
          <button type="submit">Add Candidate</button>
        </form>
      </div>

      {/* Display Section */}
      <div className="candidates-section">
        <h2 className='title'>Presidential Candidates</h2>
        <div className="candidates-container">
          {presidentialCandidates.map((candidate) => (
            <div key={candidate.id} className="candidate-card">
              <img src={candidate.image} alt={candidate.name} />
              <h3>{candidate.name}</h3>
              <p>Party: {candidate.party}</p>
            </div>
          ))}
        </div>

        <h2 className='title'>Senatorial Candidates</h2>
        <div className="candidates-container">
          {senatorialCandidates.map((candidate) => (
            <div key={candidate.id} className="candidate-card">
              <img src={candidate.image} alt={candidate.name} />
              <h3>{candidate.name}</h3>
              <p>Party: {candidate.party}</p>
            </div>
          ))}
        </div>

        <h2 className='title'>Gubernatorial Candidates</h2>
        <div className="candidates-container">
          {gubernatorialCandidates.map((candidate) => (
            <div key={candidate.id} className="candidate-card">
              <img src={candidate.image} alt={candidate.name} />
              <h3>{candidate.name}</h3>
              <p>Party: {candidate.party}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLandingPage;

