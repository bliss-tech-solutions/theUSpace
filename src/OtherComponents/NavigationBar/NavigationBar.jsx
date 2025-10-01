import React, { useState, useEffect } from "react";
import "./NavigationBar.css";
import NavigationLinksData from "./NavigationLinksData";
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
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

    const [drawerOpen, setDrawerOpen] = useState(false);

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
                        loading="eager"
                    />
                    <img
                        src="/Images/TheUSpaceWhiteLogo.png"
                        alt="The USpace Logo"
                        className="logo-white"
                        style={{ clipPath: `inset(${scrollHeight}% 0 0 0)` }}
                        loading="eager"
                    />
                </div>
                <div className={`NavigationBarLinks ${scrollHeight >= 50 ? 'scrolled' : ''}`}>
                    <div>
                        {NavigationLinksData.map((item) => (
                            <div key={item.id}>
                                <Link to={item.link}>{item.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className={`MobileMenuButton ${scrollHeight >= 50 ? 'scrolled' : ''}`} aria-label="Open Menu" onClick={() => setDrawerOpen(true)}>
                    <HiMenuAlt3 />
                </button>
            </div>

            {/* Mobile Drawer */}
            <Drawer
                placement="right"
                closeIcon={null}
                onClose={() => setDrawerOpen(false)}
                open={drawerOpen}
                width={300}
                styles={{ body: { padding: 0 } }}
            >
                <div className="DrawerHeader">
                    <div className="LogoContainer">
                        <img src="/Images/TheUSpaceBlackLogo.png" alt="The USpace Logo" loading="eager" />
                    </div>
                    <button className="DrawerClose" aria-label="Close navigation" onClick={() => setDrawerOpen(false)}>
                        <IoClose size={20} />
                    </button>
                </div>
                <div className="DrawerLinks">
                    {NavigationLinksData.map((item) => (
                        <Link key={item.id} to={item.link} onClick={() => setDrawerOpen(false)}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </Drawer>
        </div>
    )
}

export default NavigationBar;