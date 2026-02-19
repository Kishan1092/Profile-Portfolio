import './Skills.css';

const skillCategories = [
    {
        title: "UX & Product Strategy",
        type: "tags",
        skills: ["Product Strategy", "User Journeys", "Design Systems", "Usability Testing", "WCAG Accessibility", "UX Writing", "Interaction Design", "Data-Informed Design"]
    },
    {
        title: "AI Tools & Productivity",
        type: "list",
        skills: [
            { name: "Antigravity", desc: "AI automation & workflow assistance" },
            { name: "ChatGPT", desc: "Strategic content & problem-solving" },
            { name: "Lovable", desc: "Rapid AI-powered app/UX building" },
            { name: "Cursor", desc: "AI-assisted rapid development" },
            { name: "Figma AI", desc: "Auto-layout & rapid prototyping" },
            { name: "Canva (Magic Design)", desc: "AI-powered visual design" },
            { name: "Adobe Firefly", desc: "Generative assets & text effects" }
        ]
    },
    {
        title: "Frontend Architecture",
        type: "tags",
        skills: ["React UI Mapping", "Material UI", "Angular Material", "Responsive Architecture", "Design Handoff", "Component Libraries", "HTML/CSS3"]
    },
    {
        title: "Core Design Stack",
        type: "tags",
        skills: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Miro", "Zeplin", "Git", "Jira"]
    }
];

const Skills = () => {
    return (
        <section id="about" className="skills">
            <div className="container">
                <div className="section-header animate-in">
                    <h2 className="section-title">Core <span className="text-gradient">Superpowers</span></h2>
                    <p className="section-subtitle">End-to-end expertise across AI tools, intelligent UI/UX design, and modern frontend architecture—enabling rapid prototyping, clean scalable implementation, and delivery of high-performance, user-centric web applications from concept to production.</p>
                </div>

                <div className="skills-grid-modern">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category-card glass animate-in">
                            <h3 className="category-title">{category.title}</h3>

                            {category.type === "tags" ? (
                                <div className="skill-tags">
                                    {category.skills.map((skill, sIndex) => (
                                        <span key={sIndex} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            ) : (
                                <ul className="skill-list-items">
                                    {category.skills.map((skill, sIndex) => (
                                        <li key={sIndex} className="skill-list-item">
                                            <span className="skill-item-name">{skill.name}</span>
                                            <span className="skill-item-desc">{skill.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                <div className="skills-cta animate-in">
                    <a href="https://www.behance.net/kishantiwari1" target="_blank" rel="noopener noreferrer" className="btn btn-outline">View My Full Portfolio</a>
                </div>
            </div>
        </section>
    );
};

export default Skills;
