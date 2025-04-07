const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://destinid-be458-default-rtdb.firebaseio.com"
});

const db = admin.firestore();
module.exports = db;