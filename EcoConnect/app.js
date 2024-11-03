const express = require('express');
const connectDB = require('./config/db'); 
const donationRoutes = require('./routes/donationRoutes'); 
const contactRoutes = require('./routes/contactRoutes'); 
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/donations', donationRoutes);
app.use('/api', contactRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
