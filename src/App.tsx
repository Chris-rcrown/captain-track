import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Hero from './components/Hero';
import Section1 from './components/Section1';
import Services from './components/Services';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Hero />
        <Section1 />
        <Services />
        <Section3 />
        <Section4 />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
