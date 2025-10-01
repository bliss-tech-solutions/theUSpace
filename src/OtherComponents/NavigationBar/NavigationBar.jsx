import React, { useState, useEffect } from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
    const [scrollHeight, setScrollHeight] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    // Calculate height: 0px scroll = 0%, 100px scroll = 100%
                    const height = Math.min((scrollY / 100) * 100, 100);
                    setScrollHeight(height);

                    // Change logo when scroll reaches 50px
                    setIsScrolled(scrollY >= 50);

                    ticking = false;
                });
                ticking = true;
            }
        };

        // Initial check on mount
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="Container" id="NavigationBar">
            <div
                className={`NavigationBarContainer ${scrollHeight >= 100 ? 'shadow-active' : ''}`}
                style={{ '--scroll-height': `${scrollHeight}%` }}
            >
                <div className="LogoContainer">
                    <img
                        src="/Images/TheUSpaceBlackLogo.png"
                        alt="The USpace Logo"
                        className="logo-black"
                    />
                    <img
                        src="/Images/TheUSpaceWhiteLogo.png"
                        alt="The USpace Logo"
                        className="logo-white"
                        style={{ clipPath: `inset(${scrollHeight}% 0 0 0)` }}
                    />
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;