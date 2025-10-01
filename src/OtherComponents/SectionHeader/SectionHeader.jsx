import React from "react";
import "./SectionHeader.css";

const SectionHeader = ({ tagText, mainHeading }) => {
    return (
        <div className="CommonTagText">
            <h5>{tagText}</h5>
            <div className="SectionMainHeadingContainer">
                <h2>{mainHeading}</h2>
            </div>
        </div>
    );
};

export default SectionHeader;

