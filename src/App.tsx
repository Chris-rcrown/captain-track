import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Hero from './components/hero';
import Section1 from './components/section1';
import Services from './components/services';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Footer from './components/footer';

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
