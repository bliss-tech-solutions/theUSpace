import React from "react";
import "./TrustedPartners.css";
// import SectionHeader from "../SectionHeader/SectionHeader";

const TrustedPartners = () => {
    const partners = [
        {
            id: 1,
            name: "Partner 1",
            logo: "https://logo.clearbit.com/google.com"
        },
        {
            id: 2,
            name: "Partner 2",
            logo: "https://logo.clearbit.com/microsoft.com"
        },
        {
            id: 3,
            name: "Partner 3",
            logo: "https://logo.clearbit.com/apple.com"
        },
        {
            id: 4,
            name: "Partner 4",
            logo: "https://logo.clearbit.com/amazon.com"
        },
        {
            id: 5,
            name: "Partner 5",
            logo: "https://logo.clearbit.com/meta.com"
        },
        {
            id: 6,
            name: "Partner 6",
            logo: "https://logo.clearbit.com/netflix.com"
        },
        {
            id: 7,
            name: "Partner 7",
            logo: "https://logo.clearbit.com/tesla.com"
        },
        {
            id: 8,
            name: "Partner 8",
            logo: "https://logo.clearbit.com/spotify.com"
        }
    ];

    return (
        <div className="PaddingSectionTop100" id="TrustedPartners">
            <div className="Container">
                <h2 className="textCenter">Trusted Partners</h2>
                <div className="TrustedPartnersSlider PaddingSmallSectionsTop60">
                    <div className="slider-track">
                        {/* First set of logos */}
                        {partners.map((partner) => (
                            <div key={`first-${partner.id}`} className="partner-slide">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {partners.map((partner) => (
                            <div key={`second-${partner.id}`} className="partner-slide">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedPartners;