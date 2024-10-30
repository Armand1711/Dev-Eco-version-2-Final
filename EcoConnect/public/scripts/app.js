const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../../config/db');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Serve static files from public folder
app.use(express.static('public'));

// Simple route to test the server
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Import donation routes
const donationRoutes = require('../../routes/donationRoutes');
app.use('/api/donations', donationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
