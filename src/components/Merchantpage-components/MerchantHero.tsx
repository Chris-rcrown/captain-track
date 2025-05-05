import React from 'react';
import NavBar from '../navBar';
// import HeroPhones from '../design/herophone-desktop.png';
import whiteLogo from '../../design/CaptainTrack2.png'

const MerchantHero: React.FC = () => {
  return (
    <div className="bg-[url('/src/design/drivermobile.png')] md:bg-[url('/src/design/driverhero.png')] bg-center md:bg-cover bg-no-repeat w-full mx-auto px-[16px] md:h-[447px]">
      <NavBar className= 'md:text-white' logoSrc={whiteLogo} downloadClassName='mt-2 px-4 py-2 bg-black md:bg-[#F5A800] text-white font-semibold md:text-black rounded' />

      <div className="flex mx-auto lg:max-w-[1440px] flex-col md:flex-row justify-between">
        <div className="pt-[130px]  w-[305px] h-[200px] md:pt-[130px] md:w-[634px] md:h-[216px] ">
          <h1 className="text-[36px] text-white md:text-[60px] w-[305px] md:w-[634px] leading-[39.6px] md:leading-[72px] font-bold">
            Run Your Service Business Smarter
          </h1>

          <p className="text-[20px] text-white leading-[23.87px] w-[305px] pt-[20px] md:text-[24px] md:leading-[28.64px] md:pt-[24px] md:w-[593px]">
            Book, track, and pay for essential services from the ride-hailing to car washes all in one place
          </p>

        </div>

        <div className="flex relative min-w-[329.27px] min-h-[331.22px] max-h-[598px] max-w-[594px]">
         
        </div>
      </div>
    </div>
  );
};

export default MerchantHero;
