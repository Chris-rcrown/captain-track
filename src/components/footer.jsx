import React from 'react'
import Logo from '../design/CaptainTrack (1) (1) 2.png'
import NavBar from './navBar'
import { NavLink, Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import { companyLocation, contactSupport, footerNav } from '../data/footer'

const Footer = () => {
  return (
    <div className='bg-[#151515] text-white h-auto md:h-[538px] '>
      <div className='pt-[200px] md:pt-[223px] md:px-[80px] flex flex-col md:flex-row justify-between'>
        <div>

            <img src={Logo} alt="logo" className='' />
            <div className='md:mt-[72px] flex flex-col gap-[16px] py-[40px] md:py-0 md:gap-[12px] '>
                <p className='text-[20px] leading-[23.87px] font-semibold '>Follow us</p>
                <div className='flex gap-[6px] h-[32px] w-[108px]'>
                    <Link className='w-12 h-12  flex  items-center justify-center  rounded-full'>
                        <Icon icon="fa6-brands:instagram" className="text-white  bg-black text-3xl rounded-full hover: transition" />
                    </Link>
                    <Link className='w-12 h-12 flex items-center justify-center  rounded-full'>
                        <Icon icon="fa6-brands:facebook" className="text-white bg-black text-3xl rounded-full hover:" />
                    </Link>
                    <Link className='w-12 h-12 flex items-center justify-center  rounded-full'>
                        <Icon icon="fa6-brands:linkedin" className="text-white bg-black  text-3xl rounded-full hover: transition " />
                    </Link>
                </div>
            <p className='hidden md:flex align-bottom self-end pt-[80px]'>©️2025 CaptainTrack. All rights reserved. </p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row md:self-end '>
                <div className='w-[154px] flex flex-col gap-[16px] ' >
                    <h4 className='text-[20px] leading-[23.87px] font-bold '>Company</h4>
                    {footerNav.map((data,index)=> (
                        <div key={index}>
                            <p key={index}>
                                <NavLink to={data.link} >
                                    {data.title}
                                </NavLink>
                            </p>
                        </div>
                    ))}
                </div>
                <div className='w-[154px] flex flex-col gap-[16px] pt-[40px] md:pt-0 '>
                    <h4 className='text-[20px] leading-[23.87px] font-bold '>Location</h4>
                    {companyLocation.map((data,index)=>(
                        <div key={index}>
                            <p key={index}>
                                <NavLink to={data.link}>{data.title}</NavLink>
                            </p>
                        </div>
                    ))}
                </div>
                

                <div className='w-[219px] flex flex-col gap-[16px] '>
                    <h4 className='text-[20px] leading-[23.87px] font-bold pt-[40px] md:pt-0  '>Contact Support</h4>
                {contactSupport.map((data,index)=> ( 
                    <div  key={index}>
                        
                            <NavLink to={data.link}>
                                <p>{data.phone}</p>
                                <p>{data.email}</p>
                            </NavLink>
                        
                        
                    </div>
                ))}
                </div>
                <p className=' md:hidden align-bottom self-center py-[40px]'>©️2025 CaptainTrack. All rights reserved. </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
