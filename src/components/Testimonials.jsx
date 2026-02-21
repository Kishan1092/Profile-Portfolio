import './Testimonials.css';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "VP of Product",
        company: "AU Small Finance Bank",
        text: "Kishan is a rare designer who deeply understands complex backend constraints while delivering pixel-perfect, highly-converting user experiences. His work on our onboarding journeys directly impacted our bottom line.",
        gradient: "linear-gradient(135deg, rgba(234, 88, 12, 0.2), rgba(194, 65, 12, 0))"
    },
    {
        name: "Project Director",
        company: "Gyan Bharatam",
        text: "Kishan's exceptional design strategy was pivotal in digitizing our heritage manuscripts. He successfully balanced complex GenAI translation features with an intuitive, accessible interface.",
        gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(109, 40, 217, 0))"
    },
    {
        name: "VP of Digital Engineering",
        company: "HDFC Bank",
        text: "Kishan's work on the Corporate Salaried Account journey was revolutionary. By leveraging Antigravity AI tools, he didn't just design the UX—he rapidly accelerated the entire design-to-development pipeline, cutting our time-to-market in half.",
        gradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(2, 132, 199, 0))"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-header animate-in">
                    <h2 className="section-title">Industry <span className="text-gradient">Endorsements</span></h2>
                    <p className="section-subtitle">Working directly with senior leadership, engineering teams, and stakeholders to deliver enterprise-grade products.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((test, index) => (
                        <div key={index} className="testimonial-card glass" style={{ background: `var(--surface-color-glass), ${test.gradient}` }}>
                            <div className="quote-icon">
                                <Quote size={32} />
                            </div>
                            <p className="testimonial-text">"{test.text}"</p>
                            <div className="testimonial-footer">
                                <div className="testimonial-avatar">
                                    {test.name.charAt(0)}
                                </div>
                                <div className="testimonial-author">
                                    <h4 className="author-name">{test.name}</h4>
                                    <span className="author-company">{test.company}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
