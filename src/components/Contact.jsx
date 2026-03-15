import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact container">
            <div className="contact-card glass animate-in">
                {/* Premium Background Vector Animations */}
                <div className="contact-bg-vectors">
                    {/* Abstract Topographic Mapping / Concentric Waves */}
                    <svg className="contact-wave" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <circle cx="400" cy="400" r="300" fill="none" stroke="var(--primary-color)" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="5, 15" />
                        <circle cx="400" cy="400" r="340" fill="none" stroke="var(--secondary-color)" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="10, 25" />
                        <circle cx="400" cy="400" r="380" fill="none" stroke="var(--primary-color)" strokeWidth="0.3" strokeOpacity="0.2" />
                    </svg>

                    {/* Left HUD Matrix */}
                    <svg className="contact-hud-left" viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <rect x="20" y="50" width="160" height="2" fill="var(--secondary-color)" fillOpacity="0.3" />
                        <rect x="20" y="70" width="100" height="2" fill="var(--text-primary)" fillOpacity="0.1" />
                        <rect x="20" y="90" width="140" height="2" fill="var(--secondary-color)" fillOpacity="0.15" />
                        
                        <circle cx="50" cy="250" r="30" fill="none" stroke="var(--primary-color)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 8" className="rotate-fast" />
                        <circle cx="50" cy="250" r="20" fill="none" stroke="var(--secondary-color)" strokeWidth="2" strokeOpacity="0.2" className="rotate-slow-reverse" />
                        <circle cx="50" cy="250" r="5" fill="var(--primary-color)" fillOpacity="0.8" className="pulse-dot" />
                    </svg>

                    {/* Right Tech Nodes */}
                    <svg className="contact-hud-right" viewBox="0 0 300 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <polygon points="150,150 250,200 200,300 100,250" fill="none" stroke="var(--primary-color)" strokeWidth="1" strokeOpacity="0.15" />
                        <path d="M150 150 L250 50 L300 100" fill="none" stroke="var(--secondary-color)" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 5" />
                        
                        <circle cx="150" cy="150" r="4" fill="var(--primary-color)" fillOpacity="0.6" className="pulse-dot" style={{ animationDelay: '0.5s' }} />
                        <circle cx="250" cy="200" r="6" fill="var(--secondary-color)" fillOpacity="0.8" className="pulse-dot" style={{ animationDelay: '1.2s' }} />
                        <circle cx="200" cy="300" r="4" fill="var(--primary-color)" fillOpacity="0.5" className="pulse-dot" style={{ animationDelay: '2.1s' }} />
                        
                        <rect x="150" y="450" width="80" height="80" fill="none" stroke="var(--text-primary)" strokeWidth="0.5" strokeOpacity="0.1" transform="rotate(45 190 490)" className="rotate-slow" />
                        <rect x="170" y="470" width="40" height="40" fill="none" stroke="var(--secondary-color)" strokeWidth="1" strokeOpacity="0.2" transform="rotate(20 190 490)" className="rotate-fast-reverse" />
                    </svg>
                </div>

                <div className="contact-content">
                    <div className="contact-heading-group">
                        <span className="contact-eyebrow text-gradient">Enhanced by AI. Driven by strategy.</span>
                        <h2 className="section-title">Design engineered for real business growth.</h2>
                    </div>

                    <p className="section-subtitle">
                        Let’s build what others can’t.<br />
                        Grab a virtual coffee and let’s talk.
                    </p>

                    <div className="contact-footer">
                        <div className="contact-links-group" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                            <a href="mailto:kishan.tiwari1092@gmail.com" className="contact-email" aria-label="Send an email to Kishan Tiwari">kishan.tiwari1092@gmail.com</a>
                            <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                Other : <a href="https://profile-portfolio-woad.vercel.app/Kishan-Tiwari-Profile" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', fontWeight: '600', textDecoration: 'none' }} className="contact-other-link">Kishan Tiwari Profile</a>
                            </div>
                        </div>
                        <div className="contact-actions" style={{ marginTop: '1rem' }}>
                            <a href="https://www.linkedin.com/in/kishan-tiwari-991b9b194/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" aria-label="Visit Kishan Tiwari's LinkedIn Profile">LinkedIn</a>
                            <a href="/Kishan 6 years (1).pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label="Download Kishan Tiwari's CV">Download CV</a>
                        </div>
                    </div>
                </div>
                <div className="contact-glow"></div>
            </div>
        </section>
    );
};

export default Contact;
