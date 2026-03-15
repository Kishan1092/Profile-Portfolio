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
                                <strong>Senior UI/UX and Product Designer</strong> with 6+ years of experience designing fintech and enterprise digital products for banks, NBFCs, and government platforms. I have worked on large-scale digital banking solutions used by major financial institutions including HDFC Bank, Federal Bank, Bandhan Bank, AU Small Finance Bank, Canara Bank, DBS Bank, IDBI Bank, Karnataka Bank, UNO Bank, and NUCFDC.
                            </p>
                        </div>

                        <div className="typography-block">
                            <h3 className="section-label-small">The Expertise</h3>
                            <p className="premium-p">
                                My expertise lies in end-to-end product design, including UX research, information architecture, user journey mapping, wireframing, interactive prototyping, and usability testing. I specialize in designing complex financial workflows such as <span className="highlight-text">digital onboarding, KYC verification flows, savings account journeys, credit card applications, and Loan Origination Systems (LOS)</span> within compliance-driven banking ecosystems.
                            </p>
                        </div>

                        <div className="typography-block">
                            <h3 className="section-label-small">The Methodology</h3>
                            <p className="premium-p">
                                Throughout my career, I have focused on simplifying complex financial processes and improving usability for enterprise platforms used by thousands of users across banking and financial services. My work includes designing scalable design systems aligned with React Material UI, enabling consistent UI patterns and seamless collaboration between design and engineering teams.
                            </p>
                            <p className="premium-p">
                                I actively leverage <span className="highlight-text">AI-assisted design workflows, Figma AI, and GenAI-powered research</span> to accelerate UX exploration. I also experiment with vibe coding techniques and Antigravity-powered tools to rapidly prototype product ideas, test concepts, and explore innovative design solutions for modern digital platforms.
                            </p>
                        </div>

                        <div className="typography-block no-border-bottom">
                            <h3 className="section-label-small">The Approach</h3>
                            <p className="premium-p">
                                My approach combines product thinking, user-centered design, and a technical understanding of frontend development. This allows me to translate design intent into production-ready responsive interfaces while ensuring accessibility, usability, and performance.
                            </p>
                            <p className="premium-p">
                                I enjoy collaborating with product managers, developers, and cross-functional teams to deliver high-impact digital experiences that solve real business problems and improve user satisfaction across digital banking and enterprise ecosystems.
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
