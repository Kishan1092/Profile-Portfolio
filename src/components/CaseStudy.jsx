import React from 'react';
import './CaseStudy.css';
import { FileText, ArrowRight, Download } from 'lucide-react';
import gyanBhartamPdf from '../assets/case-study/Gyan Bharatam Case Study.pdf';
import idbiBankPdf from '../assets/case-study/IDBI Bak Case Study.pdf'; // Notice the typo in user file: "IDBI Bak Case Study.pdf"

const caseStudies = [
    {
        title: "Gyan Bharatam",
        description: "A comprehensive case study detailing the UX/UI processes, challenges, and solutions for the Gyan Bharatam digital platform. Discover how engaging experiences were crafted.",
        pdf: gyanBhartamPdf,
        tags: ["UX Research", "UI Design", "Platform Architecture"],
        color: "var(--primary-color)",
        gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
    },
    {
        title: "IDBI Bank",
        description: "An in-depth look into the digital transformation and user experience revamp for IDBI Bank. Exploring fintech workflows, security, and user onboarding optimization.",
        pdf: idbiBankPdf,
        tags: ["Fintech", "Enterprise UI", "Digital Banking"],
        color: "var(--secondary-color)",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
    }
];

const CaseStudy = () => {
    return (
        <section id="casestudies" className="case-studies">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Case <span className="text-white">Studies</span></h2>
                    <p className="section-subtitle">Deep dives into my design process, problem-solving methodologies, and final outcomes for complex digital products.</p>
                </div>

                <div className="case-studies-grid">
                    {caseStudies.map((study, index) => (
                        <div className="case-study-card group" key={index}>
                            <div className="case-study-glow" style={{ background: study.color }}></div>
                            <div className="case-study-content glass">
                                <div className="case-study-icon" style={{ background: study.gradient }}>
                                    <FileText size={32} color="white" />
                                </div>

                                <h3 className="case-study-title">{study.title}</h3>
                                <p className="case-study-desc">{study.description}</p>

                                <div className="case-study-tags">
                                    {study.tags.map((tag, i) => (
                                        <span className="case-study-tag" key={i}>{tag}</span>
                                    ))}
                                </div>

                                <div className="case-study-actions">
                                    <a href={study.pdf} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small case-study-btn">
                                        View Case Study <ArrowRight size={16} />
                                    </a>
                                    <a href={study.pdf} download className="btn btn-outline btn-small icon-only-btn" title="Download PDF">
                                        <Download size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
