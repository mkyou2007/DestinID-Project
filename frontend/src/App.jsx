import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/homePage';
import DestinationDetail from './pages/DestinationDetail';
import './App.css';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
