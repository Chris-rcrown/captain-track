import NavBar from "./navBar";
import HeroPhones from '../design/Group 1.png'


const Hero = () => {
  return (
    <div className="bg-[#F7B933] w-full mx-auto px-[16px] md:h-[613px]  ">
        <NavBar/>
        <div className="flex mx-auto  max-w-[1440px]  flex-col md:flex-row justify-between" >
            <div className=" pt-[14px] w-[305px] h-[200px]   md:pt-[130px] md:w-[634px] md:h-[216px] ">

                <h1 className="text-[36px] md:text-[60px] w-[305px] md:w-[634px] leading-[39.6px] md:leading-[72px] font-bold  ">Your All-in-One On-Demand Services Platform</h1>
                <p className="text-[20px] leading-[23.87px] w-[305px] pt-[20px] md:text-[24px] md:leading-[28.64px] md:pt-[24px] md:w-[593px] ">Book, track, and pay for essential services from the ride-hailing to car washes all in one place</p>
                <br />
             <div className="pb-[250px] md:pb-0 md:w-[1440px] border-b-2  " />
            </div>
            <div className="flex relative min-w-[329.27px] min-h-[331.22px] max-h-[598px] max-w-[594px]">
              <img src={HeroPhones} alt="phones" className="  mt-[50px] md:mt-[83px]  h-auto w-auto  "/>
            </div>
            
        </div>
    </div>
  )
}

export default Hero
