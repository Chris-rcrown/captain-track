import React from 'react';
import Logo from '../design/CaptainTrack2.png'
import { NavLink, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { companyLocation, contactSupport, footerNav } from '../data/footer';

// Type definitions for footer link items
interface NavItem {
  title: string;
  link: string;
}

interface SupportItem {
  phone: string;
  email: string;
  link: string;
}

const Footer: React.FC = () => {
  return (
    <div className="bg-[#151515] text-white h-auto md:h-[538px]">
      <div className="pt-[200px] md:pt-[223px] md:px-[80px] flex flex-col md:flex-row justify-between">
        <div>
          <img src={Logo} alt="CaptainTrack Logo" />

          <div className="md:mt-[72px] flex flex-col gap-[16px] py-[40px] md:py-0 md:gap-[12px]">
            <p className="text-[20px] leading-[23.87px] font-semibold">Follow us</p>

            <div className="flex gap-[6px] h-[32px] w-[108px]">
              <Link to="#" className="w-12 h-12 flex items-center justify-center rounded-full">
                <Icon icon="fa6-brands:instagram" className="text-white bg-black text-3xl rounded-full" />
              </Link>
              <Link to="#" className="w-12 h-12 flex items-center justify-center rounded-full">
                <Icon icon="fa6-brands:facebook" className="text-white bg-black text-3xl rounded-full" />
              </Link>
              <Link to="#" className="w-12 h-12 flex items-center justify-center rounded-full">
                <Icon icon="fa6-brands:linkedin" className="text-white bg-black text-3xl rounded-full" />
              </Link>
            </div>

            <p className="hidden md:flex self-end pt-[80px]">
              ©️2025 CaptainTrack. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:self-end">
          <div className="w-[154px] flex flex-col gap-[16px]">
            <h4 className="text-[20px] leading-[23.87px] font-bold">Company</h4>
            {footerNav.map((item: NavItem, idx: number) => (
              <NavLink key={idx} to={item.link} className="block">
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="w-[154px] flex flex-col gap-[16px] pt-[40px] md:pt-0">
            <h4 className="text-[20px] leading-[23.87px] font-bold">Location</h4>
            {companyLocation.map((item: NavItem, idx: number) => (
              <NavLink key={idx} to={item.link} className="block">
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="w-[219px] flex flex-col gap-[16px]">
            <h4 className="text-[20px] leading-[23.87px] font-bold pt-[40px] md:pt-0">
              Contact Support
            </h4>
            {contactSupport.map((item, idx) => (
              <NavLink key={idx} to={item.link} className="block">
                <p>{item.phone}</p>
                <p>{item.email}</p>
              </NavLink>
            ))}
          </div>

          <p className="md:hidden self-center py-[40px]">
            ©️2025 CaptainTrack. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
