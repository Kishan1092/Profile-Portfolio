import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-content animate-in">
                <div className="hero-main-grid">
                    <div className="hero-text-side">
                        <div className="hero-badge">Senior UI/UX Designer &bull; Fintech & AI</div>
                        <h1 className="hero-title">
                            Hi, I'm <span className="text-gradient">Kishan Tiwari</span>. I design intelligent products.
                        </h1>
                        <p className="hero-subtitle">
                            Senior UI/UX Designer with 6+ years of core UI/UX experience (10+ years total) building product-led digital experiences across web, mobile, B2C, B2B, and fintech platforms. Skilled in solving complex business problems through AI-enabled UX workflows, combining human-centred design with intelligent ideation, research synthesis, and rapid prototyping. Hands-on with Figma AI, FigJam AI, and GenAI content tools to explore layout variations, improve user flows, and refine UX copy. Strong expertise in design systems, usability testing, data-driven UX decisions, and WCAG accessibility, delivering scalable, high-impact product solutions in collaboration with product, engineering, and data teams.
                        </p>
                        <div className="hero-actions">
                            <a href="#work" className="btn btn-primary">View Portfolio</a>
                            <a href="/Kishan 6 years (1).pdf" target="_blank" className="btn btn-outline">Download Resume</a>
                        </div>
                    </div>
                    <div className="hero-image-side">
                        <div className="profile-image-container">
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
