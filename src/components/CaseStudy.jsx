import React, { useState } from 'react';
import './CaseStudy.css';
import { FileText, ArrowRight, Download, MonitorPlay } from 'lucide-react';
import gyanBhartamPdf from '../assets/case-study/Gyan Bharatam Case Study.pdf';
import idbiBankPdf from '../assets/case-study/IDBI Bak Case Study.pdf';
import HDFCCaseStudy from './HDFCCaseStudy';
import FintechOnboardingCaseStudy from './FintechOnboardingCaseStudy';
import AIDashboardCaseStudy from './AIDashboardCaseStudy';

const caseStudies = [
    {
        id: "gyan-bharatam",
        title: "Gyan Bharatam",
        description: "A comprehensive case study detailing the UX/UI processes, challenges, and solutions for the Gyan Bharatam digital platform. Discover how engaging experiences were crafted.",
        pdf: gyanBhartamPdf,
        type: "pdf",
        tags: ["UX Research", "UI Design", "Platform Architecture"],
        color: "var(--primary-color)",
        gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
    },
    {
        id: "idbi",
        title: "IDBI Bank",
        description: "An in-depth look into the digital transformation and user experience revamp for IDBI Bank. Exploring fintech workflows, security, and user onboarding optimization.",
        pdf: idbiBankPdf,
        type: "pdf",
        tags: ["Fintech", "Enterprise UI", "Digital Banking"],
        color: "var(--secondary-color)",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
    },
    {
        id: "hdfc",
        title: "HDFC Corporate Onboarding",
        description: "A deep dive into 'Vibe Coding'—optimizing corporate banking journeys through intelligent motion design, Apple-style easing, and API resilience mechanisms.",
        type: "interactive",
        tags: ["Vibe Coding", "Frontend Architecture", "CRO"],
        color: "#004C8F",
        gradient: "linear-gradient(135deg, #004C8F 0%, #00bbff 100%)"
    },
    {
        id: "fintech-onboarding",
        title: "Fintech Onboarding Journey",
        description: "Transforming manual KYC workflows into seamless, hyper-automated data pipelines utilizing bio-metrics and OCR abstraction. I designed end-to-end user journeys that significantly reduced cognitive load, streamlined complex regulatory compliances into frictionless micro-interactions, and ultimately led to a marked increase in successful account activations.",
        type: "interactive",
        tags: ["Digital KYC", "Biometrics", "UX Architecture"],
        color: "#10b981",
        gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)"
    },
    {
        id: "ai-dashboard",
        title: "AI-Driven Enterprise Dashboard",
        description: "A comprehensive look into visualizing complex trading telemetry using WebGL rendering, NLP Data Synthesis, and drag-and-drop workspace layouts.",
        type: "interactive",
        tags: ["Data Vis", "React Architecture", "FinOps"],
        color: "#8b5cf6",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)"
    }
];

const CaseStudy = () => {
    const [selectedStudyId, setSelectedStudyId] = useState(null);

    const handleStudyClick = (study, e) => {
        if (study.type === 'interactive') {
            e.preventDefault();
            setSelectedStudyId(study.id);
        }
    };

    return (
        <section id="casestudies" className="case-studies">
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
                        <h2 className="section-title">Case <span className="text-gradient">Studies</span></h2>
                        <p className="section-subtitle">In-depth explorations of my design process, problem-solving approach, and impactful outcomes for complex digital products. Each study highlights how I translate challenges into user-centric, scalable, and business-driven solutions.</p>
                    </div>
                </div>

                <div className="case-studies-grid">
                    {caseStudies.map((study) => (
                        <div className="case-study-card group" key={study.id}>
                            <div className="case-study-glow" style={{ '--accent-glow': study.color }}></div>
                            <div className="case-study-content">
                                <div className="cs-header-top">
                                    <div className="case-study-icon" style={{ background: study.gradient }}>
                                        {study.type === 'interactive' ? <MonitorPlay size={24} color="white" /> : <FileText size={24} color="white" />}
                                    </div>
                                    <span className="cs-type-badge">{study.type === 'interactive' ? 'Demo' : 'PDF Study'}</span>
                                </div>

                                <h3 className="case-study-title">{study.title}</h3>
                                <p className="case-study-desc">{study.description}</p>

                                <div className="case-study-tags">
                                    {study.tags.map((tag, i) => (
                                        <span className="case-study-tag" key={i}>{tag}</span>
                                    ))}
                                </div>

                                <div className="case-study-actions">
                                    {study.type === 'interactive' ? (
                                        <button onClick={(e) => handleStudyClick(study, e)} className="cs-link" aria-label={`View interactive demo for ${study.title}`}>
                                            View Interactive Demo <ArrowRight size={18} aria-hidden="true" />
                                        </button>
                                    ) : (
                                        <>
                                            <a href={study.pdf} target="_blank" rel="noopener noreferrer" className="cs-link" aria-label={`Read case study for ${study.title}`}>
                                                Read Full Study <ArrowRight size={18} aria-hidden="true" />
                                            </a>
                                            <a href={study.pdf} download className="cs-download-link" title={`Download ${study.title} PDF`} aria-label={`Download ${study.title} Case Study PDF`}>
                                                <Download size={22} aria-hidden="true" />
                                            </a>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conditionally Render the Interactive HDFC Case Study */}
            {selectedStudyId === 'hdfc' && (
                <HDFCCaseStudy onClose={() => setSelectedStudyId(null)} />
            )}
            
            {selectedStudyId === 'fintech-onboarding' && (
                <FintechOnboardingCaseStudy onClose={() => setSelectedStudyId(null)} />
            )}

            {selectedStudyId === 'ai-dashboard' && (
                <AIDashboardCaseStudy onClose={() => setSelectedStudyId(null)} />
            )}
            
        </section>
    );
};

export default CaseStudy;
