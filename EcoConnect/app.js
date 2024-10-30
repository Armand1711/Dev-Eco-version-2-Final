const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const donationRoutes = require('./routes/donationRoutes'); // Import donation routes

dotenv.config(); // Load environment variables from .env file

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json()); // Middleware to parse JSON

// Use donation routes
app.use('/api/donations', donationRoutes); // Base route for donation API

// Simple route to test the server
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
