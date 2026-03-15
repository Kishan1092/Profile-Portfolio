import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, CheckCircle2, User, Target, Lightbulb, PenTool, AlertTriangle, Zap, CheckCircle, DatabaseZap, LayoutDashboard, BrainCircuit } from 'lucide-react';
import './HDFCCaseStudy.css';

const ProcessIcon = ({ Icon, title, description, step }) => (
    <div className="process-icon-container">
        <div className="process-icon-circle" style={{ backgroundColor: '#8b5cf6' }}>
            <span className="process-icon-step" style={{ backgroundColor: '#7c3aed' }}>0{step}</span>
            <Icon size={28} />
        </div>
        <h4 className="process-icon-title">{title}</h4>
        <p className="process-icon-desc">{description}</p>
    </div>
);

const PainPoint = ({ number, title, description }) => (
    <div className="pain-point-card">
        <div className="pain-point-number" style={{ backgroundColor: '#f5f3ff', color: '#7c3aed' }}>{number}</div>
        <div className="pain-point-text">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
);

const AIDashboardCaseStudy = ({ onClose }) => {
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
          <div className="case-study-header ai-dashboard-header header-large">
             <div className="hdfc-header-overlay bg-overlay-dark"></div>
             <motion.div 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.2 }}
                className="case-study-header-text"
             >
                <div className="badge-container">
                    <span className="case-study-badge tag-fintech" style={{borderColor: 'rgba(139, 92, 246, 0.5)', color: '#ddd6fe', backgroundColor: 'rgba(139, 92, 246, 0.2)'}}>Data Architecture</span>
                    <span className="case-study-badge tag-vibe">AI Synthesis</span>
                </div>
                <h1 className="hero-title-large">AI-Driven Enterprise Dashboard</h1>
                <p className="hero-subtitle-large">Visualizing millions of rows of data into a single, proactive source of truth for global financial analysts.</p>
             </motion.div>
          </div>

          <div className="case-study-body p-0">
            
            {/* 2. PROJECT OVERVIEW */}
            <div className="overview-section">
                <div className="content-container overview-grid">
                    <div className="overview-main">
                        <h3 className="section-label">Project Overview</h3>
                        <p className="overview-text">
                            In a global financial organization, analysts are often required to scrape data across five different legacy platforms simultaneously just to understand immediate liquidity risks. The cognitive friction associated with correlating massive raw data drastically slows down critical decision-making. The goal of this project was to construct an autonomous, AI-driven dashboard system that synthesizes, normalizes, and visualizes multi-stream data in real-time.
                        </p>
                    </div>
                    <div className="overview-sidebar">
                        <div className="sidebar-item">
                            <span className="sidebar-label">My Role</span>
                            <span className="sidebar-value">Architect / Lead UI Engineer</span>
                        </div>
                        <div className="sidebar-item">
                            <span className="sidebar-label">Timeline</span>
                            <span className="sidebar-value">14 Weeks</span>
                        </div>
                        <div className="sidebar-item">
                            <span className="sidebar-label">Tools & Stack</span>
                            <span className="sidebar-value">React, WebGL/Canvas, Tailwind CSS, Python (AI)</span>
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
                                Exposing thousands of data points without hierarchy causes analysts to miss outliers resulting in "Analysis Paralysis." Furthermore, traditional polling mechanisms cause dangerous rendering delays in high-frequency trading data visualizations, crashing standard DOM layouts.
                            </p>
                        </div>

                        <div className="pg-card card-blue" style={{backgroundColor: '#f5f3ff', borderColor: '#ede9fe'}}>
                            <div className="pg-icon icon-blue" style={{backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6'}}>
                                <Target size={24} />
                            </div>
                            <h3 className="pg-title">The Goal</h3>
                            <p className="pg-desc">
                                Move the UI from a "reactive viewer" to a "proactive assistant". Implement NLP widget summaries to parse data before the human does, and re-architect the charting engine to use WebGL {"<canvas>"} arrays to easily render 60fps data streams without frame-skipping.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. DESIGN PROCESS */}
            <div className="process-section" style={{backgroundColor: '#2e1065', borderTopColor: '#2e1065', borderBottomColor: '#2e1065'}}>
                <div className="content-container">
                    <h3 className="process-title">The Engineering Process</h3>
                    <div className="process-grid">
                        <ProcessIcon step="1" Icon={Search} title="Audit" description="Analyze browser memory limits on heavy SVGs." />
                        <ProcessIcon step="2" Icon={User} title="Synthesize" description="Wireframe drag-and-drop dashboard grid logic." />
                        <ProcessIcon step="3" Icon={Lightbulb} title="Integrate" description="Hook up Python NLP backend streams." />
                        <ProcessIcon step="4" Icon={PenTool} title="Render" description="Migrate heavy DOM charts into HTML5 Canvas." />
                        <ProcessIcon step="5" Icon={CheckCircle2} title="Stress Test" description="Simulate 1-million row injection at 60fps." />
                    </div>
                </div>
            </div>

            {/* 5. PAIN POINTS */}
            <div className="pain-points-section">
                <div className="content-container">
                    <h3 className="section-title-dark">Analyst Pain Points</h3>
                    <p className="section-subtitle-dark">Financial operators were battling their tools instead of the market, losing millions of dollars in reaction-time lag.</p>
                    
                    <div className="pain-points-grid">
                        <PainPoint number="1" title="Analysis Paralysis" description="Exposing thousands of raw data rows without clustering or visual hierarchy fundamentally obscures critical trading anomalies." />
                        <PainPoint number="2" title="Static Architecture" description="Pre-configured layouts fail to adapt when different analysts care about completely different metrics (e.g., Credit vs. Liquidity)." />
                        <PainPoint number="3" title="Dangerous Data Latency" description="Traditional REST polling mechanisms caused unacceptable rendering delays when visualizing high-frequency trading data." />
                        <PainPoint number="4" title="Deep Context Switching" description="Routing analysts to deep child-pages just to inspect a single anomaly resulted in a total loss of situational awareness." />
                    </div>
                </div>
            </div>

            {/* 6. TACTICAL DEEP DIVES */}
            <div className="solutions-section">
                <div className="content-container">
                    <h3 className="solutions-main-title">Architecting the Solutions</h3>
                    
                    {/* Deep Dive 1: NLP Context */}
                    <div className="solution-block">
                        <div className="solution-split">
                            <div className="solution-text">
                                <span className="solution-label label-blue" style={{color: '#8b5cf6'}}>Solution 01</span>
                                <h4 className="solution-title">AI-Summarized Contextual Widgets</h4>
                                <p className="solution-desc">
                                    Rather than simply rendering a massive table of recent trades, we embedded a Natural Language Processing (NLP) layer. Above the raw data, an AI widget generates a human-readable synthesis.
                                </p>
                                <ul className="solution-list">
                                    <li>
                                        <CheckCircle className="list-icon icon-green" style={{color: '#8b5cf6'}} size={18} />
                                        <span>Instead of "View 145 rows", the UI explicitly states: "Warning: Assets dipped 4% in EU branches."</span>
                                    </li>
                                    <li>
                                        <CheckCircle className="list-icon icon-green" style={{color: '#8b5cf6'}} size={18} />
                                        <span>Implemented highly customizable Drag-and-Drop modular widget layouts that save to a user's session profile.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="solution-media media-box" style={{backgroundColor: '#0f172a', padding: '2rem'}}>
                                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', justifyContent: 'center'}}>
                                    <h5 className="media-label" style={{color: '#8b5cf6', textAlign: 'left'}}>NLP Data Synthesis Widget</h5>
                                    <div style={{background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', padding: '1.5rem', borderLeft: '4px solid #8b5cf6'}}>
                                       <BrainCircuit size={24} color="#a78bfa" style={{marginBottom: '0.75rem'}} />
                                       <p style={{color: '#f8fafc', fontSize: '1rem', fontStyle: 'italic', margin: 0, lineHeight: 1.5}}>
                                         "Market volatility detected in AAPL (+3.2%) and MSFT (-1.1%) over the last 15 minutes. Suggest reviewing tech sector allocations immediately."
                                       </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Deep Dive 2: WebSockets & Canvas */}
                    <div className="solution-block border-top">
                        <div className="solution-split reverse-split">
                            <div className="solution-text">
                                <span className="solution-label label-orange" style={{color: '#d946ef'}}>Solution 02</span>
                                <h4 className="solution-title">WebSockets & WebGL Canvas Rendering</h4>
                                <p className="solution-desc">
                                    When dealing with millions of localized data points, standard SVG charts cause serious browser memory leaks. We re-architected the heavy charting modules to use a <code className="inline-code">{"<canvas>"}</code> rendering engine via WebGL integrations.
                                </p>
                                <p className="solution-desc">
                                    <strong>Zero Context Switching:</strong> We designed an embedded "Detail Drawer" architecture. Clicking a data point fluidly slides out a contextual pane pushing the main dashboard over. Analysts remain securely anchored in their primary context while investigating localized details.
                                </p>
                            </div>
                            <div className="solution-media">
                                <div className="video-placeholder" style={{backgroundColor: '#3b0764'}}>
                                    <DatabaseZap size={48} className="video-icon" color="#d946ef" />
                                    <span className="video-text" style={{color: '#f8fafc'}}>Canvas Rendering Demo</span>
                                    <span className="video-subtext">Handling 100,000 DOM nodes at 60fps</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 7. METRICS & IMPACT */}
            <div className="impact-section" style={{background: 'linear-gradient(135deg, #4c1d95 0%, #2e1065 100%)'}}>
                <div className="content-container text-center">
                    <LayoutDashboard size={48} className="impact-main-icon" style={{color: '#c084fc'}} />
                    <h3 className="impact-title">Project Impact</h3>
                    <p className="impact-subtitle" style={{color: '#ddd6fe'}}>
                        Enterprise tools do not have to look outdated just because they handle complex operations. We proved that wrapping sophisticated data engineering in consumer-grade UI architecture directly correlates to massive operational efficiency.
                    </p>
                    
                    <div className="impact-grid">
                        <div className="impact-card">
                            <h4 className="impact-stat" style={{color: '#f8fafc'}}>-65%</h4>
                            <span className="impact-label">In Reaction Time Delay</span>
                        </div>
                        <div className="impact-card card-elevated">
                            <h4 className="impact-stat stat-green" style={{color: '#c084fc'}}>+300%</h4>
                            <span className="impact-label">DOM Memory Optimization</span>
                        </div>
                        <div className="impact-card">
                            <h4 className="impact-stat" style={{color: '#f8fafc'}}>4</h4>
                            <span className="impact-label">Legacy Platforms Consolidated</span>
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

export default AIDashboardCaseStudy;
