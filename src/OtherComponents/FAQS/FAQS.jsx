import React from "react";
import "./FAQS.css";
import SectionHeader from "../../OtherComponents/SectionHeader/SectionHeader";
import FAQSData from "./FAQSData";
import { Collapse } from "antd";

const FAQS = () => {
    const items = FAQSData.map((item, index) => ({
        key: index.toString(),
        label: <h4 className="faq-question">{item.question}</h4>,
        children: <p className="faq-answer">{item.answer}</p>
    }));

    return (
        <div className="PaddingSectionTop100" id="FAQS">
            <div className="Container">
                <SectionHeader
                    tagText="FAQS"
                    mainHeading="Frequently Asked Questions"
                />
                <div className="FAQSContainer PaddingSmallSectionsTop60">
                    <Collapse
                        accordion
                        defaultActiveKey={['0']}
                        items={items}
                        expandIconPosition="end"
                    />
                </div>
            </div>
        </div>
    );
};

export default FAQS;