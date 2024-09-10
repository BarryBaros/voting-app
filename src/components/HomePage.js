import React from 'react';
import Navbar from './Navbar'; 
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const HomePage = () => {
  const presidentialCandidates = [
    {
      id: 1,
      name: 'Mercy Lee',
      party: 'Party A',
      image: 'https://media.istockphoto.com/id/1267842050/photo/management-staff-speaking-at-a-company-meeting.webp?a=1&b=1&s=612x612&w=0&k=20&c=XFA7mTP3xBFv8joWOnsdlh7Pz5ShwvjQ83Vnbo2iu_U='
    },
    {
      id: 2,
      name: 'Raila Odinga',
      party: 'Party B',
      image: 'https://media.gettyimages.com/id/85213614/photo/rear-view-of-politician.jpg?s=612x612&w=0&k=20&c=7KvCnIMX1dFHZUtHWsoHH4Im3QrIf3FQ_hnea4N2E_w=',
    },
    {
      id: 3,
      name: 'Harry Puttin',
      party: 'Party C',
      image: 'https://media.istockphoto.com/id/1406307321/photo/portrait-of-successful-mature-businessman-standing-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=fS-ZlKEZm0XWwYZUribr2B0ZhScTBDF3rcFIlXX_6E4=',
    },
    {
      id: 4,
      name: 'Jemma Karanja',
      party: 'Party D',
      image: 'https://media.gettyimages.com/id/1385767484/photo/mature-man-leading-a-demonstration-using-a-megaphone.jpg?s=612x612&w=0&k=20&c=e1e9IKMU5m3jq71J1--HwahReURFN0wxI8x_arLK2JQ=',
    },
  ];

  const senatorialCandidates = [
    {
      id: 1,
      name: 'Senatorial Candidate 1',
      party: 'Party A',
      image: 'https://media.istockphoto.com/id/1809906850/photo/corporate-black-man-and-smile-in-portrait-with-arms-crossed-in-city-town-or-metro-in.jpg?s=612x612&w=0&k=20&c=PhyF6kD0EoXcpMj8IER1Ij6UjoOHgwWlxgR6fYiKXJc=',
    },
    {
      id: 2,
      name: 'Senatorial Candidate 2',
      party: 'Party B',
      image: 'https://media.gettyimages.com/id/130406402/photo/politician-speaking-to-reporters.jpg?s=612x612&w=0&k=20&c=OWBq7MjmhsXraAn0BH8wBXZ66yDonJ_mOqy7tzZ1jDs=',
    },
    {
      id: 3,
      name: 'Senatorial Candidate 3',
      party: 'Party C',
      image: 'https://media.istockphoto.com/id/1317961862/photo/portrait-of-organization-female-representative-speaking-at-press-conference-in-government.jpg?s=612x612&w=0&k=20&c=3eaDKiLZX61ftlvfUHzXoFWrJbomhc0E1XBBEnzvNYA=',
    },
    {
      id: 4,
      name: 'Senatorial Candidate 4',
      party: 'Party D',
      image: 'https://media.istockphoto.com/id/1406308823/photo/portrait-of-multiracial-african-american-black-young-businesswoman-standing-in-office-lobby.jpg?s=612x612&w=0&k=20&c=A6QGFL9Js0groBEoJFyB2c3xx6JhO-3PWUA8s-7UZ9w=',
    },
  ];

  const gubernatorialCandidates = [
    {
      id: 1,
      name: 'Gubernatorial Candidate 1',
      party: 'Party A',
      image: 'https://media.istockphoto.com/id/1488389611/photo/smile-leadership-and-portrait-of-black-man-confident-ceo-with-mockup-and-blurred-background.jpg?s=612x612&w=0&k=20&c=iJLr7CEL8iZKWos_TvGsHp0M1gGcoFmdgeH2QXHuxLo=',
    },
    {
      id: 2,
      name: 'Gubernatorial Candidate 2',
      party: 'Party B',
      image: 'https://media.istockphoto.com/id/639522918/photo/mayoral-candidate-addresses-supporters-at-rally.jpg?s=612x612&w=0&k=20&c=avRYL9arQQHvMPv-4fFX64B_BPGNhlJgqUr4wPi9YIY=',
    },
    {
      id: 3,
      name: 'Gubernatorial Candidate 3',
      party: 'Party C',
      image: 'https://media.istockphoto.com/id/922951078/photo/female-politician-of-eu-having-press-conference.jpg?s=612x612&w=0&k=20&c=vKykvlV0wriMf9Hgil1SCRIb5huvWBHigvklZVjYRIM=',
    },
    {
      id: 4,
      name: 'Gubernatorial Candidate 4',
      party: 'Party D',
      image: 'https://media.istockphoto.com/id/1293444861/photo/african-american-public-speaker-on-stage.jpg?s=612x612&w=0&k=20&c=22zcn24hxUAkxRejXi7dqwuWeO551q-mw2ZKZvB0620=',
    },
  ];

  const mpCandidates = [
    {
      id: 1,
      name: 'MP Candidate 1',
      party: 'Party A',
      image: 'https://media.istockphoto.com/id/1377434594/photo/beautiful-african-politician-in-a-red-suit-posing-on-camera-with-a-smile-before-the-speech.jpg?s=612x612&w=0&k=20&c=lbIePU5uIZfRXdolR1P7W_AWWdm0NzpGMOXVNVPeZss=',
    },
    {
      id: 2,
      name: 'MP Candidate 2',
      party: 'Party B',
      image: 'https://media.istockphoto.com/id/1401674399/photo/businessman-speaking-an-interview-for-television.jpg?s=612x612&w=0&k=20&c=L5tyTa5NXARN9CgOzT1lI8AOXbtLyR49aeRKo4Zw8a0=',
    },
    {
      id: 3,
      name: 'MP Candidate 3',
      party: 'Party C',
      image: 'https://media.istockphoto.com/id/1159381371/photo/man-by-tribune.jpg?s=612x612&w=0&k=20&c=di3Zri7bFudK6AXDJuMOxFDXbPT2HKd7eThhOLIfP2A=',
    },
    {
      id: 4,
      name: 'MP Candidate 4',
      party: 'Party D',
      image: 'https://media.istockphoto.com/id/1467404929/photo/cheerful-office-worker-being-interviewed-by-tv-crew.jpg?s=612x612&w=0&k=20&c=-2EIUyDI4Aa7JvJaxHrAxExigXouW0ydrYxTt0WgRu8=',
    },
  ];

  return (
    <div className="candidates-page">        
      <Section title="Presidential Candidates" candidates={presidentialCandidates} />
      <Section title="Senatorial Candidates" candidates={senatorialCandidates} />
      <Section title="Gubernatorial Candidates" candidates={gubernatorialCandidates} />
      <Section title="MP Candidates" candidates={mpCandidates} />
      <Footer />
    </div>
  );
};

const handleVote = (candidateId) => {
  console.log("Voted for candidate with id:", candidateId);
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
          <button className="b-vote" onClick={() => handleVote(candidate.id)}>Vote</button>
        </div>
      ))}
    </div>
  </div>
);

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
