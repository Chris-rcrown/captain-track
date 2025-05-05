import React from "react";
import Footer from "../components/Homepage-components/footer";
import Section4 from "../components/Homepage-components/section4";
import Services from "../components/Homepage-components/services";
import CompanyHero from "../components/company-components/companyHero";



const Company: React.FC = () => {
    return (
        <div>
           
            <CompanyHero/>
            <Services/>
            <Section4/>
            <Footer/>
        </div>
    );
}
export default Company;