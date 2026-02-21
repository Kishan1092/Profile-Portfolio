import './Work.css';

const projects = [
    {
        title: "Vahana Cloud",
        category: "Enterprise Low-Code Platform",
        description: "A next-generation enterprise low-code platform empowering businesses to build complex, scalable applications with AI-driven insights and visual development tools.",
        image: "/vahana-cloud.png",
        link: "https://accounts.vahanacloud.com/#/vwv/v1"
    },
    {
        title: "Gyan Bharatam - Ministry of Culture",
        category: "Manuscript Digitization & GenAI",
        description: "A digital initiative by the Ministry of Culture to preserve heritage through manuscript digitization and interactive GenAI experiences for researchers and enthusiasts.",
        image: "/gyanbharatam.png",
        link: "https://gyanbharatam.com/"
    },
    {
        title: "AU Savings Account",
        category: "Digital Onboarding & KYC",
        description: "A seamless digital onboarding journey for savings accounts, featuring instant KYC and a user-centric interface that simplifies the banking experience.",
        image: "/au-savings-account.png",
        link: "https://savingsaccount.au.bank.in/saself/mobile-number?utm_campaign=homepage-stickycta&utm_medium=banner&utm_source=adobe-target"
    },
    {
        title: "AU Credit Card",
        category: "Fintech Onboarding Journey",
        description: "A highly optimized fintech journey for credit card applications, focusing on conversion rates and a frictionless user experience from application to approval.",
        image: "/au-credit-card.png",
        link: "https://cconboarding.au.bank.in/auccself/#/landing"
    },
    {
        title: "DBS digibank Savings Account",
        category: "Digital Onboarding Journey",
        description: "A streamlined digital onboarding experience for DBS digibank, offering seamless account opening, secure authentication, and a modern, user-centric interface.",
        image: "/dbs-account.png",
        link: "https://www.dbs.bank.in/in/getaccount/#/signup"
    }
];

const Work = () => {
    return (
        <section id="work" className="work">
            <div className="container">
                <div className="section-header animate-in">
                    <h2 className="section-title">Selected <span className="text-gradient">Work</span></h2>
                    <p className="section-subtitle">A curated selection of high-impact digital products, showcasing my ability to transform complex business requirements—across Fintech, BFSI, and Enterprise SaaS—into elegant, scalable, and conversion-optimized user experiences.</p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card glass"
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">View Project</a>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
