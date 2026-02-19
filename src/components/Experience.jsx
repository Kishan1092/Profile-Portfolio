import './Experience.css';

const experiences = [
    {
        role: "Senior UI/UX Designer",
        company: "Decimal Technologies Pvt. Ltd.",
        period: "07/2021 – Present",
        description: "Collaborated with enterprise and fintech clients, including Gyan Bharatam (Ministry of Culture), NUCFDC (LOS), Canara Bank, DBS Bank, Karnataka Bank, AU Bank, UNO Bank, and IDBI Bank, to deliver product-focused UI/UX solutions. Applied AI-enabled ideation and research synthesis to clarify requirements and guide design decisions. Designed user journeys, wireframes, high-fidelity prototypes, and reusable design system components in Figma and Adobe XD. Leveraged Figma AI, FigJam AI, and GenAI-based content tools to accelerate iteration and improve UX clarity. Partnered closely with engineering teams to build responsive, production-ready interfaces, ensuring consistency and scalability across large fintech platforms."
    },
    {
        role: "Senior Full Stack Developer",
        company: "Friends Color Images Pvt. Ltd.",
        period: "10/2018 – 06/2021",
        description: "Owned UI/UX design and frontend implementation for multiple B2B and B2C web platforms from requirements to production release. Designed responsive dashboards, marketing websites, and reusable UI components with a focus on performance, scalability, and SEO. Bridged design and development by implementing component-based UI architectures, ensuring faster iterations and consistent user experience. Collaborated with product stakeholders to align UX decisions with business and technical constraints."
    },
    {
        role: "Software Designer & Developer",
        company: "Silver Touch Technologies Ltd.",
        period: "01/2018 – 08/2018",
        description: "Designed UX/UI solutions for web, Android, and iOS. Produced wireframes and high-fidelity interactive prototypes."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title animate-in">Career <span className="text-gradient">Journey</span></h2>
                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item glass animate-in">
                            <div className="exp-side">
                                <span className="exp-period">{exp.period}</span>
                            </div>
                            <div className="exp-main">
                                <h3 className="exp-role">{exp.role}</h3>
                                <p className="exp-company">{exp.company}</p>
                                <p className="exp-desc">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
