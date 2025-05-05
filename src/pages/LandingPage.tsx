import React from 'react';
import Hero from '../components/Homepage-components/hero';
import Section1 from '../components/Homepage-components/section1';
import Services from '../components/Homepage-components/services';
import Section3 from '../components/Homepage-components/section3';
import Section4 from '../components/Homepage-components/section4';
import Footer from '../components/Homepage-components/footer';


const LandingPage: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <Section1 />
      <Services />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}   
export default LandingPage;