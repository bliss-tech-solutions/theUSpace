import React from "react";
import "./WorkingProcessSteps.css";
import SectionHeader from "../../OtherComponents/SectionHeader/SectionHeader";
import WorkingStepsCardData from "./WorkingStepsCardData";
const WorkingProcessSteps = () => {
    return (
        <div className="WorkingProcessStepsContainer PaddingSectionTop100" id="WorkingProcessSteps" >
            <div className="Container">
                <SectionHeader
                    tagText="Working Process Steps"
                    mainHeading="Working Process Steps"
                />
                <div className="GridCardsContainer PaddingSmallSectionsTop60">
                    {WorkingStepsCardData.map((item, index) => (
                        <div
                            key={item.id}
                            className="GridCardItem"
                            style={{ marginTop: `${index * 200}px` }}
                        // data-aos="fade-up"
                        // data-aos-delay={index * 100}
                        >
                            <div className="CardIcon">
                                <img src={item.image} alt={item.title} className="StepIcon" />
                            </div>
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkingProcessSteps;