const express = require('express');
const router = express.Router();
const axios = require('axios');

// GET rekomendasi destinasi dari FlaskAPI
router.get('/recommendations', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/api/recommendations');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching ML recommendations");
  }
});

module.exports = router;