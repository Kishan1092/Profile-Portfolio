import './Work.css';

const projects = [
    {
        title: "Gyan Bharatam - Ministry of Culture",
        category: "Manuscript Digitization & GenAI",
        image: "/gyanbharatam.png",
        link: "https://gyanbharatam.com/"
    },
    {
        title: "AU Savings Account",
        category: "Digital Onboarding & KYC",
        image: "/au-savings-account.png",
        link: "https://savingsaccount.au.bank.in/saself/mobile-number?utm_campaign=homepage-stickycta&utm_medium=banner&utm_source=adobe-target"
    },
    {
        title: "AU Credit Card",
        category: "Fintech Onboarding Journey",
        image: "/au-credit-card.png",
        link: "https://cconboarding.au.bank.in/auccself/#/landing"
    }
];

const Work = () => {
    return (
        <section id="work" className="work">
            <div className="container">
                <div className="section-header animate-in">
                    <h2 className="section-title">Selected <span className="text-gradient">Work</span></h2>
                    <p className="section-subtitle">Projects that showcase how ideas are transformed into clear, effective, and user-focused solutions through careful planning and execution, integrating intelligent AI capabilities with thoughtful design to create experiences that are both innovative and intuitive.</p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">View Project</a>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
