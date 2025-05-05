import React   from "react";

import DriverHero from "../components/Merchantpage-components/MerchantHero";
import Footer from "../components/Homepage-components/footer";
import MerchantSection3 from "../components/Driverpage-components/DriverSection3";
import DriverSection2 from "../components/Merchantpage-components/Merchantsection2";
import MerchantSection1 from "../components/Merchantpage-components/merchantsection1";

const DriverPage: React.FC = () => {
  return (
    <div className="">
        <DriverHero/>
        <MerchantSection1/>
        <DriverSection2/>
        <MerchantSection3/>
        <Footer/>


      
    </div>
  );
}

export default DriverPage;