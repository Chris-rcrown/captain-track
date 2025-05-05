import React from "react";
import NavBar from "../navBar";
import Support from "../../pages/support";

const SupportHero: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] w-full px-4">
      <NavBar downloadClassName='px-4 py-2 bg-black md:bg-[#F5A800] text-white md:text-black rounded' />
      <div className="flex flex-col lg:flex-row items-start md:items-center justify-between max-w-[1440px] mx-auto py-4 sm:py-10 md:py-20 gap-5">
        <h1 className="text-4xl md:text-6xl font-bold max-w-2xl w-[305px] sm:w-auto text-left sm:text-center lg:text-left">
        How can we help?
        </h1>
        <p className="text-lg sm:text-2xl md:max-w-xl text-left sm:text-center lg:text-left">
        We’re here to help. Whether you're a driver, vehicle owner, or fleet manager, reach out and we’ll respond quickly.
        </p>
      </div>
    </div>
  );
};

export default SupportHero;
