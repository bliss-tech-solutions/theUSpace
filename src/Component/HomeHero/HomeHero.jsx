import React, { useEffect, useState } from "react";
import "./HomeHero.css";

const HomeHero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            heading: "Modern Elegance"
        },
        {
            image: "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            heading: "Cozy Corners"
        },
        {
            image: "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            heading: "Luxury Living"
        },
        {
            image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            heading: "Minimal Touch"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div id="HerohomeMain">
            <div>
                <div className="BackgroundStickyAnimatedImageContainer">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide.image}
                            alt={slide.heading}
                            className={`hero-slide ${currentSlide === index ? 'active' : ''}`}
                        />
                    ))}

                    {/* Navigation Arrows */}
                    {/* <button className="slider-arrow slider-arrow-prev" onClick={handlePrevSlide}>
                        <span>‹</span>
                    </button>
                    <button className="slider-arrow slider-arrow-next" onClick={handleNextSlide}>
                        <span>›</span>
                    </button> */}

                    {/* Dot Indicators */}
                    <div className="slider-dots">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>

                    <div className="BackgroundStickyAnimatedImageContainerOverlayContent">
                        <div className="max-width-1000">
                            <div className="ContentBackOverlayContainer">
                                <h1
                                    className="whiteColor hero-heading"
                                    key={currentSlide}
                                >
                                    {slides[currentSlide].heading}
                                </h1>
                                <br />
                                <p
                                    className="textCenter whiteColor ParaWidthSmall"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="600"
                                >
                                    Tailored interior design by experienced professionals, crafted just for you. Unlock a world of endless possibilities with our unique ideas.
                                </p>
                                <button
                                    className="CommonButton MarginSmallTop30"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="800"
                                >
                                    <span>View More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;