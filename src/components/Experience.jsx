import './Experience.css';

const experiences = [
    {
        role: "Senior Product Designer",
        company: "Decimal Technologies Pvt. Ltd.",
        period: "07/2021 – Present",
        description: "Senior UI/UX and Product Designer with 6+ years of experience designing fintech and enterprise digital products for banks, NBFCs, and government platforms. I have worked on large-scale digital banking solutions used by major financial institutions including HDFC Bank, Federal Bank, Bandhan Bank, AU Small Finance Bank, Canara Bank, DBS Bank, IDBI Bank, Karnataka Bank, UNO Bank, and NUCFDC.\n\nMy expertise lies in end-to-end product design, including UX research, information architecture, user journey mapping, wireframing, interactive prototyping, and usability testing. I specialize in designing complex financial workflows such as digital onboarding, KYC verification flows, savings account journeys, credit card applications, and Loan Origination Systems (LOS) within compliance-driven banking ecosystems.\n\nThroughout my career, I have focused on simplifying complex financial processes and improving usability for enterprise platforms used by thousands of users across banking and financial services. My work includes designing scalable design systems aligned with React Material UI, enabling consistent UI patterns and seamless collaboration between design and engineering teams.\n\nI actively leverage AI-assisted design workflows, Figma AI, and GenAI-powered research synthesis to accelerate UX exploration and design decision-making. I also experiment with vibe coding techniques and Antigravity-powered tools to rapidly prototype product ideas, test UX concepts, and explore innovative design solutions for modern digital platforms.\n\nMy approach combines product thinking, user-centered design, and technical understanding of frontend development, allowing me to translate design intent into production-ready responsive interfaces while ensuring accessibility, usability, and performance.\n\nI enjoy collaborating with product managers, developers, and cross-functional teams to deliver high-impact digital experiences that solve real business problems and improve user satisfaction across digital banking and enterprise ecosystems."
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
                        <h2 className="section-title">Career <span className="text-gradient">Journey</span></h2>
                        <p className="section-subtitle">A progressive path of design and development excellence, where I’ve transformed complex digital products into intuitive, user-centric experiences. Over the years, I’ve combined strategic UX thinking, cutting-edge frontend skills, and AI-enabled workflows to deliver measurable business impact across Fintech, Enterprise SaaS, and other high-growth domains.</p>
                    </div>
                </div>
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
