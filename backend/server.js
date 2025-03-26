const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
require('dotenv').config();


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://destinid-be458-default-rtdb.firebaseio.com"
});


const db = admin.firestore();
const app = express();
app.use(cors());
app.use(express.json());

// Contoh endpoint
app.get('/api/destinations', async (req, res) => {
    try {
        const snapshot = await db.collection('destinations').get();
        const destinations = [];
        snapshot.forEach(doc => {
            destinations.push({ id: doc.id, ...doc.data() });
        });
        res.json(destinations);
    } catch (error) {
        res.status(500).json({ error: "Gagal mengambil data!" });
    }
});

// Jalankan server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server berjalan di port ${process.env.PORT || 5000}`);
});