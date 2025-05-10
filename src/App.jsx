import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Policy from './components/Policy';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';
import MERNDevelopment from './pages/ServicesDeatils/MERNDevelopment';
import APIDevelopment from './pages/ServicesDeatils/APIDevelopment';
import SaaSDevelopment from './pages/ServicesDeatils/SaaSDevelopment';
import WebsiteDevelopment from './pages/ServicesDeatils/WebsiteDevelopment';
import WebsiteMaintenance from './pages/ServicesDeatils/WebsiteMaintenance';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/merndevelopment" element={<MERNDevelopment />} />
        <Route path="/apidevelopment" element={<APIDevelopment />} />
        <Route path="/saasdevelopment" element={<SaaSDevelopment />} />
        <Route path="/websitedevelopment" element={<WebsiteDevelopment />} />
        <Route path="/websitemaintenance" element={<WebsiteMaintenance />} />
      </Routes>
    </>
  );
}

export default App;
