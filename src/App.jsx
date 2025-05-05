import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Policy from './components/Policy';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </>
  );
}

export default App;
