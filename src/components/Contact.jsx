import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact container">
            <div className="contact-card glass animate-in">
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
                        <a href="mailto:kishan.tiwari1092@gmail.com" className="contact-email">kishan.tiwari1092@gmail.com</a>
                        <div className="contact-actions">
                            <a href="https://www.linkedin.com/in/kishan-tiwari-991b9b194/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">LinkedIn</a>
                            <a href="/Kishan 6 years (1).pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Download CV</a>
                        </div>
                    </div>
                </div>
                <div className="contact-glow"></div>
            </div>
        </section>
    );
};

export default Contact;
