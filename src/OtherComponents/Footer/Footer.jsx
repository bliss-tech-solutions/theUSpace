import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="Footer PaddingSectionTop100 MarginTitleTop80" id="Footer">
            <div className="Container">
                <div className="FooterContent">
                    <div className="FooterBlock">
                        <div>
                            <h4>ADDRESS</h4>
                            <p>2972 Westheimer Rd. Santa Ana,</p>
                            <p>Illinois 85486</p>
                        </div>
                        <div>
                            <h4>CONTACT US</h4>
                            <p>+(378) 555-0108</p>
                            <p>info@example.io</p>
                        </div>
                    </div>
                    {/* <div className="FooterBlock">

                    </div> */}
                    <div className="FooterBlock">
                        <h4>PAGES</h4>
                        <ul>
                            <li><a href="#AboutHome">About us</a></li>
                            <li><a href="#OurProductsDesignsHome">Projects</a></li>
                            <li><a href="#Services">Services</a></li>
                            <li><a href="#Blogs">Blogs</a></li>
                            <li><a href="#Contact">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="FooterBlock">
                        <h4>RESOURCES</h4>
                        <ul>
                            <li><a href="#">Style Guide</a></li>
                            <li><a href="#">License</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="FooterBlock">
                        <h4>FOLLOW</h4>
                        <ul>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">YouTube</a></li>
                            <li><a href="#">Twitter</a></li>
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
        </div>
    );
};

export default Footer;