import React, { useEffect, useState } from 'react';
import DestinationCard from '../components/DestinationCard';
import Recommendations from './Recommendations';
import { getDestinations } from './api';

const HomePage = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const data = await getDestinations();
        setDestinations(data.data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Explore Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            name={destination.attributes.name}
            description={destination.attributes.description}
          />
        ))}
      </div>

      {/* Tambahkan komponen rekomendasi */}
      <Recommendations />
    </div>
  );
};

export default HomePage;