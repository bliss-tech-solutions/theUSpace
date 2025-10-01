import React from "react";
import "./HeroRoutes.css";
import HomeHero from "../HomeHero/HomeHero";
import OurProductsDesignsHome from "../OurProductsDesignsHome/OurProductsDesignsHome";
import AboutHome from "../AboutHome/AboutHome";
import TrustedPartners from "../../OtherComponents/TrustedPartners/TrustedPartners";
import HomePageImageStackAnimation from "../HomePageImageStackAnimation/HomePageImageStackAnimation";
import FAQS from "../../OtherComponents/FAQS/FAQS";
const HeroRoutes = () => {
    return (
        <div>
            <HomeHero />
            <AboutHome />
            <OurProductsDesignsHome />
            <TrustedPartners />
            <HomePageImageStackAnimation />
            <FAQS />
        </div>
    );
};

export default HeroRoutes;