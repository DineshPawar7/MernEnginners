import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Policy from './components/Policy';

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </div>
  );
}

export default App;
