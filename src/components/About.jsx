import { useState, useEffect, useRef } from 'react';
import './About.css';

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger only if not already animated and is intersecting
                if (entry.isIntersecting && !hasAnimated.current) {
                    setIsVisible(true);
                    hasAnimated.current = true;
                }
            },
            { threshold: 0.2 } // Ensure at least 20% of the element is visible
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const runtime = currentTime - startTime;
            const progress = Math.min(runtime / duration, 1);

            // "Out" Quartic Easing - starts fast, ends very slow
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            const currentVal = Math.floor(easeProgress * end);
            setCount(currentVal);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure we land exactly at the target
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return (
        <span ref={countRef} className="counter-number">
            {count}{suffix}
        </span>
    );
};

const About = () => {
    return (
        <section id="about-me" className="about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-header" data-aos="fade-up">
                        <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
                        <div className="title-underline"></div>
                    </div>

                    <div className="about-content">
                        <div className="about-text-wrapper" data-aos="fade-right">
                            <p className="about-p lead">
                                I am a <span className="text-white">Senior UI/UX Designer and Product Designer</span> with over 6 years of experience delivering complex fintech, BFSI, e-commerce, and enterprise digital products.
                            </p>

                            <p className="about-p">
                                My expertise lies in designing secure, scalable, and conversion-focused experiences for both regulation-driven platforms and high-traffic consumer applications, including <span className="text-white">digital onboarding, KYC, loan origination systems (LOS)</span>, and end-to-end shopping journeys.
                            </p>

                            <p className="about-p">
                                I leverage <span className="text-white">AI-assisted design tools</span> and data-informed methodologies to accelerate ideation, optimize user flows, and enhance product outcomes. My approach combines user-centered design, scalable design systems, and strong frontend awareness to create interfaces that are not only visually refined but also technically feasible and production-ready.
                            </p>

                            <p className="about-p">
                                Beyond financial platforms, I design growth-oriented experiences such as product discovery, search and filtering, checkout optimization, and mobile-first interactions that improve engagement, conversion rates, and overall business performance.
                            </p>

                            <p className="about-p">
                                Throughout my career, I have led end-to-end design initiatives from <span className="text-white">discovery and research to prototyping, validation, and launch</span>. My work emphasizes accessibility, performance, scalability, and long-term product value.
                            </p>

                            <p className="about-p final">
                                I am passionate about building intelligent, user-centric digital products that solve real problems, drive business growth, and scale effectively across organizations and global markets.
                            </p>
                        </div>

                        <div className="about-stats">
                            <div className="stat-card glass anim-hover" data-aos="zoom-in" data-aos-delay="300">
                                <span className="stat-number">
                                    <CountUp end={10} suffix="+" />
                                </span>
                                <span className="stat-label">Years Total Exp.</span>
                            </div>
                            <div className="stat-card glass secondary anim-hover" data-aos="zoom-in" data-aos-delay="500">
                                <span className="stat-number">
                                    <CountUp end={6} suffix="+" />
                                </span>
                                <span className="stat-label">UI/UX Specialty</span>
                            </div>
                            <div className="stat-card glass accent anim-hover" data-aos="zoom-in" data-aos-delay="700">
                                <span className="stat-number">
                                    <CountUp end={15} suffix="+" />
                                </span>
                                <span className="stat-label">Fintech Products</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
