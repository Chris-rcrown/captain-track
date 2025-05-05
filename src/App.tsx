import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import MerchantPage from './pages/MerchantPage';
import DriverPage from './pages/DriverPage';
import Faq from './pages/Faq';
import Support from './pages/support';
import Company from './pages/company';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'element= { <LandingPage />} />
        <Route path='/driver'element= { <MerchantPage />} />
        <Route path='/merchant'element= { <DriverPage />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/support' element={<Support />} />
        <Route path='/company' element={<Company />} />
      </Routes>
    </Router>
  );
};

export default App;
