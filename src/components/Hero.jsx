import Typewriter from 'typewriter-effect';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            {/* Background Vectors */}
            <div className="hero-bg-vectors">
                {/* Enhanced Tech Grid Pattern */}
                <svg className="vector-grid" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern-small" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.05" />
                        </pattern>
                        <pattern id="grid-pattern-large" width="100" height="100" patternUnits="userSpaceOnUse">
                            <rect width="100" height="100" fill="url(#grid-pattern-small)" />
                            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern-large)" />
                </svg>

                {/* Multiple Abstract Rings */}
                <svg className="vector-ring vector-ring-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="98" fill="none" stroke="var(--primary-color)" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="5, 10" />
                    <circle cx="100" cy="100" r="80" fill="none" stroke="var(--secondary-color)" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="2, 4" />
                    <circle cx="100" cy="100" r="60" fill="none" stroke="var(--primary-color)" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="1, 8" />
                </svg>

                <svg className="vector-ring vector-ring-2" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="190" fill="none" stroke="var(--primary-color)" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="10, 30" />
                    <circle cx="200" cy="200" r="160" fill="none" stroke="var(--secondary-color)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="5, 15" />
                    <circle cx="200" cy="200" r="130" fill="none" stroke="var(--text-primary)" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="2, 6" />
                </svg>

                <svg className="vector-ring vector-ring-3" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="150" r="140" fill="none" stroke="var(--secondary-color)" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="20, 60" />
                    <circle cx="150" cy="150" r="110" fill="none" stroke="var(--primary-color)" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="10, 20" />
                </svg>

                {/* Fintech Abstract Nodes & Connections */}
                <svg className="vector-nodes" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" overflow="visible">
                    <path d="M50 50 L150 150 L350 100 L250 250 L100 200 Z" fill="none" stroke="var(--primary-color)" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="6,6" />
                    <path d="M150 150 L250 50 L350 100" fill="none" stroke="var(--secondary-color)" strokeWidth="1" strokeOpacity="0.4" />
                    <path d="M100 200 L50 250" fill="none" stroke="var(--text-primary)" strokeWidth="1" strokeOpacity="0.2" />
                    <path d="M250 250 L350 300" fill="none" stroke="var(--primary-color)" strokeWidth="0.5" strokeOpacity="0.3" />

                    {/* Nodes */}
                    <circle cx="50" cy="50" r="8" fill="var(--primary-color)" fillOpacity="0.8" />
                    <circle cx="150" cy="150" r="10" fill="var(--secondary-color)" fillOpacity="0.9" />
                    <circle cx="350" cy="100" r="7" fill="var(--primary-color)" fillOpacity="0.8" />
                    <circle cx="250" cy="250" r="8" fill="var(--secondary-color)" fillOpacity="0.8" />
                    <circle cx="100" cy="200" r="9" fill="var(--primary-color)" fillOpacity="0.6" />
                    <circle cx="250" cy="50" r="5" fill="var(--text-primary)" fillOpacity="0.4" />
                    <circle cx="50" cy="250" r="5" fill="var(--secondary-color)" fillOpacity="0.6" />
                    <circle cx="350" cy="300" r="4" fill="var(--primary-color)" fillOpacity="0.6" />

                    {/* Glowing pulse rings around key nodes */}
                    <circle cx="150" cy="150" r="16" fill="none" stroke="var(--secondary-color)" strokeWidth="2" strokeOpacity="0.8" className="pulse-ring" />
                    <circle cx="350" cy="100" r="12" fill="none" stroke="var(--primary-color)" strokeWidth="1.5" strokeOpacity="0.8" className="pulse-ring" style={{ animationDelay: '1s' }} />
                    <circle cx="100" cy="200" r="14" fill="none" stroke="var(--primary-color)" strokeWidth="1.5" strokeOpacity="0.6" className="pulse-ring" style={{ animationDelay: '2s' }} />
                </svg>

                {/* Floating Tech Elements */}
                <svg className="vector-float vector-float-1" viewBox="0 0 50 50">
                    <rect x="10" y="10" width="30" height="30" fill="none" stroke="var(--primary-color)" strokeWidth="1.5" strokeOpacity="0.6" transform="rotate(45 25 25)" />
                    <circle cx="25" cy="25" r="4" fill="var(--primary-color)" fillOpacity="0.9" />
                </svg>
                <svg className="vector-float vector-float-2" viewBox="0 0 60 60">
                    <polygon points="30,5 55,50 5,50" fill="none" stroke="var(--secondary-color)" strokeWidth="1.5" strokeOpacity="0.6" />
                </svg>
                <svg className="vector-float vector-float-3" viewBox="0 0 40 40">
                    <rect x="5" y="5" width="30" height="30" rx="8" fill="none" stroke="var(--text-primary)" strokeWidth="1" strokeOpacity="0.3" />
                    <circle cx="20" cy="20" r="8" fill="none" stroke="var(--text-primary)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2,2" />
                </svg>
            </div>
            <div className="container hero-content animate-in">
                <div className="hero-main-grid">
                    <div className="hero-text-side">
                        <div className="hero-badge">Senior UI/UX Designer | Product Designer | Fintech & AI-Driven Platforms.</div>
                        <h1 className="hero-title">
                            Hi, I'm <span className="text-gradient">Kishan Tiwari</span>
                        </h1>
                        <div className="typewriter-row">
                            <span className="static-text">I architect</span>
                            <span className="dynamic-text">
                                <Typewriter
                                    options={{
                                        strings: [
                                            'scalable product ecosystems.',
                                            'intelligent user experiences.',
                                            'design-to-delivery workflows.',
                                            'complex business solutions.'
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 30,
                                        delay: 50,
                                        pauseFor: 2000,
                                        cursor: '|',
                                        wrapperClassName: 'typewriter-wrapper',
                                        cursorClassName: 'typewriter-cursor'
                                    }}
                                />
                            </span>
                        </div>
                        <div className="hero-description">
                            <p className="hero-subtitle">
                                <span className="text-white">Senior UI/UX & Product Designer</span> bringing <span className="text-white">6+ years</span> of proven expertise in crafting complex digital products across <span className="text-white">Fintech, BFSI, and Enterprise SaaS</span>. Known for transforming intricate, regulation-heavy workflows—such as digital onboarding, KYC, and loan origination—into elegant, intuitive, and highly converting user journeys.
                            </p>
                            <p className="hero-subtitle secondary">
                                I seamlessly blend <span className="text-white">AI-driven design methodologies</span>, scalable design systems, and deep technical acumen to bridge the gap between design and engineering. My philosophy centers on aligning user needs with strategic business objectives, ensuring flawless execution from <span className="text-white">initial discovery to final deployment</span>.
                            </p>
                            <p className="hero-subtitle tertiary">
                                Dedicated to architecting <span className="text-white">accessible, performance-optimized</span>, and data-backed interfaces that consistently deliver measurable ROI and elevate the standard of digital experiences.
                            </p>
                        </div>
                        <div className="hero-actions">
                            <a href="#work" className="btn btn-primary">View Portfolio</a>
                            <a href="/Kishan 6 years (1).pdf" target="_blank" className="btn btn-outline">Download Resume</a>
                        </div>
                    </div>
                    <div className="hero-image-side">
                        <div className="profile-image-container">
                            <div className="hero-shape-decorator">
                                <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                                    <circle cx="200" cy="200" r="150" stroke="var(--primary-color)" strokeWidth="0.5" strokeDasharray="10 10" opacity="0.3" />
                                    <circle cx="200" cy="200" r="180" stroke="var(--secondary-color)" strokeWidth="0.5" strokeDasharray="5 15" opacity="0.2" />
                                </svg>
                            </div>
                            <img src="/profile.png" alt="Kishan Tiwari" className="profile-image" />
                            <div className="image-glow"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-bg-glow"></div>
        </section>
    );
};

export default Hero;
