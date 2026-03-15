import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, CheckCircle2, User, Target, Lightbulb, PenTool, MonitorPlay, AlertTriangle, Zap, CheckCircle } from 'lucide-react';
import BreathingDropzone from './BreathingDropzone';
import './HDFCCaseStudy.css';

const ProcessIcon = ({ Icon, title, description, step }) => (
    <div className="process-icon-container">
        <div className="process-icon-circle">
            <span className="process-icon-step">0{step}</span>
            <Icon size={28} />
        </div>
        <h4 className="process-icon-title">{title}</h4>
        <p className="process-icon-desc">{description}</p>
    </div>
);

const PainPoint = ({ number, title, description }) => (
    <div className="pain-point-card">
        <div className="pain-point-number">{number}</div>
        <div className="pain-point-text">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
);

const HDFCCaseStudy = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div 
        className="case-study-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="case-study-modal-content"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="case-study-close-btn" onClick={onClose}>
            <X size={24} />
          </button>
          
          {/* 1. HERO HEADER */}
          <div className="case-study-header hdfc-header header-large">
             <div className="hdfc-header-overlay bg-overlay-dark"></div>
             <motion.div 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.2 }}
                className="case-study-header-text"
             >
                <div className="badge-container">
                    <span className="case-study-badge tag-fintech">Enterprise Fintech</span>
                    <span className="case-study-badge tag-vibe">Vibe Coding Platform</span>
                </div>
                <h1 className="hero-title-large">HDFC Corporate Salary Journey</h1>
                <p className="hero-subtitle-large">Redefining banking forms into hyper-fluid digital experiences using Angular state signals and Apple-style motion easing.</p>
             </motion.div>
          </div>

          <div className="case-study-body p-0">
            
            {/* 2. PROJECT OVERVIEW */}
            <div className="overview-section">
                <div className="content-container overview-grid">
                    <div className="overview-main">
                        <h3 className="section-label">Project Overview</h3>
                        <p className="overview-text">
                            The traditional onboarding experience for corporate accounts was perceived as tedious, rigid, and strictly utilitarian. We architected a paradigm shift, transforming the HDFC Corporate Salaried Account pipeline from a static data-entry chore into a premium, hyper-responsive digital journey.
                        </p>
                    </div>
                    <div className="overview-sidebar">
                        <div className="sidebar-item">
                            <span className="sidebar-label">My Role</span>
                            <span className="sidebar-value">Lead UX Engineer & UI Designer</span>
                        </div>
                        <div className="sidebar-item">
                            <span className="sidebar-label">Timeline</span>
                            <span className="sidebar-value">12 Weeks</span>
                        </div>
                        <div className="sidebar-item">
                            <span className="sidebar-label">Tools & Stack</span>
                            <span className="sidebar-value">Angular 18, Tailwind, SCSS, Figma</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. THE PROBLEM & GOAL */}
            <div className="problem-goal-section">
                <div className="content-container">
                    <div className="pg-grid">
                        <div className="pg-card card-red">
                            <div className="pg-icon icon-red">
                                <AlertTriangle size={24} />
                            </div>
                            <h3 className="pg-title">The Problem</h3>
                            <p className="pg-desc">
                                Corporate customers face immense cognitive load when confronted with multiple un-styled API touchpoints and massive scrolling forms. A lack of tactile visual feedback during complex states like Digital KYC caused user anxiety and mid-funnel abandonment.
                            </p>
                        </div>

                        <div className="pg-card card-blue">
                            <div className="pg-icon icon-blue">
                                <Target size={24} />
                            </div>
                            <h3 className="pg-title">The Goal</h3>
                            <p className="pg-desc">
                                Lower cognitive load by building a "Vibe Coding" environment. Introduce frictionless micro-interactions, eliminate legacy loading spinners through perceived-performance shimmer layouts, and establish deep trust via haptic error signatures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. DESIGN PROCESS */}
            <div className="process-section">
                <div className="content-container">
                    <h3 className="process-title">The Design Process</h3>
                    <div className="process-grid">
                        <ProcessIcon step="1" Icon={Search} title="Empathize" description="Identify why corporate users abandon the journey." />
                        <ProcessIcon step="2" Icon={User} title="Define" description="Map constraints of legacy backend APIs." />
                        <ProcessIcon step="3" Icon={Lightbulb} title="Ideate" description="Concept 'Vibe Coding' and motion standards." />
                        <ProcessIcon step="4" Icon={PenTool} title="Prototype" description="Build high-fidelity, reactive Angular components." />
                        <ProcessIcon step="5" Icon={CheckCircle2} title="Test" description="Validate UI resilience and network error handling." />
                    </div>
                </div>
            </div>

            {/* 5. PAIN POINTS */}
            <div className="pain-points-section">
                <div className="content-container">
                    <h3 className="section-title-dark">User Pain Points</h3>
                    <p className="section-subtitle-dark">During discovery, four critical friction points consistently tanked conversion rates in the legacy onboarding system.</p>
                    
                    <div className="pain-points-grid">
                        <PainPoint number="1" title="Information Overload" description="Forms displayed entirely upfront instead of progressively disclosing specific fields based on user input." />
                        <PainPoint number="2" title="File Upload Anxiety" description="Standard HTML file inputs gave zero feedback on whether the PAN card actually began uploading." />
                        <PainPoint number="3" title="Spinner Fatigue" description="Lengthy backend validations forces users to stare at static white screens with basic looping SVG spinners." />
                        <PainPoint number="4" title="Destructive Errors" description="Form validation errors appeared as tiny red text, easily missed, leading to frustrating form-submission loops." />
                    </div>
                </div>
            </div>

            {/* 6. TACTICAL DEEP DIVES */}
            <div className="solutions-section">
                <div className="content-container">
                    <h3 className="solutions-main-title">Architecting the Solutions</h3>
                    
                    {/* Deep Dive 1: The Interactive Dropzone */}
                    <div className="solution-block">
                        <div className="solution-split">
                            <div className="solution-text">
                                <span className="solution-label label-orange">Solution 01</span>
                                <h4 className="solution-title">The "Breathing" KYC Dropzone</h4>
                                <p className="solution-desc">
                                    The KYC phase causes the highest drop-off. Users struggle with file pickers and ambiguous uploading states. We engineered a spatial container that transitions to a rhythmic 3-second CSS `@keyframes` pulse in HDFC Blue upon drag-over.
                                </p>
                                <ul className="solution-list">
                                    <li>
                                        <CheckCircle className="list-icon icon-green" size={18} />
                                        <span>Replaced standard inputs with tactile CSS properties.</span>
                                    </li>
                                    <li>
                                        <CheckCircle className="list-icon icon-green" size={18} />
                                        <span>Utilized SVG <code className="inline-code">stroke-dashoffset</code> bound to state signals for granular progress visualization.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="solution-media media-box">
                                <h5 className="media-label">Interactive Component Demo</h5>
                                <BreathingDropzone />
                            </div>
                        </div>
                    </div>

                    {/* Deep Dive 2: Haptic Resilience & Shimmers */}
                    <div className="solution-block border-top">
                        <div className="solution-split reverse-split">
                            <div className="solution-text">
                                <span className="solution-label label-blue">Solution 02</span>
                                <h4 className="solution-title">API Resilience & Haptics</h4>
                                <p className="solution-desc">
                                    A beautiful UI shatters under network stress. We replaced loading spinners with structural "Shimmer Skeletons" that perfectly map to the incoming form, leveraging psychological "perceived performance" to mask latency.
                                </p>
                                <p className="solution-desc">
                                    When a user triggers an error, we engineered a physical <code className="inline-code">@shake</code> animation to vibrate the input field, mimicking iOS haptic motor feedback and sliding up an elegant glass toast.
                                </p>
                            </div>
                            <div className="solution-media">
                                <div className="video-placeholder">
                                    <MonitorPlay size={48} className="video-icon" />
                                    <span className="video-text">View Haptic Recording</span>
                                    <span className="video-subtext">Placeholder for Screen GIF</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 7. METRICS & IMPACT */}
            <div className="impact-section">
                <div className="content-container text-center">
                    <Zap size={48} className="impact-main-icon" />
                    <h3 className="impact-title">Project Impact</h3>
                    <p className="impact-subtitle">
                        By abstracting regulatory complexity behind intelligent APIs and deeply empathetic motion design, the "Vibe Coding" architecture fundamentally shifted HDFC's operational success.
                    </p>
                    
                    <div className="impact-grid">
                        <div className="impact-card">
                            <h4 className="impact-stat">-40%</h4>
                            <span className="impact-label">In Abandonment Rate</span>
                        </div>
                        <div className="impact-card card-elevated">
                            <h4 className="impact-stat stat-green">3x</h4>
                            <span className="impact-label">Speed to Completion</span>
                        </div>
                        <div className="impact-card">
                            <h4 className="impact-stat">98%</h4>
                            <span className="impact-label">Positive Feedback</span>
                        </div>
                    </div>
                </div>
            </div>
            
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HDFCCaseStudy;
