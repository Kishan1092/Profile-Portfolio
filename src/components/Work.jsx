import './Work.css';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import hdfcImage from '../assets/hdfc.png';

const projects = [
    {
        title: "AI-Driven Enterprise Fintech Dashboard",
        category: "Product Strategy & Enterprise UX",
        role: "Lead Product Designer",
        duration: "8 months",
        team: "2 PMs, 6 Developers, 1 Data Scientist",
        problem: "Financial analysts were overwhelmed by scattered data sources, making risk assessment and trend prediction unacceptably slow and error-prone.",
        approach: [
            "Orchestrated cross-functional workshops to define the Product Strategy",
            "Conducted ethnographic research on cognitive load in high-stress Fintech trading",
            "Designed a modular, scalable Enterprise UX component system",
            "Integrated a predictive AI-Driven insights engine to flag anomalies instantly"
        ],
        solution: "A unified, AI-enhanced centralized Dashboard that empowers stakeholders with real-time analytics and frictionless decision-making capabilities.",
        impact: [
            "Reduced critical data-retrieval time for analysts by 60%",
            "Increased anomaly detection accuracy by 45% using AI models",
            "Successfully deployed to 3 major enterprise-tier clients in Q1"
        ],
        image: "/vahana-cloud.png",
        link: "https://accounts.vahanacloud.com/#/vwv/v1"
    },
    {
        title: "Digital Onboarding Journey",
        category: "DBS digibank",
        role: "Lead Product Designer",
        duration: "3 months",
        team: "2 PMs, 4 Developers, 1 UX Researcher",
        problem: "High drop-off rate during savings account creation due to complex forms and confusing KYC processes.",
        approach: [
            "Analyzed drop-off points via Google Analytics",
            "Simplified multi-step forms into bite-sized processes",
            "Designed rapid video-KYC user flow",
            "Iterated visuals via A/B testing"
        ],
        solution: "A streamlined digital onboarding experience offering seamless account opening and secure, modern authentication.",
        impact: [
            "Increased account opening completion by 42%",
            "Reduced time-to-onboard from 15 mins to 4 mins",
            "Boosted customer satisfaction score by 20%"
        ],
        image: "/dbs-account.png",
        link: "https://www.dbs.bank.in/in/getaccount/#/signup"
    },
    {
        title: "Manuscript Digitization & GenAI platform",
        category: "Gyan Bharatam - Ministry of Culture",
        role: "Senior UI/UX Designer",
        duration: "6 months",
        team: "1 PM, 5 Developers, 2 NLP Engineers",
        problem: "Historic manuscripts were inaccessible to researchers and the public, lacking searchable and translation tools.",
        approach: [
            "Collaborated with historians for needs analysis",
            "Mapped out data-heavy curation flows",
            "Designed intelligent search interfaces",
            "Built accessibility-first systems"
        ],
        solution: "A digital initiative to preserve heritage featuring robust manuscript catalogs and interactive GenAI-powered translations.",
        impact: [
            "Digitized access to over 50k documents",
            "Increased platform engagement time by 45%",
            "Adopted by major university researchers"
        ],
        image: "/gyanbharatam.png",
        link: "https://gyanbharatam.com/"
    },
    {
        title: "Digital Onboarding & KYC",
        category: "AU Savings Account",
        role: "Senior UI/UX Designer",
        duration: "3 months",
        team: "1 PM, 4 Developers",
        problem: "Account adoption was low due to friction in traditional KYC checks and lengthy onboarding forms.",
        approach: [
            "Conducted competitive flow analysis",
            "Designed instant video KYC integrations",
            "Built dynamic form designs to minimize cognitive load"
        ],
        solution: "A seamless digital onboarding journey for savings accounts, featuring instant KYC and a user-centric interface.",
        impact: [
            "Reduced onboarding time by 50%",
            "Increased month-over-month creation by 28%",
            "High user satisfaction score via in-app feedback"
        ],
        image: "/au-savings-account.png",
        link: "https://savingsaccount.au.bank.in/saself/mobile-number?utm_campaign=homepage-stickycta&utm_medium=banner&utm_source=adobe-target"
    },
    {
        title: "Fintech Onboarding Journey",
        category: "AU Credit Card",
        role: "Lead UI/UX Designer",
        duration: "4 months",
        team: "2 PMs, 5 Developers",
        problem: "Credit card applicants were abandoning workflows due to confusing eligibility criteria and lengthy entry.",
        approach: [
            "Mapped end-to-end data funnel",
            "Tested single-page vs multi-step architectures",
            "Implemented clear trust signals"
        ],
        solution: "A highly optimized fintech journey for credit card applications, focusing on conversion rates and frictionless experience.",
        impact: [
            "Improved pass-through rate by 31%",
            "Lowered bounce rate on eligibility screen",
            "Recognized for fastest sprint-to-deploy timeline"
        ],
        image: "/au-credit-card.png",
        link: "https://cconboarding.au.bank.in/auccself/#/landing"
    },
    {
        title: "HDFC Corporate Salaried Account Journey",
        category: "Corporate Salary Account",
        role: "Senior UI/UX Designer & Antigravity AI",
        duration: "2 weeks",
        team: "1 Designer, Antigravity AI Tool",
        problem: "The enterprise BFS ecosystem required a secure, seamless platform for corporate salary account activation and investment onboarding with minimal friction.",
        approach: [
            "Designed the end-to-end journey and high-fidelity mockups in Figma",
            "Leveraged Antigravity AI Tool for rapid, precise frontend development",
            "Optimized for 100% paperless onboarding with instant KYC",
            "Maintained strict enterprise-grade security and brand guidelines"
        ],
        solution: "A secure, enterprise-grade platform offering zero balance accounts, instant salary credit, and immediate trading access, completely designed natively and developed via AI.",
        impact: [
            "Delivered complete design and codebase rapidly using AI",
            "Streamlined user data collection into a single, high-conversion flow",
            "Enabled 100% secure banking and instantaneous investment access"
        ],
        image: hdfcImage,
        link: "#"
    }
];

