import React, { useRef } from "react";
import "./HomePageImageStackAnimation.css";
import ImagesStackAnimationData from "./ImagesStackAnimationData";
import { motion, useScroll, useTransform } from "framer-motion";

const StackImage = ({ data, index, total }) => {
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
                    src={data.image}
                    alt={data.title}
                    loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="OverlayContentContainer">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
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
                {ImagesStackAnimationData.map((data, index) => (
                    <StackImage
                        key={data.id}
                        data={data}
                        index={index}
                        total={ImagesStackAnimationData.length}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePageImageStackAnimation;