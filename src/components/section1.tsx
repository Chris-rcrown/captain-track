import React from 'react';
import Carousel from './carousel';
import Section1Pic from '../design/Property 1=Default.png';
import appStoreBadge from '../design/Mobile app store badge.png';
import googleStoreBadge from '../design/Mobile app store badge (1).png';
import { Link } from 'react-router-dom';

const slides = [
  '/src/design/Property 1=Default.png',
  '/src/design/Property 1=Default (1).png',
  '/src/design/Property 1=Default (2).png',
  '/src/design/image.png',
  
]

const Section1: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">

      {/* <Carousel images = {slides} autoplay = {true} autoplayInterval ={3000} /> */}
      <img
        className="pt-[72px] w-[338px] md:w-[1023px]"
        src={Section1Pic}
        alt="Section Illustration"
      />

      <div className="flex flex-col gap-[16px] mt-[32px] items-center">
        <p className="text-[30px] font-semibold">Order anything, anywhere.</p>

        <div className="flex gap-[16px]">
          <Link to="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={appStoreBadge} alt="Download on the App Store" />
          </Link>

          <Link to="https://play.google.com/store/apps?hl=en&pli=1" target="_blank" rel="noopener noreferrer">
            <img src={googleStoreBadge} alt="Get it on Google Play" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section1;
