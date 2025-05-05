import React from "react";
import Section4 from "../components/Homepage-components/section4";
import Footer from "../components/Homepage-components/footer";
import SupportHero from "../components/support-components/supportHero";
import SupportMain from "../components/support-components/supportMain";



const Support: React.FC = () => {
    return (
        <div className="">
            <SupportHero/>
            <SupportMain/>
            <Section4/>
            <Footer/>
        </div>
    );
}
export default Support;