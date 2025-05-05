import React from "react";

import MerchantHero from "../components/Driverpage-components/DriverHero";
import MerchantSection1 from "../components/Merchantpage-components/merchantsection1";
import MerchantSection2 from "../components/Driverpage-components/Driversection2";
import MerchantSection3 from "../components/Driverpage-components/DriverSection3";
import Footer from "../components/Homepage-components/footer";



const MerchantPage: React.FC = () => {
  return (
    <div className="">
      <MerchantHero />
      <MerchantSection1/>
      <MerchantSection2/>
      <MerchantSection3/>
      <Footer/>
    </div>
  );
};

export default  MerchantPage;