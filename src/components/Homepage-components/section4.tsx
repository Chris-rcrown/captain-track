import React from 'react';
import { Link } from 'react-router-dom';
import appStoreBadge from '../../design/Mobile app store badge (1).png';
import playStoreBadge from '../../design/Mobile app store badge.png';

const Section4: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="relative top-[140px] bg-[url('/src/design/green-bg-mobile.svg')] lg:bg-[url('/src/design/Bg-3.png')] h-[227px] md:h-[353px] mx-auto max-w-[1440px] rounded-xl bg-center bg-cover bg-no-repeat w-[90vw] xl:w-[1440px] flex items-center justify-center">
        <div className="md:h-[274px] md:w-full flex items-center justify-center">
          <div className=" w-[286px] md:w-[600px] md:h-[114px] flex flex-col items-center text-center justify-center gap-[24px]">
            <h2 className="font-semibold text-[20px] leading-[28.8px] md:text-[42px] ">
              Order with CaptainTrack today
            </h2>
            <div className="mt-[20px] w-[286px] h-[40px] flex gap-[16px]">
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
