const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
require('dotenv').config();


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://destinid-be458-default-rtdb.firebaseio.com"
});


const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 menit
    max: 100 // Maksimal 100 request per windowMs
});
app.use(limiter);


const db = admin.firestore();
const app = express();

// middleware
app.use(cors());
app.use(express.json());


// Endpoint destinations
app.get('/api/destinations', async (req, res) => {
    try {
        const snapshot = await db.collection('destinations').get();
        const destinations = [];
        snapshot.forEach(doc => {
            destinations.push({ id: doc.id, ...doc.data() });
        });
        res.status(200).json(destinations);
    } catch (error) {
        res.status(500).json({ error: "Gagal mengambil data destinasi!" });
    }
});

app.post('/api/destinations', async (req, res) => {
    try {
        const { name, location, tags } = req.body;

        // Validasi input
        if (!name || !location || !tags) {
            return res.status(400).json({ error: "Semua field wajib diisi!" });
        }

        const docRef = await db.collection('destinations').add({
            name,
            location,
            tags,
            rating: 0,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        res.status(201).json({ id: docRef.id, message: 'Destinasi ditambahkan!' });
    } catch (error) {
        res.status(500).json({ error: "Gagal menambahkan destinasi!" });
    }
});


// error handling middleware
app.use((req, res) => {
    res.status(404).json({ error: "Endpoint tidak ditemukan!" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Terjadi kesalahan server!" });
});

// Jalankan server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server berjalan di port ${process.env.PORT || 5000}`);
});

