import React, { useState, useEffect } from "react";
import "./NavigationBar.css";
import NavigationLinksData from "./NavigationLinksData";
import { Link } from "react-router-dom";
import { Drawer, Modal } from "antd";
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
    const [modalOpen, setModalOpen] = useState(false);

    const handleLinkClick = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    return (
        <div  id="NavigationBar">
            <div
                className={`NavigationBarContainer  ${scrollHeight >= 100 ? 'shadow-active' : ''}`}
                style={{ '--scroll-height': `${scrollHeight}%` }}

            >
                <div className="Container SetContainer">
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
                                <Link to={item.link} onClick={handleLinkClick}>{item.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className={`MobileMenuButton ${scrollHeight >= 50 ? 'scrolled' : ''}`} aria-label="Open Menu" onClick={() => setDrawerOpen(true)}>
                    <HiMenuAlt3 />
                </button>
                </div>
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
                        <Link key={item.id} to={item.link} onClick={(e) => {
                            handleLinkClick(e);
                            setDrawerOpen(false);
                        }}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </Drawer>

            {/* Under Working Modal */}
            <Modal
                title="Under Development"
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                footer={null}
                centered
                width={400}
            >
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <div style={{ fontSize: '48px', marginBottom: '20px' }}>🚧</div>
                    <h3 style={{ marginBottom: '15px', color: '#333' }}>Coming Soon</h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>
                        This feature is currently under development.
                        We're working hard to bring you the best experience.
                    </p>
                    <p style={{ color: '#999', fontSize: '14px', marginTop: '15px' }}>
                        Thank you for your patience!
                    </p>
                </div>
            </Modal>
        </div>
    )
}

export default NavigationBar;