import React from 'react'
import tradeCrypto from '../design/Black iPhone 16e mockup front view 1.png'
import tradeCryptoMobiile from '../design/Black iPhone 16e mockup front mobile-view 1.png'
import { AboutCapTrck } from '../data/services'
import { Link } from 'react-router-dom'

const Section3 = () => {
  return (
    <div className='  w-full md:self-center'>
        <div className= "bg-[url('/src/design/Bg.png')] w-[402px] h-[663px] md:w-auto md:h-[990px] md:mx-auto max-w-[1440px] md:pt-[80px] flex flex-col text-center  rounded-lg items-center ">

            <div className='mt-[64px] md:mt-0 md:w-[840px] h-[228px] flex flex-col gap-[32px]  md:self-center text-white items-center justify-center'>
                <div className='flex flex-col gap-[4px] w-[354px] text-center items-center '>
                    <p className='text-[16px] md:text-[18px] leading-[19.2px] md:leading-[21.6px] '>About CaptainTrack</p>
                    <h2 className='leading-[35.2px] md:leading-[62.4px] text-[32px] md:text-[52px] w-[248px] md:w-[840px] md:font-bold '>Making services easy to reach</h2>
                    <p className='text-[16px] md:text-[20px] leading-[22.4px] md:leading-[28px] md:indent-[14px] w-[354px] md:w-[840px] '>CaptainTrack is a multi-service platofrm offering ride-hailing, car washes, dry cleaning, towing, gas delivery, house moving, and home cleaning-all accessible with a tap.</p>
                </div>
                <Link>
                    <button  className='cursor-pointer bg-white py-[12px] px-[24px] text-[20px] text-[#242424] leading-[24px] rounded-xl items-center justify-center self-center font-semibold '>
                        Our Mission
                    </button>
                </Link>
            </div>
            <img src={tradeCrypto}  alt="" className='hidden md:flex w-[429.39px] h-[869px] self-center mt-[56px]' />
            <img src={tradeCryptoMobiile} alt="" className='md:hidden w-[241px] h-[487px] self-center mt-[50px]' />
        </div>
        <div className='mx-auto max-w-[1440px]'>
            <div className='flex flex-col pt-[80px] md:py-0 gap-[24px] mt-[120px] md:gap-[80px]  md:w-auto self-center'>
                    {AboutCapTrck.map((data,index)=> (
                        <div key={index} className='flex flex-col md:flex-row justify-between md:last:flex-row-reverse gap-[24px] md:gap-[17px] items-center   '>
                            <div className='w-[354px] md:w-[614px] rounded-lg'>
                                <img src={data.pic} alt="" className=''/>
                            </div>
                            <div className='flex flex-col gap-[8px] w-[354px] md:w-[549px] md:h-[279px]'>
                                <h2 className='text-[24px] leading-[28.8px]   md:text-[48px] md:leading-[57.6px] font-bold '>{data.title}</h2>
                                <p className='text-[16px] md:text-[24px] leading-[20.8px] md:leading-[31.2px] md:h-[155px] '>{data.desc}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Section3 
