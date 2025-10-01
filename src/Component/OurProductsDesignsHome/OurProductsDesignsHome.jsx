import React, { useState, useEffect } from "react";
import "./OurProductsDesignsHome.css";
import SectionHeader from "../../OtherComponents/SectionHeader/SectionHeader";
import CategoriesData from "./CategoriesData";

const OurProductsDesignsHome = () => {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        // Initialize AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true
            });
        }
    }, []);

    const handleTabHover = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="PaddingSectionTop100" id="OurProductsDesignsHome">
            <div className="Container">
                <SectionHeader
                    tagText="We Work With"
                    mainHeading="Our Products Designs"
                />
                <div
                    className="OurProductsDesignsHomeContainer PaddingSmallSectionsTop60"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="DesignsGridContainer">
                        <div>
                            <div className="CategoriesNamesContainer">
                                {CategoriesData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={activeTab === index ? 'active' : ''}
                                        onMouseEnter={() => handleTabHover(index)}
                                    >
                                        <h4>{item.categoryName}</h4>
                                        {activeTab === index && (
                                            <div className="TabDescriptionContainer">
                                                <p>{item.description}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="BackgroundShowOverlayContainer">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProductsDesignsHome;