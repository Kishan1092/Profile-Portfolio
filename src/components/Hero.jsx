import Typewriter from 'typewriter-effect';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
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
                                <span className="text-white">Senior UI/UX Designer and Product Designer</span> with 6+ years of experience designing complex <span className="text-white">Fintech, BFSI, and Enterprise</span> digital products. Specialized in digital onboarding, KYC, loan origination systems (LOS), and compliance-driven user journeys, with a strong ability to simplify regulation-heavy workflows into intuitive, user-centric experiences.
                            </p>
                            <p className="hero-subtitle secondary">
                                I leverage <span className="text-white">AI-assisted design</span>, scalable design systems, and solid frontend understanding to deliver production-ready interfaces that align user needs, business goals, and technical constraints. Experienced in working closely with product managers, engineers, and stakeholders to drive end-to-end delivery from <span className="text-white">discovery to launch</span>.
                            </p>
                            <p className="hero-subtitle tertiary">
                                Passionate about building <span className="text-white">accessible, data-informed</span>, and high-performance digital experiences that create measurable impact and real business value.
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
