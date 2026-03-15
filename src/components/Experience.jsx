import './Experience.css';

const experiences = [
    {
        role: "Senior Product Designer",
        company: "Decimal Technologies Pvt. Ltd.",
        period: "07/2021 – Present",
        description: "Leading end-to-end product design for high-scale Fintech solutions (HDFC, Canara Bank, AU Small Finance). Successfully integrated AI-driven design workflows using Figma AI, FigJam, and Figma Maker to accelerate discovery and prototyping by 30%. Leveraging Vibe Coding and Antigravity, I convert design concepts into production-ready UI components, enabling faster hand-offs and close collaboration with engineering teams.\n\nArchitecting scalable Design Systems and complex user journeys for compliance-heavy platforms while ensuring WCAG 2.1 accessibility. Partnering directly with stakeholders to align UX strategy with business KPIs and technical feasibility, simplifying complex workflows like digital onboarding, KYC verification, and loan origination. Focused on building AI-assisted, user-first Fintech experiences that are scalable, consistent, and high-impact."
    },
    {
        role: "Product Designer & Full Stack Lead",
        company: "Friends Color Images Pvt. Ltd.",
        period: "10/2018 – 06/2021",
        description: "Owned the complete product lifecycle for B2B/B2C platforms, bridging the gap between strategic design and technical implementation. Developed and maintained unified component libraries that standardized UI across multiple product lines. Leveraged data-informed insights to optimize user flows, resulting in a significant uplift in conversion rates and user engagement. Mentored cross-functional teams on design-thinking methodologies and rapid prototyping."
    },
    {
        role: "Interaction Designer",
        company: "Silver Touch Technologies Ltd.",
        period: "01/2018 – 08/2018",
        description: "Conceptualized and delivered intuitive cross-platform visual systems for Web, Android, and iOS. Focused on translating complex business requirements into user-centric interfaces through rigorous wireframing and interactive prototyping. Established base-level design guidelines and interaction patterns that ensured visual consistency across the early-stage product ecosystem."
    },
    {
        role: "UI Developer & Design Trainee",
        company: "Affy Informatics Pvt. Ltd.",
        period: "08/2015 – 11/2017",
        description: "Executed visual design and frontend development for responsive web applications. Focused on atomic design principles to create reusable UI components. Gained deep structural knowledge of layout planning, typography, and color theory while collaborating with senior designers to refine high-fidelity mockups and interaction details."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title animate-in">Career <span className="text-gradient">Journey</span></h2>
                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="experience-item glass"
                        >
                            <div className="exp-side">
                                <span className="exp-period">{exp.period}</span>
                            </div>
                            <div className="exp-main">
                                <h3 className="exp-role">{exp.role}</h3>
                                <p className="exp-company">{exp.company}</p>
                                {exp.description.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className="exp-desc" style={{ marginBottom: i < exp.description.split('\n\n').length - 1 ? '1rem' : '0' }}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
