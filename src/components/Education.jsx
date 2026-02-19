import './Education.css';

const education = [
    {
        degree: "Bachelor of Engineering",
        school: "Gwalior Engineering College, RGPV University, Bhopal",
        period: "2011 – 2015"
    },
    {
        degree: "Higher Secondary School",
        school: "Dayananda Arya Mandir, Bhopal",
        period: "2011"
    }
];

const Education = () => {
    return (
        <section id="education" className="education">
            <h2 className="section-title animate-in">Education</h2>
            <div className="education-grid">
                {education.map((edu, index) => (
                    <div key={index} className="education-card glass animate-in">
                        <span className="edu-period">{edu.period}</span>
                        <h3 className="edu-degree">{edu.degree}</h3>
                        <p className="edu-school">{edu.school}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