const Work = () => {
    return (
        <section id="work" className="work">
            <div className="container">
                <div className="section-header animate-in">
                    <h2 className="section-title">Selected <span className="text-gradient">Work</span></h2>
                    <p className="section-subtitle">Deep dives into how I tackle complex product challenges, apply strategic UX approaches, and drive measurable business impact.</p>
                </div>

                <div className="premium-projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="premium-project-card glass group">
                            <div className="premium-project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="premium-project-overlay">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                        View Live Project <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>

                            <div className="premium-project-info">
                                <div className="pp-header">
                                    <span className="pp-category">{project.category}</span>
                                    <h3 className="pp-title">{project.title}</h3>

                                    <div className="pp-meta">
                                        <div className="meta-item"><span>Role:</span> {project.role}</div>
                                        <div className="meta-item"><span>Time:</span> {project.duration}</div>
                                        <div className="meta-item"><span>Team:</span> {project.team}</div>
                                    </div>
                                </div>

                                <div className="pp-body">
                                    <div className="pp-text-section">
                                        <h4><span className="pp-number">1</span> Problem</h4>
                                        <p>{project.problem}</p>
                                    </div>

                                    <div className="pp-text-section">
                                        <h4><span className="pp-number">2</span> Approach</h4>
                                        <ul className="pp-list">
                                            {project.approach.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pp-text-section">
                                        <h4><span className="pp-number">3</span> Solution</h4>
                                        <p>{project.solution}</p>
                                    </div>

                                    <div className="pp-impact-box">
                                        <h4><span className="pp-number" style={{ background: 'var(--accent-color)' }}>4</span> Impact</h4>
                                        <ul className="pp-impact-list">
                                            {project.impact.map((item, i) => (
                                                <li key={i}><CheckCircle2 size={16} className="text-accent" /> {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
