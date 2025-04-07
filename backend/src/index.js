const app = require('./app');

// Jalankan server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server berjalan di port ${process.env.PORT || 5000}`);
});