import React from "react";
import "./WhyChooseUs.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import WhyChooseUsData from "./WhyChooseUsData";
import ViewportRevealImage from "../ViewportRevealImage/ViewportRevealImage";

const WhyChooseUs = () => {
    return (
        <div className="WhyChooseUsContainer PaddingSectionTop100" id="WhyChooseUs">
            <div className="Container">
                <SectionHeader
                    tagText="Why Choose Us"
                    mainHeading="Why Choose Us"
                />
                <div className="WhyChooseGridContainer PaddingSmallSectionsTop60">
                    <div className="WhyChooseGridItemImageContainer">
                        <ViewportRevealImage
                            src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Interior Design"
                            revealId="why-choose-us-image"
                        />
                    </div>
                    <div className="WhyChooseGridItemDataContainer">
                        {WhyChooseUsData.map((item, index) => (
                            <div key={index}>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;