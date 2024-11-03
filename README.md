EcoConnect
EcoConnect is a MERN stack application dedicated to promoting environmental conservation and sustainability. Users can submit donation requests, manage projects, and reach out through the contact form.

Table of Contents
Features
Installation
Usage
API Endpoints
Technologies Used
Contributing

Features
Donations: Allows users to submit their name, email, and donation amount.
Contact Us: Users can send inquiries directly to EcoConnect’s team for feedback or questions.
Installation
Prerequisites
Node.js (version 12 or later)
MongoDB (either locally or cloud-based)
Setup Instructions
Clone the Repository

bash
Copy code
git clone (https://github.com/Armand1711/Dev-Eco-version-2-Final)
cd EcoConnect
Install Dependencies

bash
Copy code
npm install
Set Up MongoDB

Ensure MongoDB is running locally or set up a MongoDB Atlas cluster.
Update the MongoDB URI in config/db.js or wherever the MongoDB URI is defined.
Run the Server

bash
Copy code
npm start
The server will start at http://localhost:3000.

Usage
Navigate to http://localhost:3000 (or wherever the app is hosted).
Use the provided API endpoints to submit donations, manage projects, and reach out via the contact form.
API Endpoints
Donations
POST /api/donations: Submit a donation request.
Body: { "name": "Your Name", "email": "Your Email", "amount": "Donation Amount" }
Contact Us
POST /api/contact: Submit a contact message.
Body: { "name": "Your Name", "email": "Your Email", "message": "Your Message" }
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB (with Mongoose)
Others: Git for version control
Contributing
Armand Naude 231181
