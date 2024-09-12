import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import axios from 'axios';

// Example component for displaying candidates
const AdminLandingPage = () => {
    const [candidate, setCandidate] = useState({
        name: '',
        idNumber: '',
        position: '',
        party: '',
        image: '',
    });
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        // Fetch existing candidates
        axios.get('/api/candidates')
            .then(response => {
                setCandidates(response.data);
            })
            .catch(error => {
                console.error('Error fetching candidates:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCandidate({
            ...candidate,
            [name]: value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/candidates', candidate)
            .then(response => {
                // Refresh candidates list
                setCandidates([...candidates, response.data]);
                setCandidate({
                    name: '',
                    position: '',
                    party: '',
                    image: '',
                });
            })
            .catch(error => {
                console.error('Error adding candidate:', error);
            });
    };

    return (
        <>
            <Navbar />
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
                                type="text"
                                id="image"
                                name="image"
                                value={candidate.image}
                                onChange={handleChange}
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
                        {candidates.filter(c => c.position === 'President').map((candidate) => (
                            <div key={candidate.id} className="candidate-car">
                                <img src={candidate.image} alt={candidate.name} className="candidate-imag" />
                                <div className="candidate-inf">
                                    <h3 className="candidate-nam">{candidate.name}</h3>
                                    <p className="candidate-party">Party: {candidate.party}</p>
                                </div>
                                <div className="candidate-actions">
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="section-header">Senatorial Candidates</h2>
                    <div className="candidates-list">
                        {candidates.filter(c => c.position === 'Senator').map((candidate) => (
                            <div key={candidate.id} className="candidate-car">
                                <img src={candidate.image} alt={candidate.name} className="candidate-imag" />
                                <div className="candidate-inf">
                                    <h3 className="candidate-nam">{candidate.name}</h3>
                                    <p className="candidate-party">Party: {candidate.party}</p>
                                </div>
                                <div className="candidate-actions">
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="section-header">Gubernatorial Candidates</h2>
                    <div className="candidates-list">
                        {candidates.filter(c => c.position === 'Governor').map((candidate) => (
                            <div key={candidate.id} className="candidate-car">
                                <img src={candidate.image} alt={candidate.name} className="candidate-imag" />
                                <div className="candidate-inf">
                                    <h3 className="candidate-nam">{candidate.name}</h3>
                                    <p className="candidate-party">Party: {candidate.party}</p>
                                </div>
                                <div className="candidate-actions">
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn">Delete</button>
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

