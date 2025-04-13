# DestinID 🏝️
**Virtual Tourism Platform for Indonesia's Hidden Gems**

![DestinID Demo](https://via.placeholder.com/800x400.png?text=DestinID+Demo) *(Tambahkan screenshot aplikasi)*

## 📝 Deskripsi
DestinID adalah platform virtual tourism yang memanfaatkan teknologi 360° dan sistem rekomendasi berbasis AI untuk memperkenalkan destinasi wisata budaya Indonesia yang belum terekspos. Dibangun dengan:
- **Frontend**: React.js + Tailwind CSS
- **Backend**: Express.js + Firebase Firestore
- **Machine Learning**: Recommendation System (TF-IDF + Cosine Similarity)

## ✨ Fitur Utama
| Fitur                  | Deskripsi                                  |
|------------------------|--------------------------------------------|
| Virtual Tour 360°      | Eksplorasi destinasi secara interaktif     |
| Sistem Rekomendasi     | Rekomendasi destinasi mirip berdasarkan AI |
| Peta Interaktif        | Lokalisasi destinasi via Google Maps API   |
| Konten Budaya          | Artikel & video budaya lokal               |

## 🚀 Instalasi
### Prasyarat
- Node.js ≥ 18.x
- Python ≥ 3.10
- Akun Firebase

### Langkah-langkah
1. **Clone Repositori**
   ```bash
   git clone https://github.com/username/DestinID.git
   cd DestinID

**setup backend**
cd backend
npm install
# Buat file .env
echo "FIREBASE_DATABASE_URL=https://your-project.firebaseio.com" > .env

**setup Frontend**
cd ../frontend
npm install

**setup ML/machine learning**
cd ../ml
pip install -r requirements.txt



🔧 Konfigurasi Firebase
Download serviceAccountKey.json dari Firebase Console

Letakkan di folder backend

JANGAN COMMIT FILE INI KE GITHUB! Pastikan sudah ditambahkan ke .gitignore

🖥️ Menjalankan Aplikasi
Bagian	Perintah	Port
Backend	npm start (di folder backend)	5000
Frontend	npm run dev (di folder frontend)	5173
ML API	python app.py (di folder ml)	5001
Akses aplikasi via: http://localhost:5173

📚 Dokumentasi API
Daftar Destinasi (GET)

GET /api/destinations

Contoh respons:


[
  {
    "id": "borobudur",
    "name": "Candi Borobudur",
    "location": "Magelang, Jawa Tengah",
    "description": "Warisan Budaya UNESCO"
  }
]

**Tambah Destinasi (POST)**
POST /api/destinations
Body (JSON):
{
  "name": "Tana Toraja",
  "location": "Sulawesi Selatan"
}

🛠️ Tech Stack

front-end/back-end :
tailwind
express
React
Firebase
three
machine learning :
Python

👨💻 Tim Pengembang
Nama	Role
Jelove Daniel S. (Leader)	font-end/back-end
Nazwa Lendra Putri	Machine Learning
Suhendar Rohmanudin	Frontend
Matthew E. Pangemanan	Backend
Adilatunnisa	Frontend
📜 Lisensi
MIT License - Lihat LICENSE untuk detail

⚠️ Catatan Keamanan:

File serviceAccountKey.json tidak boleh dibagikan ke publik

Data destinasi diambil dari TripAdvisor & Google Maps (lengkap di ATTRIBUTION.md)


---

### Tips Tambahan:
1. **Customize**:
   - Ganti placeholder screenshot dengan gambar aktual
   - Tambahkan diagram arsitektur jika ada
   - Sesuaikan nama tim & tugas

2. **Untuk Presentasi**:
   - Tambahkan section "Demo" dengan link video
   - Buat badge CI/CD jika menggunakan GitHub Actions

3. **Versi Bahasa**:
   - Buat versi bilingual (EN/ID) jika diperlukan

README ini sudah mencakup semua aspek penting untuk proyek tim pemula sekaligus memenuhi standar dokumentasi yang profesional. 🚀


http://localhost:5000/api/ml/recommendations