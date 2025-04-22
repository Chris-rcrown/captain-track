import React from 'react';
import { Link } from 'react-router-dom';
import appStoreBadge from '../design/Mobile app store badge (1).png';
import playStoreBadge from '../design/Mobile app store badge.png';

const Section4: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="relative top-[140px] bg-[url('/src/design/Bg-3.png')] h-[227px] md:h-[353px] mx-auto max-w-[1440px] rounded-xl">
        <div className="md:h-[274px] md:w-full md:mx-[80px] mt-[40px] md:pt-[80px] mx-[24px] md:px-[417px]">
          <div className="w-[354px] h-[227px] md:w-[447px] md:h-[114px] flex flex-col items-center text-center justify-center gap-[16px]">
            <h2 className="font-semibold text-[24px] leading-[28.8px] md:text-[42px] md:w-[500px]">
              All-in-One Convenience
            </h2>
            <div className="w-[286px] h-[40px] flex gap-[16px]">
              <Link to="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img src={appStoreBadge} alt="Download on the App Store" />
              </Link>
              <Link to="https://play.google.com/store/apps?hl=en&pli=1" target="_blank" rel="noopener noreferrer">
                <img src={playStoreBadge} alt="Get it on Google Play" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
