import React, { useRef } from "react";
import "./HomePageImageStackAnimation.css";
import ImagesStackAnimationData from "./ImagesStackAnimationData";
import { motion, useScroll, useTransform } from "framer-motion";

const StackImage = ({ src, index, total }) => {
    const wrapperRef = useRef(null);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start end", "end start"]
    });

    // Calculate overlay opacity based on scroll progress
    const overlayOpacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 0.8, 1],
        [0, 0.2, 0.6, 0.85, 0.95]
    );

    return (
        <div ref={wrapperRef} className="stack-image-wrapper">
            <div ref={containerRef} className="stack-image-container">
                <img
                    src={src}
                    alt={`Interior Design ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                />
                <motion.div
                    className="stack-image-overlay"
                    style={{ opacity: overlayOpacity }}
                />
            </div>
        </div>
    );
};

const HomePageImageStackAnimation = () => {
    return (
        <div className="PaddingSectionTop100" id="HomePageImageStackAnimation">
            <div className="StackImageContainer">
                {ImagesStackAnimationData.map((image, index) => (
                    <StackImage
                        key={index}
                        src={image}
                        index={index}
                        total={ImagesStackAnimationData.length}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePageImageStackAnimation;