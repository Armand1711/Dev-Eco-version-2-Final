const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// POST - Create a donation
router.post('/', async (req, res) => {
  try {
    const donation = new Donation(req.body);
    const savedDonation = await donation.save();
    res.status(201).json(savedDonation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET - Retrieve all donations
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
