import React, { useState } from "react";
import "./Footer.css";
import { Modal } from "antd";

const Footer = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleLinkClick = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    return (
        <div className="Footer PaddingSectionTop100 MarginTitleTop80" id="Footer">
            <div className="Container">
                <div className="FooterContent">
                    <div className="FooterBlock">
                        <div className="FooterLogoContainer">
                            <img src="/Images/TheUSpaceWhiteLogo.png" alt="" />
                        </div>

                    </div>
                    <div className="FooterBlock">
                        {/* <div> */}
                        <div>
                            <h4>ADDRESS</h4>
                            <p>2972 Westheimer Rd. Santa Ana,</p>
                            <p>Illinois 85486</p>
                        </div>
                        <br />
                        <div>
                            <h4>CONTACT US</h4>
                            <p>+(378) 555-0108</p>
                            <p>info@example.io</p>
                        </div>
                        {/* </div> */}
                    </div>
                    {/* <div className="FooterBlock">

                    </div> */}
                    <div className="FooterBlock">
                        <h4>PAGES</h4>
                        <ul>
                            <li><a href="#AboutHome" onClick={handleLinkClick}>About us</a></li>
                            <li><a href="#OurProductsDesignsHome" onClick={handleLinkClick}>Projects</a></li>
                            <li><a href="#Services" onClick={handleLinkClick}>Services</a></li>
                            <li><a href="#Blogs" onClick={handleLinkClick}>Blogs</a></li>
                            <li><a href="#Contact" onClick={handleLinkClick}>Contact us</a></li>
                        </ul>
                    </div>
                    {/* <div className="FooterBlock">
                        <h4>RESOURCES</h4>
                        <ul>
                            <li><a href="#" onClick={handleLinkClick}>Style Guide</a></li>
                            <li><a href="#" onClick={handleLinkClick}>License</a></li>
                            <li><a href="#" onClick={handleLinkClick}>Privacy Policy</a></li>
                            <li><a href="#" onClick={handleLinkClick}>Cookie Policy</a></li>
                            <li><a href="#" onClick={handleLinkClick}>Terms & Conditions</a></li>
                        </ul>
                    </div> */}
                    <div className="FooterBlock">
                        <h4>FOLLOW</h4>
                        <ul>
                            <li><a href="#" onClick={handleLinkClick}>Instagram</a></li>
                            <li><a href="#" onClick={handleLinkClick}>Facebook</a></li>
                            <li><a href="#" onClick={handleLinkClick}>YouTube</a></li>
                            <li><a href="#" onClick={handleLinkClick}>Twitter</a></li>
                        </ul>
                    </div>

                </div>
                <div>
                    <div className="FooterBottom">
                        <p>© 2025 <span className="whiteColor">TheUSpace</span>. All rights reserved.</p>
                    </div>
                    {/* <div className="FooterBlock FooterSubscribe">
                        <h4>STAY CONNECTED</h4>
                        <div className="SubscribeRow">
                            <input type="email" placeholder="Enter your email" />
                            <button aria-label="Subscribe">→</button>
                        </div>
                    </div> */}
                </div>
            </div>

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
    );
};

export default Footer;