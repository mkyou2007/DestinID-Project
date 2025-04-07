const db = require('../config/firebase');
const admin = require('firebase-admin');

// Get all destinations with pagination
const getDestinations = async (req, res) => {
  const { page = 1, limit = 10 } = req.query; // Pagination parameters
  try {
    const snapshot = await db.collection('destinations')
      .offset((page - 1) * limit)
      .limit(parseInt(limit))
      .get();
    const destinations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch destinations: " + error.message });
  }
};

// Add a new destination with validation
const addDestination = async (req, res) => {
  try {
    const {
      name,
      description,
      coordinates,
      facilities,
      history,
      culturalHeritage,
      umkm
    } = req.body;

    // Validate required fields
    if (!name || !description || !coordinates || !facilities || !history || !culturalHeritage || !umkm) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const docRef = await db.collection('destinations').add({
      name,
      description,
      coordinates,
      facilities,
      history,
      culturalHeritage,
      umkm,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(201).json({ id: docRef.id, message: 'Destination added successfully!' });
  } catch (error) {
    res.status(500).json({ error: "Failed to add destination: " + error.message });
  }
};

module.exports = {
  getDestinations,
  addDestination
};