// pages/DestinationDetail.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/destinasi/${id}`);
        setDestination(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!destination) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">DestinID</h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Judul & Deskripsi */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
          <p className="text-gray-600 text-lg">{destination.description}</p>
        </section>

        {/* Fasilitas dengan Ikon */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Fasilitas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destination.facilities.map((facility, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center">
                <i className={`fas ${facility.icon} text-blue-500 mr-3`}></i>
                <span>{facility.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Peta Interaktif */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Lokasi</h2>
          <div className="h-96 rounded-lg overflow-hidden">
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
              <GoogleMap
                mapContainerClassName="w-full h-full"
                center={destination.coordinates}
                zoom={14}
              >
                <Marker position={destination.coordinates} />
              </GoogleMap>
            </LoadScript>
          </div>
        </section>

        {/* Sejarah */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Sejarah</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">{destination.history.title}</h3>
            <p className="text-gray-600 mb-4">{destination.history.subtitle}</p>
            <img 
              src={destination.history.image} 
              alt="Sejarah" 
              className="w-full h-64 object-cover rounded"
            />
          </div>
        </section>

        {/* Peninggalan Budaya */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Peninggalan Budaya</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destination.culturalHeritage.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.subtitle}</p>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-32 object-cover rounded"
                />
              </div>
            ))}
          </div>
        </section>

        {/* UMKM */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">UMKM Lokal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destination.umkm.map((business, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold mb-2">{business.name}</h3>
                <p className="text-gray-600 text-sm">{business.description}</p>
                <div className="mt-3 flex items-center">
                  <i className="fas fa-store mr-2 text-green-500"></i>
                  <span className="text-sm">{business.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 DestinID. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DestinationDetail;