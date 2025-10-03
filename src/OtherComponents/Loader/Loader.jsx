import React, { useState, useEffect } from "react";
import "./Loader.css";

const Loader = ({ onLoadingComplete }) => {
    const [loadingPhase, setLoadingPhase] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setLoadingPhase(1); // Show logo animation
        }, 500);

        const timer2 = setTimeout(() => {
            setLoadingPhase(2); // Start fade out
        }, 2500);

        const timer3 = setTimeout(() => {
            setLoadingPhase(3); // Slide out
        }, 3000);

        const timer4 = setTimeout(() => {
            setIsVisible(false);
            if (onLoadingComplete) {
                onLoadingComplete();
            }
        }, 3500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, [onLoadingComplete]);

    if (!isVisible) return null;

    return (
        <div className={`Loader ${loadingPhase >= 2 ? 'fade-out' : ''} ${loadingPhase >= 3 ? 'slide-out' : ''}`}>
            <div className="LoaderBackground">
                <div className="LoaderOverlay"></div>
            </div>

            <div className="LogoContainer">
                <div className={`LogoWrapper ${loadingPhase >= 1 ? 'animate' : ''}`}>
                    <img
                        src="/Images/TheUSpaceWhiteLogo.png"
                        alt="The USpace Logo"
                        className="LogoWhite"
                    />
                    <img
                        src="/Images/TheUSpaceBlackLogo.png"
                        alt="The USpace Logo"
                        className="LogoBlack"
                    />
                </div>

                <div className={`LoadingText ${loadingPhase >= 1 ? 'show' : ''}`}>
                    <span>Loading</span>
                    <div className="LoadingDots">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;