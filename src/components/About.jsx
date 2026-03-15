import { useState, useEffect, useRef } from 'react';
import './About.css';

const CountUp = ({ end, duration = 2500, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const currentRef = countRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    setIsVisible(true);
                    hasAnimated.current = true;
                }
            },
            { threshold: 0.1 }
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
            
            // Expo ease out
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentVal = Math.floor(easeProgress * end);
            
            setCount(currentVal);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return (
        <span ref={countRef}>
            {count}{suffix}
        </span>
    );
};

const About = () => {
    return (
        <section id="about-me" className="premium-about-section">
            <div className="container relative z-10">
                <div className="premium-about-grid">
                    
                    {/* Left Sticky Column */}
                    <div className="about-left-col">
                        <h2 className="premium-title">
                            Architecting <br />
                            <span className="text-gradient">Digital Trust.</span>
                        </h2>
                        
                        <div className="premium-stats-container">
                            <div className="premium-stat-item">
                                <span className="premium-stat-num"><CountUp end={10} suffix="+" /></span>
                                <span className="premium-stat-label">Years of Total Experience</span>
                            </div>
                            <div className="premium-stat-line"></div>
                            
                            <div className="premium-stat-item">
                                <span className="premium-stat-num"><CountUp end={6} suffix="+" /></span>
                                <span className="premium-stat-label">Years specializing in UI/UX & Product Design</span>
                            </div>
                            <div className="premium-stat-line"></div>
                            
                            <div className="premium-stat-item">
                                <span className="premium-stat-num"><CountUp end={15} suffix="+" /></span>
                                <span className="premium-stat-label">Fintech & Enterprise Platforms Launched</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Scrolling Content */}
                    <div className="about-right-col">
                        <div className="typography-block">
                            <h3 className="section-label-small">The Introduction</h3>
                            <p className="premium-p intro-p">
                                I am a <strong>Senior UI/UX & Product Designer</strong> with a 6+ year track record of architecting high-impact digital products across Fintech, BFSI, e-commerce, and enterprise platforms.
                            </p>
                        </div>

                        <div className="typography-block">
                            <h3 className="section-label-small">The Expertise</h3>
                            <p className="premium-p">
                                My core expertise lies in orchestrating secure, scalable, and conversion-optimized experiences for complex regulatory environments and high-volume applications. I have deep domain knowledge in <span className="highlight-text">frictionless digital onboarding, end-to-end KYC flows, loan origination systems (LOS)</span>, and enterprise commerce journeys.
                            </p>
                        </div>

                        <div className="typography-block">
                            <h3 className="section-label-small">The Methodology</h3>
                            <p className="premium-p">
                                By integrating <span className="highlight-text">AI-assisted design workflows, Vibe Coding, and Antigravity</span>, I accelerate ideation and prototyping while ensuring flawless, production-ready user journeys. I build robust, scalable design systems informed by strong frontend architecture, ensuring designs are visually polished, technically sound, and seamlessly implemented in Angular with API integration.
                            </p>
                            <p className="premium-p">
                                Beyond financial platforms, I specialize in growth-centric features—product discovery, intelligent search filtering, and mobile-first checkout optimization—that consistently drive engagement, conversion, and measurable business impact.
                            </p>
                        </div>

                        <div className="typography-block no-border-bottom">
                            <h3 className="section-label-small">The Ownership</h3>
                            <p className="premium-p">
                                I have a proven history of <strong>leading end-to-end product design lifecycles</strong>, from research and strategic prototyping to validation and successful launch. My work is grounded in accessibility, sustainable performance, and long-term product viability, creating intelligent, user-first digital ecosystems that solve complex problems and deliver global business value.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Extremely subtle ambient background */}
            <div className="ambient-container">
                <div className="premium-ambient top-right"></div>
                <div className="premium-ambient bottom-left"></div>
            </div>
        </section>
    );
};

export default About;
