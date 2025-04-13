import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DestinationCard from '../components/DestinationCard';

const API_URL = 'http://localhost:1337/api'; // Strapi CMS
const BACKEND_URL = 'http://localhost:5000/api'; // Express.js

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const backendApi = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getDestinations = async () => {
  const response = await api.get('/destinations?populate=*');
  return response.data;
};

export const getRecommendations = async () => {
  const response = await backendApi.get('/ml/recommendations');
  return response.data;
};

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
    </div>
  );
};

export default HomePage;