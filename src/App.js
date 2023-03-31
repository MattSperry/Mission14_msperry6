import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import MovieCollection from './pages/movieCollection';
import Podcast from './pages/podcast';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movieCollection" element={<MovieCollection />} />
        <Route path="/podcast" element={<Podcast />} />
      </Routes>
    </Router>
  );
}

export default App;
