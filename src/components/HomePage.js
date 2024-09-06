import React from 'react';
import Navbar from './Navbar'; 
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const HomePage = () => {
  const presidentialCandidates = [
    {
      id: 1,
      name: 'Mercy Lee',
      party: 'Party A',
      image: 'https://media.gettyimages.com/id/1385767484/photo/mature-man-leading-a-demonstration-using-a-megaphone.jpg?s=612x612&w=0&k=20&c=e1e9IKMU5m3jq71J1--HwahReURFN0wxI8x_arLK2JQ=', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Raila Odinga',
      party: 'Party B',
      image: 'https://media.gettyimages.com/id/85213614/photo/rear-view-of-politician.jpg?s=612x612&w=0&k=20&c=7KvCnIMX1dFHZUtHWsoHH4Im3QrIf3FQ_hnea4N2E_w=', // Replace with actual image URL
    },
    {
      id: 1,
      name: 'Harry Puttin',
      party: 'Party C',
      image: 'https://media.gettyimages.com/id/1385767484/photo/mature-man-leading-a-demonstration-using-a-megaphone.jpg?s=612x612&w=0&k=20&c=e1e9IKMU5m3jq71J1--HwahReURFN0wxI8x_arLK2JQ=', // Replace with actual image URL
    },
    {
      id: 1,
      name: 'Jemma Karanja',
      party: 'Party D',
      image: 'https://media.gettyimages.com/id/1385767484/photo/mature-man-leading-a-demonstration-using-a-megaphone.jpg?s=612x612&w=0&k=20&c=e1e9IKMU5m3jq71J1--HwahReURFN0wxI8x_arLK2JQ=', // Replace with actual image URL
    },
  ];

  const senatorialCandidates = [
    {
      id: 1,
      name: 'Senatorial Candidate 1',
      party: 'Party C',
      image: 'https://media.gettyimages.com/id/1345174163/photo/people-with-raised-fists-at-a-demonstration-in-the-city.jpg?s=612x612&w=0&k=20&c=O9UAMvOuvCVm6DYk_r5_VhMLPHZUHeQVr4Kxc63nZcI=', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Senatorial Candidate 2',
      party: 'Party D',
      image: 'https://media.gettyimages.com/id/130406402/photo/politician-speaking-to-reporters.jpg?s=612x612&w=0&k=20&c=OWBq7MjmhsXraAn0BH8wBXZ66yDonJ_mOqy7tzZ1jDs=', // Replace with actual image URL
    },
    {
      id: 1,
      name: 'Senatorial Candidate 3',
      party: 'Party T',
      image: 'https://media.gettyimages.com/id/1345174163/photo/people-with-raised-fists-at-a-demonstration-in-the-city.jpg?s=612x612&w=0&k=20&c=O9UAMvOuvCVm6DYk_r5_VhMLPHZUHeQVr4Kxc63nZcI=', // Replace with actual image URL
    },
    {
      id: 1,
      name: 'Senatorial Candidate 4',
      party: 'Party H',
      image: 'https://media.gettyimages.com/id/1345174163/photo/people-with-raised-fists-at-a-demonstration-in-the-city.jpg?s=612x612&w=0&k=20&c=O9UAMvOuvCVm6DYk_r5_VhMLPHZUHeQVr4Kxc63nZcI=', // Replace with actual image URL
    },
  ];

  const gubernatorialCandidates = [
    {
      id: 1,
      name: 'Gubernatorial Candidate 1',
      party: 'Party E',
      image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE=', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Gubernatorial Candidate 2',
      party: 'Party F',
      image: 'https://media.gettyimages.com/id/157376763/photo/politician-debating.jpg?s=612x612&w=0&k=20&c=CTtZdkqJ-43tUoIK3tM6QSbX7y2gV8pNNqYHMFCsYz8=', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Gubernatorial Candidate 3',
      party: 'Party E',
      image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE=', // Replace with actual image URL
    },
    {
      id: 4,
      name: 'Gubernatorial Candidate 4',
      party: 'Party K',
      image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE=', // Replace with actual image URL
    },
  ];
  
  const mcaCandidates = [
    {
      id: 1,
      name: 'MCA Candidate 1',
      party: 'Party A',
      image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE=', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'MCA Candidate 2',
      party: 'Party B',
      image: 'https://media.gettyimages.com/id/157376763/photo/politician-debating.jpg?s=612x612&w=0&k=20&c=CTtZdkqJ-43tUoIK3tM6QSbX7y2gV8pNNqYHMFCsYz8=', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'MCA Candidate 3',
      party: 'Party C',
      image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE=', // Replace with actual image URL
    },
    {
      id: 4,
      name: 'MCA Candidate 4',
      party: 'Party D',
      image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE=', // Replace with actual image URL
    },
  ];
  
  const mpCandidates = [
    {
      id: 1,
      name: 'MP Candidate 1',
      party: 'Party X',
      image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE=', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'MP Candidate 2',
      party: 'Party Y',
      image: 'https://media.gettyimages.com/id/157376763/photo/politician-debating.jpg?s=612x612&w=0&k=20&c=CTtZdkqJ-43tUoIK3tM6QSbX7y2gV8pNNqYHMFCsYz8=', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'MP Candidate 3',
      party: 'Party Z',
      image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE=', // Replace with actual image URL
    },
    {
      id: 4,
      name: 'MP Candidate 4',
      party: 'Party W',
      image: 'https://media.gettyimages.com/id/1006071592/photo/revolution-fist-raised.jpg?s=612x612&w=0&k=20&c=Q15oEzFONYs0qyt_4ggtmHIaow4ENJix9K0UslNJ-AE=', // Replace with actual image URL
    },
  ];
  

  return (
    <div className="candidates-page">
      <Navbar />
      <Section title="Presidential Candidates" candidates={presidentialCandidates} />
      <Section title="Senatorial Candidates" candidates={senatorialCandidates} />
      <Section title="Gubernatorial Candidates" candidates={gubernatorialCandidates} />
      <Section title="MP Candidates" candidates={mpCandidates} />
      <Section title="MCA Candidates" candidates={mcaCandidates} />
      <Footer />
    </div>
  );
   
};

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
          <button className="button">Vote</button>
        </div>
      ))}
    </div>
  </div>
);



const Footer = () => (
  <footer className="footer">
    <div className="social-media-links">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
    
    <div className="rights-reserved">
      <p>&copy; 2024 All Rights Reserved.</p>
    </div>
  </footer>
);


export default HomePage;
