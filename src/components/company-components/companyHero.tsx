import React from 'react';
import NavBar from '../navBar';
import CompanyImage from '../../design/company.png';
import companyImage from '../../design/captaintrackMob.png'
import companyImage2 from '../../design/captaintrackMobile.png'

const CompanyHero: React.FC = () => {
  return (
    <div className="bg-[#FFFFF] w-full mx-auto px-[16px] md:h-[1100px]">
      <NavBar downloadClassName=' mt-2 px-4  py-2 bg-black text-white font-semibold md:bg-[#F5A800] md:text-black rounded' />

      <div className="flex mx-auto lg:max-w-[1440px] flex-col md:flex-row justify-between ">
        <div className="pt-[14px] w-[305px] h-[160px] md:pt-[130px] md:w-[634px] md:h-[216px]">
          <h1 className="text-[36px] md:text-[60px] w-[305px] md:w-[634px] leading-[39.6px] md:leading-[72px] font-bold">Built for the People Who Keep Services Moving
          </h1>

        </div>

        <div className="flex relative md:min-w-[329.27px] md:min-h-[331.22px] md:max-h-[598px] max-w-[594px] md:pt-[130px] md:w-[634px] md:h-[216px] ">
            <p className='mb md:text-[26px] md:leading-[31.2px] md:pt-[24px] md:w-[593px]'>
                Captain Track is the smarter way to manage your drivers, track service vehicles, and ensure every job gets done on time and with confidence.
            </p>
        </div>
    </div>
    <div className='flex flex-col justify-center items-center md:my-[40px] md:max-w-[1440px] md:mx-auto'>

            <img src={companyImage} alt="" className=' hidden md:flex md:h-[437px] md:w-[1440px]  md:mt-[30px] '/>
            <img src={companyImage2} alt='' className=' md:hidden  w-[354px] h-[338px] my-[30px] '/>

        <div className='flex justify-start items-start self-start'>
            <p className='md:text-[24px] md:w-[913px] my-[25px] md:my-[40px]   '>We’re on a mission to make service delivery seamless and stress-free for business owners. From gas delivery to car wash and home cleaning, Captain Track empowers service providers with real-time tools to monitor their vehicles, support their drivers, and grow their businesses.</p>
        </div>
    </div>
    </div>
  );
};

export default CompanyHero;
