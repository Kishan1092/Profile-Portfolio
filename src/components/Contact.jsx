import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact container">
            <div className="contact-card glass animate-in">
                <div className="contact-content">
                    <h2 className="section-title">Let's build something <span className="text-gradient">extraordinary</span>.</h2>
                    <p className="section-subtitle">
                        Looking for a designer who understands your business goals?
                        Let's grab a virtual coffee and discuss your next big idea.
                    </p>
                    <div className="contact-footer">
                        <a href="mailto:kishan.tiwari1092@gmail.com" className="contact-email">kishan.tiwari1092@gmail.com</a>
                        <div className="contact-actions">
                            <a href="https://www.linkedin.com/in/kishan-tiwari-991b9b194/" target="_blank" className="btn btn-primary">LinkedIn</a>
                            <a href="/Kishan 6 years (1).pdf" target="_blank" className="btn btn-outline">Download CV</a>
                        </div>
                    </div>
                </div>
                <div className="contact-glow"></div>
            </div>
        </section>
    );
};

export default Contact;
