// filepath: c:\Users\danie\OneDrive\Documents\GitHub\DestinID-Project\frontend\src\components\DestinationCard.jsx
const DestinationCard = ({ name, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default DestinationCard;