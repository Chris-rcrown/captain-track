import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../design/CaptainTrack1.png';
import hamburger from '../design/fi-sr-menu-burger.png';
import closeIcon from '../design/gridicons_cross.png';
import { navData } from '../data/navData';
import DownloadButton from './DownloadButton';

// Type for navigation items
 export interface NavItem {
  title: string;
  link: string;
}

export interface NavBarProps {
  className?: string;
  logoSrc? : string;
  downloadLabel?: string;
  downloadClassName?: string;
}

const NavBar: React.FC<NavBarProps> = ({ 
  className = 'text-black', logoSrc = Logo
, downloadLabel = 'Download App', downloadClassName = 'px-4 py-2 bg-black text-white rounded'
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const items = navData as NavItem[];

  return (
    <div className={`py-[16px] w-full bg-transparent ${className}`}>
      <div className="mx-auto max-w-[1440px]">
        <nav className="flex justify-between">
          <NavLink to= '/'>
            <img className="w-auto h-[32px]" src={logoSrc} alt="Logo" />
          </NavLink>

          {/* Desktop menu */}
          <ul className="hidden lg:flex justify-around items-center gap-[32px] w-[591px] h-[42px]">
            {items.map((item, idx) => (
              <li key={idx} className="text-[16px] leading-[20.24px] font-semibold">
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            ))}
            {/* your Download button */}
            <li>
              <DownloadButton 
                label={downloadLabel}
                className={downloadClassName} 
              />
            </li>
          </ul>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden absolute right-6"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <img src={menuOpen ? closeIcon : hamburger} alt="Menu icon" className="h-[24px] w-[24px]" />
          </button>

          {/* Mobile menu drawer */}
          {menuOpen && (
            <div className="fixed inset-0 bg-[#F7B933] flex flex-col p-8 w-full h-[207px] z-50 gap-[32px]">
              <div className="flex justify-between items-center">
                <img className="w-[174.32px] h-[28px]" src={Logo} alt="Logo" />
                <button
                  className="lg:hidden"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <img src={closeIcon} alt="Close icon" className="h-[24px] w-[24px]" />
                </button>
              </div>

              <ul className="flex flex-col bg-[#F7B933] w-full border-t p-[24px]">
                {items.map((item, idx) => (
                  <li
                    key={idx}
                    className="py-[16px] text-[16px] leading-[19.09px] font-semibold"
                  >
                    <NavLink to={item.link} onClick={() => setMenuOpen(false)}>
                      {item.title}
                    </NavLink>
                  </li>
                ))}
                {/* your Download button */}
            <li>
              <DownloadButton 
                label={downloadLabel}
                className={downloadClassName} 
              />
            </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
