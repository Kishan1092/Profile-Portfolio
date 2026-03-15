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
        description: "Transforming manual KYC workflows into seamless, hyper-automated data pipelines utilizing bio-metrics and OCR abstraction.",
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
                <div className="section-header">
                    <h2 className="section-title">Case <span className="text-white">Studies</span></h2>
                    <p className="section-subtitle">Deep dives into my design process, problem-solving methodologies, and final outcomes for complex digital products.</p>
                </div>

                <div className="case-studies-grid">
                    {caseStudies.map((study) => (
                        <div className="case-study-card group" key={study.id}>
                            <div className="case-study-glow" style={{ background: study.color }}></div>
                            <div className="case-study-content glass">
                                <div className="case-study-icon" style={{ background: study.gradient }}>
                                    {study.type === 'interactive' ? <MonitorPlay size={32} color="white" /> : <FileText size={32} color="white" />}
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
                                        <button onClick={(e) => handleStudyClick(study, e)} className="btn btn-primary btn-small case-study-btn border-none" style={{ backgroundColor: study.color }}>
                                            View Interactive Demo <ArrowRight size={16} />
                                        </button>
                                    ) : (
                                        <>
                                            <a href={study.pdf} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small case-study-btn">
                                                View Case Study <ArrowRight size={16} />
                                            </a>
                                            <a href={study.pdf} download className="btn btn-outline btn-small icon-only-btn" title="Download PDF">
                                                <Download size={18} />
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
