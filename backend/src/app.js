const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();

// Set up rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter); // Apply rate limiting middleware

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // URL frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));
app.use(express.json());

// Routes
const destinasiRoutes = require('./routes/destinasiRoutes');
app.use('/api/destinasi', destinasiRoutes);

const mlRoutes = require('./routes/mlRoutes');
app.use('/api/ml', mlRoutes);

// Test endpoint
app.get('/', (req, res) => {
  res.send('Backend DestinID Ready!');
});



module.exports = app;