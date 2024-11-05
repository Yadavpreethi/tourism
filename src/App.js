import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ImageCarousel from './components/ImageCarousel';
import Footer from './components/footer';
import DestinationDetail from './components/DestinationDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:name" element={<DestinationDetail />} />
        </Routes>
        <ImageCarousel />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
