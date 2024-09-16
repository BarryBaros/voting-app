My Vote My Voice
This is a web-based voting application built with Flask (backend) and React (frontend). The app allows users to sign up, log in, and vote for their preferred candidates. Each voter can only vote once, ensuring fair election practices. The application tracks voter details, candidates, and votes using a relational database.

Features
User Sign-Up: Voters can sign up by entering their ID number, name, year of birth, and password.
User Login: Voters can log in using their ID number and password.
Voting: After logging in, users can view a list of candidates and vote for their preferred one.
One Vote Per Voter: The app ensures that each voter can only vote once.
Admin Management: Admins can manage candidates and oversee voting.
Technologies Used
Backend:
Flask: Python-based microframework for building web applications.
SQLAlchemy: ORM for managing database models and queries.
Gunicorn: WSGI server to deploy the Flask app.
Frontend:
React: JavaScript library for building user interfaces.
HTML/CSS: Basic structure and styling of the application.
Database:
SQLite: Relational database for storing voter, candidate, and vote information.
Models
Voter: Represents a voter in the system.

Fields: id, name, year_of_birth, password, is_voted
Candidate: Represents a candidate for whom voters can vote.

Fields: id, name, party, image_url
Vote: Stores the relationship between voters and candidates.

Fields: id, voter_id, candidate_id, timestamp
Admin: Admins who can manage the election process.

Fields: id, username, password
Setup Instructions
Prerequisites
Python 3.x
Node.js & npm
SQLite

Backend Setup (Flask)
Clone the repository
git clone https://github.com/your-username/voting-app.git
cd voting-app

Set up a virtual environment and install dependencies:
pipenv install && pipenv shell
pip install -r requirements.txt

Initialize the database:
flask db init
flask db migrate
flask db upgrade

Run the Flask development server:
flask run

Frontend Setup (React)
Navigate to the client directory:
cd client

Install the frontend dependencies:
npm install

Start the React development server:
npm start

