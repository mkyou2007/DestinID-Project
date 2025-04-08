// filepath: c:\Users\danie\OneDrive\Documents\GitHub\DestinID-Project\frontend\src\pages\homePage.jsx
import DestinationCard from '../components/DestinationCard';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Explore Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Example DestinationCard */}
        <DestinationCard name="Candi Borobudur" description="Warisan Budaya UNESCO" />
        <DestinationCard name="Danau Toba" description="Keindahan Alam Sumatera Utara" />
      </div>
    </div>
  );
};

export default HomePage;