import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, CheckCircle2, User, Target, Lightbulb, PenTool, AlertTriangle, Zap, CheckCircle, Smartphone, ScanLine, ShieldCheck } from 'lucide-react';
import './HDFCCaseStudy.css';

const ProcessIcon = ({ Icon, title, description, step }) => (
    <div className="process-icon-container">
        <div className="process-icon-circle" style={{ backgroundColor: '#10b981' }}>
            <span className="process-icon-step" style={{ backgroundColor: '#059669' }}>0{step}</span>
            <Icon size={28} />
        </div>
        <h4 className="process-icon-title">{title}</h4>
        <p className="process-icon-desc">{description}</p>
    </div>
);

const PainPoint = ({ number, title, description }) => (
    <div className="pain-point-card">
        <div className="pain-point-number" style={{ backgroundColor: '#ecfdf5', color: '#059669' }}>{number}</div>
        <div className="pain-point-text">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
);

const FintechOnboardingCaseStudy = ({ onClose }) => {
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
          <div className="case-study-header fintech-header header-large">
             <div className="hdfc-header-overlay bg-overlay-dark"></div>
             <motion.div 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.2 }}
                className="case-study-header-text"
             >
                <div className="badge-container">
                    <span className="case-study-badge tag-fintech" style={{borderColor: 'rgba(16, 185, 129, 0.5)', color: '#a7f3d0', backgroundColor: 'rgba(16, 185, 129, 0.2)'}}>Digital KYC</span>
                    <span className="case-study-badge tag-vibe">Conversion Optimization</span>
                </div>
                <h1 className="hero-title-large">Fintech Onboarding Journey</h1>
                <p className="hero-subtitle-large">Solving the highest drop-off touchpoint in finance with intelligent automation and biometric abstraction.</p>
             </motion.div>
          </div>

          <div className="case-study-body p-0">
            
            {/* 2. PROJECT OVERVIEW */}
            <div className="overview-section">
                <div className="content-container overview-grid">
                    <div className="overview-main">
                        <h3 className="section-label">Project Overview</h3>
                        <p className="overview-text">
                            The financial sector faces the highest cart-abandonment rate during onboarding compared to any other industry. Complex regulatory requirements (KYC/AML) force banks to demand a large amount of personal data upfront. The goal of this project was to transform a daunting 15-minute manual data entry process into a 3-minute, highly automated verification journey feeling incredibly secure and effortlessly precise.
                        </p>
                    </div>
                    <div className="overview-sidebar">
                        <div className="sidebar-item">
                            <span className="sidebar-label">My Role</span>
                            <span className="sidebar-value">UX Architect / Lead UI Engineer</span>
                        </div>
                        <div className="sidebar-item">
                            <span className="sidebar-label">Timeline</span>
                            <span className="sidebar-value">10 Weeks</span>
                        </div>
                        <div className="sidebar-item">
                            <span className="sidebar-label">Tools & Stack</span>
                            <span className="sidebar-value">React, Tailwind CSS, Framer Motion, GraphQL</span>
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
                            <h3 className="pg-title">The Challenge</h3>
                            <p className="pg-desc">
                                Heavy information overload with legacy systems displaying 40+ input fields on a single scrolling page. Users waited in a "pending" state for days with completely opaque verification times, exacerbating the high bounce rate during mobile/desktop context switches.
                            </p>
                        </div>

                        <div className="pg-card card-blue" style={{backgroundColor: '#ecfdf5', borderColor: '#d1fae5'}}>
                            <div className="pg-icon icon-blue" style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981'}}>
                                <Target size={24} />
                            </div>
                            <h3 className="pg-title">The Solution</h3>
                            <p className="pg-desc">
                                Omnichannel & Asynchronous Verification. Implement progressive profiling to unroll forms conditionally, integrate bio-metric OCR to eliminate manual data entry, and construct a real-time WebSocket architecture for seamless desktop-to-mobile QR handoffs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. DESIGN PROCESS */}
            <div className="process-section" style={{backgroundColor: '#064e3b', borderTopColor: '#064e3b', borderBottomColor: '#064e3b'}}>
                <div className="content-container">
                    <h3 className="process-title">The Design Process</h3>
                    <div className="process-grid">
                        <ProcessIcon step="1" Icon={Search} title="Analyze" description="Audit drop-off points in the KYC timeline." />
                        <ProcessIcon step="2" Icon={User} title="Map" description="Identify the friction between mobile and desktop." />
                        <ProcessIcon step="3" Icon={Lightbulb} title="Innovate" description="Design 'Progressive Profiling' logic bounds." />
                        <ProcessIcon step="4" Icon={PenTool} title="Architect" description="Build React logic for cross-device websockets." />
                        <ProcessIcon step="5" Icon={CheckCircle2} title="Validate" description="A/B test OCR bounding box accuracy." />
                    </div>
                </div>
            </div>

            {/* 5. PAIN POINTS */}
            <div className="pain-points-section">
                <div className="content-container">
                    <h3 className="section-title-dark">User Pain Points</h3>
                    <p className="section-subtitle-dark">Legacy onboarding pipelines force users into exhaustive data entry loops without establishing immediate product value.</p>
                    
                    <div className="pain-points-grid">
                        <PainPoint number="1" title="Information Overload" description="Legacy systems displayed 40+ input fields on a single scrolling page, causing immediate cognitive fatigue." />
                        <PainPoint number="2" title="Opaque Verification Times" description="Users waited in a 'pending' state for days without feedback on document validation." />
                        <PainPoint number="3" title="High Device Fragmentation" description="The flow needed to be pixel-perfect whether a user started on a desktop and finished on a mobile device to scan their ID." />
                        <PainPoint number="4" title="Security Ambiguity" description="Form submissions lacked visceral feedback, causing users to distrust the privacy of their uploaded identity documents." />
                    </div>
                </div>
            </div>

            {/* 6. TACTICAL DEEP DIVES */}
            <div className="solutions-section">
                <div className="content-container">
                    <h3 className="solutions-main-title">Architecting the Solutions</h3>
                    
                    {/* Deep Dive 1: Progressive Profiling */}
                    <div className="solution-block">
                        <div className="solution-split">
                            <div className="solution-text">
                                <span className="solution-label label-blue" style={{color: '#10b981'}}>Solution 01</span>
                                <h4 className="solution-title">Intelligent Form Unrolling</h4>
                                <p className="solution-desc">
                                    Instead of front-loading the burden, we implemented Progressive Profiling. We asked only for the absolute minimum to create the account shell. Forms "unroll" conditionally via smooth Framer Motion height animations.
                                </p>
                                <ul className="solution-list">
                                    <li>
                                        <CheckCircle className="list-icon icon-green" size={18} />
                                        <span>If a user inputs 'Self-Employed', the DOM slides down business-specific fields.</span>
                                    </li>
                                    <li>
                                        <CheckCircle className="list-icon icon-green" size={18} />
                                        <span>Eliminates the need for disruptive page-routing during branch-logic steps.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="solution-media media-box" style={{backgroundColor: '#f8fafc', padding: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Form Unrolling" style={{width: '100%', height: '100%', objectFit: 'cover', margin: 0}} />
                            </div>
                        </div>
                    </div>

                    {/* Deep Dive 2: OCR & QR Handoff */}
                    <div className="solution-block border-top">
                        <div className="solution-split reverse-split">
                            <div className="solution-text">
                                <span className="solution-label label-orange" style={{color: '#ea580c'}}>Solution 02</span>
                                <h4 className="solution-title">Bio-metric OCR & The Desktop-to-Mobile Handoff</h4>
                                <p className="solution-desc">
                                    We removed manual data entry entirely. Using a Vision API, the user simply holds their ID up to the camera. The UI draws an intelligent bounding box around the document, and the parsed text floats instantly into the respective form fields underneath.
                                </p>
                                <p className="solution-desc">
                                    <strong>The QR Handoff:</strong> Achieved a seamless transition by utilizing a secure WebSocket connection. If a desktop user lacks a webcam, a dynamically generated QR code initializes the camera hook on their mobile browser, seamlessly picking up exactly where they left off without losing session state.
                                </p>
                            </div>
                            <div className="solution-media">
                                <div className="video-placeholder" style={{backgroundColor: '#1e293b'}}>
                                    <Smartphone size={48} className="video-icon" color="#10b981" />
                                    <span className="video-text" style={{color: '#f8fafc'}}>View WebSocket Sync Demo</span>
                                    <span className="video-subtext">Desktop ↔ Mobile State Mirroring</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 7. METRICS & IMPACT */}
            <div className="impact-section" style={{background: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)'}}>
                <div className="content-container text-center">
                    <ShieldCheck size={48} className="impact-main-icon" style={{color: '#34d399'}} />
                    <h3 className="impact-title">Project Impact</h3>
                    <p className="impact-subtitle" style={{color: '#a7f3d0'}}>
                        By proving that users don't hate sharing information, they just hate feeling confused, this onboarding flow became the new benchmark for merging strict banking compliance with delightful consumer-grade UX.
                    </p>
                    
                    <div className="impact-grid">
                        <div className="impact-card">
                            <h4 className="impact-stat" style={{color: '#f8fafc'}}>+42%</h4>
                            <span className="impact-label">Conversion Increase</span>
                        </div>
                        <div className="impact-card card-elevated">
                            <h4 className="impact-stat stat-green" style={{color: '#34d399'}}>4 min</h4>
                            <span className="impact-label">Time-to-Value (Down from 15m)</span>
                        </div>
                        <div className="impact-card">
                            <h4 className="impact-stat" style={{color: '#f8fafc'}}>-80%</h4>
                            <span className="impact-label">Failed Upload Support Tickets</span>
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

export default FintechOnboardingCaseStudy;
