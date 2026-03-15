import './Work.css';
import { ArrowUpRight } from 'lucide-react';
import hdfcImage from '../assets/hdfc.png';

const projects = [
    {
        number: "01",
        title: "Enterprise AI Telemetry Dashboard",
        client: "Vahana Cloud",
        description: "Reimagined the risk-assessment experience for financial analysts. Engineered a customized telemetry interface that visualizes predictive AI models in real-time, effectively eliminating data-scatter fatigue and accelerating critical decision-making.",
        tags: ["Data Visualization", "FinOps", "Predictive AI"],
        image: "/vahana-cloud.png",
        link: "https://accounts.vahanacloud.com/#/vwv/v1"
    },
    {
        number: "02",
        title: "Frictionless Digibank Onboarding",
        client: "DBS digibank",
        description: "Transformed a complex, regulatory-heavy compliance process into a liquid-smooth 4-minute digital journey. By implementing behavioral nudges and progressive disclosure, we drastically lowered cognitive load and recaptured lost account conversions.",
        tags: ["CRO", "Digital KYC", "Consumer Banking"],
        image: "/dbs-account.png",
        link: "https://www.dbs.bank.in/in/getaccount/#/signup"
    },
    {
        number: "03",
        title: "National Cultural Archive & GenAI",
        client: "Ministry of Culture",
        description: "Spearheaded the UX architecture for a massive heritage preservation initiative. Integrated advanced Natural Language Processing interfaces to seamlessly capture, translate, and search 50,000+ historical manuscripts for global researchers.",
        tags: ["Platform UI", "GovTech", "NLP Integration"],
        image: "/gyanbharatam.png",
        link: "https://gyanbharatam.com/"
    },
    {
        number: "04",
        title: "High-Velocity Account Pipeline",
        client: "AU Small Finance Bank",
        description: "Engineered a consumer-facing banking flow that prioritizes trust and velocity. Introduced instantaneous Video KYC verification and fluid data hand-offs, obliterating traditional drop-off points in mobile-first applications.",
        tags: ["V-KYC", "Mobile-First", "Interaction Design"],
        image: "/au-savings-account.png",
        link: "https://savingsaccount.au.bank.in/saself/mobile-number?utm_campaign=homepage-stickycta&utm_medium=banner&utm_source=adobe-target"
    },
    {
        number: "05",
        title: "Credit Eligibility Engine",
        client: "AU Credit Card",
        description: "Solved critical funnel bounce-rates by abstracting rigid financial criteria behind an empathetic, progressive interface. The refined UI leverages micro-animations and clear security signals to smoothly guide applicants through approval.",
        tags: ["Conversion Strategy", "Form UX", "A/B Testing"],
        image: "/au-credit-card.png",
        link: "https://cconboarding.au.bank.in/auccself/#/landing"
    },
    {
        number: "06",
        title: "Instant Corporate Disbursement",
        client: "HDFC Bank",
        description: "Constructed an enterprise-grade, paperless banking ecosystem for high-volume salary distributions. Leveraged 'Vibe Coding' to rapidly prototype a hyper-responsive frontend, delivering a purely zero-touch corporate onboarding experience.",
        tags: ["Enterprise UX", "Vibe Coding", "API Resilience"],
        image: hdfcImage,
        link: "#"
    }
];

const Work = () => {
    return (
        <section id="work" className="premium-work-section">
            {/* Immersive Animated Background Vectors - Refined Visibility */}
            <div className="work-bg-vectors">
                {/* Parallax Tech Grid */}
                <svg className="work-grid" width="100%" height="120%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                        <pattern id="work-grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--primary-color)" strokeWidth="0.8" strokeOpacity="0.15" />
                            <circle cx="60" cy="60" r="2" fill="var(--secondary-color)" fillOpacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#work-grid-pattern)" />
                </svg>

                {/* Rotating Data Rings */}
                <svg className="work-ring-1" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="400" cy="400" r="300" fill="none" stroke="var(--primary-color)" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="10 30" />
                    <circle cx="400" cy="400" r="220" fill="none" stroke="var(--secondary-color)" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="5 15" />
                    <circle cx="400" cy="400" r="140" fill="none" stroke="var(--text-primary)" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="2 6" />
                </svg>

                {/* Abstract Geometric Architecture */}
                <svg className="work-geom-1" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <polygon points="500,100 900,900 100,900" fill="none" stroke="var(--secondary-color)" strokeWidth="1.5" strokeOpacity="0.15" />
                    <circle cx="500" cy="633" r="250" fill="none" stroke="var(--primary-color)" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 8" />
                    <path d="M500 100 L500 900 M100 900 L900 900" stroke="var(--text-primary)" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="2 2" />
                </svg>
            </div>

            <div className="container">
                <div className="section-header-wrapper">
                    <div className="floating-icons-bg">
                        <svg className="anim-icon icon-circle" viewBox="0 0 50 50" aria-hidden="true">
                            <circle cx="25" cy="25" r="20" fill="none" stroke="var(--primary-color)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="4 4" />
                        </svg>
                        <svg className="anim-icon icon-square" viewBox="0 0 50 50" aria-hidden="true">
                            <rect x="10" y="10" width="30" height="30" fill="none" stroke="var(--secondary-color)" strokeWidth="1.5" strokeOpacity="0.4" transform="rotate(45 25 25)" />
                        </svg>
                        <svg className="anim-icon icon-triangle" viewBox="0 0 60 60" aria-hidden="true">
                            <polygon points="30,10 50,45 10,45" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" strokeOpacity="0.2" />
                        </svg>
                    </div>
                    <div className="section-header center-align animate-in relative-z">
                        <h2 className="section-title">Signature <span className="text-gradient">Projects</span></h2>
                        <p className="section-subtitle">A carefully curated collection of high-impact product builds, showcasing strategic UX problem-solving, innovative design storytelling, and measurable business growth. Each project reflects a deep understanding of complex workflows and a commitment to delivering scalable, user-centric solutions.</p>
                    </div>
                </div>

                <div className="editorial-work-container">
                    {projects.map((project, index) => {
                        const isEven = index % 2 !== 0;
                        return (
                            <div className={`editorial-project-row ${isEven ? 'row-reverse' : ''} group`} key={index}>
                                {/* Visual Side */}
                                <div className="project-visual-side glass">
                                    <div className="project-image-wrapper">
                                        <img src={project.image} alt={project.title} loading="lazy" />
                                    </div>
                                    <div className="project-image-backdrop"></div>
                                </div>

                                {/* Content Side */}
                                <div className="project-content-side">
                                    <div className="project-meta">
                                        <span className="project-number text-gradient">{project.number}</span>
                                        <span className="project-client">{project.client}</span>
                                    </div>
                                    
                                    <h3 className="project-headline">{project.title}</h3>
                                    <p className="project-story">{project.description}</p>
                                    
                                    <div className="project-tags-container">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="editorial-tag">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="project-action">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="editorial-link" aria-label={`View ${project.title} Live`}>
                                            <span className="link-text">Explore Project</span>
                                            <span className="link-icon-circle">
                                                <ArrowUpRight size={18} aria-hidden="true" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            <div className="ambient-glow work-glow-1"></div>
            <div className="ambient-glow work-glow-2"></div>
        </section>
    );
};

export default Work;
