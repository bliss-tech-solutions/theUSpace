import React, { useRef, useEffect } from "react";
import "./AboutHome.css";
import SectionHeader from "../../OtherComponents/SectionHeader/SectionHeader";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { Link } from "react-router-dom";
import ViewportRevealImage from "../../OtherComponents/ViewportRevealImage/ViewportRevealImage";
// Counter Component
const AnimatedCounter = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        if (isInView) {
            const numericValue = parseFloat(value);
            let startTime;
            const duration = 4000; // 1.5 seconds

            const updateCount = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);

                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(easeOutQuart * numericValue));

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                }
            };

            requestAnimationFrame(updateCount);
        }
    }, [isInView, value]);

    return (
        <motion.h4
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            {count}{suffix}
        </motion.h4>
    );
};

const AboutHome = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Initialize AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true
            });
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 200]);

    const AboutGridData = [
        {
            CounterNumber: "5",
            CounterSuffix: "k+",
            CounterText: "Designs"
        },
        {
            CounterNumber: "60",
            CounterSuffix: "M+",
            CounterText: "Savings Money"
        },
        {
            CounterNumber: "10",
            CounterSuffix: "k+",
            CounterText: "Global Clients"
        },
        {
            CounterNumber: "98",
            CounterSuffix: "%",
            CounterText: "Clients statisfaction"
        }
    ]

    return (
        <div id="AboutHome" className="PaddingSectionTop100" ref={containerRef}>
            <div className="Container">
                <SectionHeader
                    tagText="About Us"
                    mainHeading=""
                />
                <div className="PaddingSmallSectionsTop60 AboutHomeContent">
                    <h3
                        className="desktop-only"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        At The U Space, we specialize in crafting personalized interior design solutions that blend aesthetics with functionality. Our team of creative professionals works closely with clients to understand their vision and transform it into spaces that inspire and elevate everyday living. Whether residential, commercial, or hospitality, each project reflects a unique story told through thoughtful design, detail, and innovation.
                    </h3>
                    <p
                        className="mobile-only"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        At The U Space, we specialize in crafting personalized interior design solutions that blend aesthetics with functionality. Our team of creative professionals works closely with clients to understand their vision and transform it into spaces that inspire and elevate everyday living. Whether residential, commercial, or hospitality, each project reflects a unique story told through thoughtful design, detail, and innovation.
                    </p>
                    <br />
                    <Link to="tel:8511722020">
                        <button
                            className="CommonButtonVariation2"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                        >
                            <span>Call Us</span>
                        </button>
                    </Link>
                </div>
                <div className="CounterNumbersAndImageAboutContainer PaddingSmallSectionsTop60">
                    <div className="AboutGridDataContainer">

                        {AboutGridData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="AboutGridItem"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 1.5, delay: index * 0.2 }}
                            >
                                <AnimatedCounter
                                    value={item.CounterNumber}
                                    suffix={item.CounterSuffix}
                                />
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                                >
                                    {item.CounterText}
                                </motion.p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="AboutHomeImageContainer">
                        <motion.div

                            style={{ y }}

                        >
                            <ViewportRevealImage
                                src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Interior Design"
                                revealId="about-home-image"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;