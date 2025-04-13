// pages/DestinationDetail.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDestinations, getRecommendations } from '../../api';

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [recommendations, setRecommendations] = useState([]); // State untuk rekomendasi

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const data = await getDestinations();
        const selectedDestination = data.data.find((d) => d.id === id);
        setDestination(selectedDestination);
      } catch (error) {
        console.error('Error fetching destination:', error);
      }
    };

    const fetchRecommendations = async () => {
      try {
        const data = await getRecommendations();
        setRecommendations(data); // Simpan data rekomendasi
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchDestination();
    fetchRecommendations(); // Panggil fungsi untuk mengambil rekomendasi
  }, [id]);

  if (!destination) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold">{destination.attributes.name}</h1>
      <p>{destination.attributes.description}</p>

      {/* Tampilkan rekomendasi */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recommended Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendations.map((rec) => (
            <div key={rec.id} className="p-4 border rounded shadow">
              <h3 className="text-xl font-semibold">{rec.name}</h3>
              <p>{rec.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;