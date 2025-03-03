import React from 'react'
import Section1pic from '../design/Property 1=Default.png'
import appStore from '../design/Mobile app store badge.png'
import googleStore from '../design/Mobile app store badge (1).png'
import { Link } from 'react-router-dom'


const Section1 = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className='pt-[72px] w-[338px] md:w-[1023px] ' src={Section1pic} alt="Section-1-pic" />
      <div className='flex flex-col gap-[16px] mt-[32px] items-center'>
        <p className='text-[30px] font-semibold '>Order anything, anywhere.</p>
        <div className='flex gap-[16px]   '>
            <Link>
                <img src={appStore} alt="appStore" />
            </Link>
            <Link>
                <img src={googleStore} alt="playStore"/>
            </Link>
        </div>
      </div>

    </div>
  )
}

export default Section1

