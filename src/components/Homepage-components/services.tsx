import React from 'react';
import { serviceData } from '../../data/services';

// Define interface for service items
type ServiceItem = {
  pic: string;
  title: string;
  desc: string;
};

const Services: React.FC = () => {
  const services = serviceData as ServiceItem[];

  return (
    <div className="flex flex-col gap-[30px] md:p-[80px]">
      <div className="flex flex-col gap-[12px] items-center  ">
        <div className="justify-center self-center w-full md:w-[593px] h-[122px] text-center">
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[38.4px] md:leading-[48px]">
            Our Services
          </h2>
          <p className="w-[354px] md:w-[593px] md:leading-[31.2px] leading-[20.8px] text-[16px] md:text-[24px]">
            Book, track, and pay for essential services from ride-hailing to car washes all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:flex md:flex-wrap md:overflow-hidden md:gap-[40px] lg:flex lg:flex-wrap items-center justify-center w-[354px] md:w-[1200px] lg:w-[1440px] self-center">
          {services.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-[16px] w-[354px] md:w-[390px] lg:w-[406px] h-[459px]">
              <img src={item.pic} alt={item.title} className="w-[354px] md:w-[407px]" />
              <div>
                <h3 className="text-[22px] md:text-[28px] font-bold md:font-semibold leading-[33.4px]">
                  {item.title}
                </h3>
                <p className="text-[16px] md:text-[20px] leading-[26px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
