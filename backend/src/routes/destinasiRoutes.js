const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const destinasiController = require('../controllers/destinasiController');

// Get all destinations with pagination
router.get('/', destinasiController.getDestinations);

// Add a new destination with validation
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('coordinates.lat').isFloat().withMessage('Latitude must be a number'),
    body('coordinates.lng').isFloat().withMessage('Longitude must be a number'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    destinasiController.addDestination(req, res);
  }
);

// Error handling middleware
router.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found!" });
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error!" });
});

module.exports = router;