import { useState, useEffect, useRef } from 'react';
import './About.css';

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const currentRef = countRef.current;
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

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
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
                    <div className="about-header">
                        <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
                        <div className="title-underline"></div>
                    </div>

                    <div className="about-content">
                        <div className="about-text-wrapper">
                            <p className="about-p lead">
                                I am a <span className="text-white">Senior UI/UX & Product Designer</span> with a distinguished <span className="text-white">6+ year track record</span> of architecting high-impact digital products across the fintech, BFSI, e-commerce, and enterprise sectors.
                            </p>

                            <p className="about-p">
                                My core expertise lies in orchestrating secure, scalable, and conversion-optimized experiences tailored for complex regulatory environments and high-volume consumer applications. I have deep domain knowledge in <span className="text-white">frictionless digital onboarding, comprehensive KYC flows, loan origination systems (LOS)</span>, and sophisticated end-to-end commerce journeys.
                            </p>

                            <p className="about-p">
                                By integrating <span className="text-white">advanced AI-assisted design workflows</span> with rigorous, data-informed strategies, I accelerate product ideation while ensuring flawless user journeys. I build robust, scalable design systems championed by a strong understanding of frontend architecture, guaranteeing that my designs are not only visually stunning but technically sound and production-ready.
                            </p>

                            <p className="about-p">
                                Beyond core financial platforms, I specialize in engineering growth-centric features—product discovery, intelligent search filtering, and mobile-first checkout optimization—that consistently drive user engagement, maximize conversion rates, and catalyze business growth.
                            </p>

                            <p className="about-p">
                                I have a proven history of spearheading end-to-end product design lifecycles, leading multifaceted initiatives spanning from <span className="text-white">in-depth research and strategic prototyping to rigorous validation and successful market launch</span>. My work is fundamentally rooted in accessibility, sustainable performance, and long-term product viability.
                            </p>

                            <p className="about-p final">
                                I am intrinsically motivated to build intelligent, beautifully crafted digital ecosystems that solve complex problems, empower users, and deliver profound business value on a global scale.
                            </p>
                        </div>

                        <div className="about-stats">
                            <div className="stat-card glass anim-hover">
                                <span className="stat-number">
                                    <CountUp end={10} suffix="+" />
                                </span>
                                <span className="stat-label">Years Total Exp.</span>
                            </div>
                            <div className="stat-card glass secondary anim-hover">
                                <span className="stat-number">
                                    <CountUp end={6} suffix="+" />
                                </span>
                                <span className="stat-label">UI/UX Specialty</span>
                            </div>
                            <div className="stat-card glass accent anim-hover">
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
