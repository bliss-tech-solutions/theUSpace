import React from "react";
import "./HeroRoutes.css";
import HomeHero from "../HomeHero/HomeHero";
import OurProductsDesignsHome from "../OurProductsDesignsHome/OurProductsDesignsHome";
import AboutHome from "../AboutHome/AboutHome";
const HeroRoutes = () => {
    return (
        <div>
            <HomeHero />
            <AboutHome />
            <OurProductsDesignsHome />
        </div>
    );
};

export default HeroRoutes;