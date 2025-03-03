import React from 'react'
import { serviceData } from '../data/services'


const Services = () => {
  return (
    <div className='flex flex-col gap-[30px] md:p-[80px]'>
        <div className=' flex flex-col gap-[12px] items-center ' >

            <div className='justify-center self-center w-full md:w-[593px] h-[122px] text-center '>
                <h2 className='text-[32px] md:text-[40px] font-bold leading-[38.4px] md:leading-[48px]  '>Our Services</h2>
                <p className='w-[354px] md:w-[593px] md:leading-[31.2px] leading-[20.8px] text-[16px] md:text-[24px] '>Book, track, and pay for essential services from the ride-hailing to car washes all in one place</p>
            </div>
            <div className='grid grid-cols-1 md:flex md:flex-wrap md:overflow-hidden  md:gap-[40px] items-center justify-center w-[354px] md:w-[1440px] self-center'>
                    {serviceData.map((data,index)=>(
                    <div key={index} className='flex flex-col gap-[16px] w-[354px] md:w-[406px] h-[459px] '>
                        <img src={data.pic} alt="images" className='w-[354px] md:w-[407px] '  />
                        <div>
                            <h3 className='text-[22px] md:text-[28px] font-bold md:font-semibold leading-[33.4px] '>{data.title}</h3>
                            <p className='text-[16px] md:text-[20px] leading-[26px] '>{data.desc}</p>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Services
