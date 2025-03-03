import { navData } from "../data/navData"
import { NavLink } from "react-router-dom"
import React, { useState } from "react"
import Logo from '../design/CaptainTrack (1) (1) 1.png'
import hamburger from '../design/fi-sr-menu-burger.png'
import closeIcon from '../design/gridicons_cross.png'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className=" py-[16px] w-full">
      <div className="mx-auto max-w-[1440px]">
          <nav className="flex justify-between  ">
            <img className="w-auto h-[32px]" src={Logo} alt="Logo" />
            <ul className="hidden md:flex justify-around items-center gap-[32px] w-[591px] h-[42px]">
              {navData.map((data, index)=>( 
                <li key={index} className="flex last:bg-[#151515] text-[16px] leading-[20.24px] font-semibold last:text-white last:rounded-[8px] last:pt-[12px] last:pb-[12px] last:px-[24px] ">
                  <NavLink to={data.link}>{data.title}</NavLink>
                </li>
              ))} 
              </ul>
              <button className="md:hidden absolute right-6 " onClick={()=> setMenuOpen(!menuOpen)}>
                <img src={menuOpen ? closeIcon : hamburger} alt="Menu" />
              </button>
                {menuOpen && (
                    <div className="fixed inset-0 bg-[#F7B933]  gap-[32px] flex flex-col p-8 w-full h-[207px] z-50 
                      ">
                        <div className="flex justify-between items-center  ">
                             <img className="w-[174.32px] h-[28px]" src={Logo} alt="Logo" />
                             <button className="md:hidden absolute right-6 " onClick={()=> setMenuOpen(!menuOpen)}>
                             <img src={menuOpen ? closeIcon : hamburger} alt="Menu"  className="relative bottom-0 h-[24px] w-[24px] "/>
              </button>
                             
                        </div>

                  <ul className="md:hidden absolute top-19 right-1 w-full bg-[#F7B933] border-t p-[24px] " >

                    {navData.map((data, index)=>(
                      <li key={index} className="flex flex-col py-[16px] justify-center last:bg-[#151515] text-[16px] leading-[19.09px] font-semibold last:text-white last:rounded-[8px] last:pt-[12px] last:pb-[12px] last:px-[24px] last:w-[190px] last:h-[59px] ">
                        <NavLink to={data.link} onClick={()=>setMenuOpen(false)}>{data.title}</NavLink>
                      </li>
                    ))}

                  </ul>
                    </div>
                )}
          </nav>
      </div>
    </div>
  )
}

export default NavBar
