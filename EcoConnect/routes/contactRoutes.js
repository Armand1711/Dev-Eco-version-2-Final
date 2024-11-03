// Import necessary modules
const express = require('express');
const ContactUs = require('../models/ContactUs'); // Adjust the path as necessary

// Create a router instance
const router = express.Router();

// POST route for submitting contact form
router.post('/contact', async (req, res) => {
    try {
        // Create a new ContactUs document with form data
        const contactMessage = new ContactUs({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });

        // Save the document to the database
        await contactMessage.save();

        // Send a success response
        res.status(201).json({ message: 'Contact request submitted successfully!' });
    } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Error submitting contact request', error });
    }
});

module.exports = router;
