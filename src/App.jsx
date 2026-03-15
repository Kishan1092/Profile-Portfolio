import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import About from './components/About';
import Work from './components/Work';
import CaseStudy from './components/CaseStudy';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Background from './components/Background';
import Loader from './components/Loader';
import './App.css';

import { Linkedin, Github, Dribbble, Instagram, Mail } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);



  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <Background />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Logos />
        <About />
        <Work />
        <CaseStudy />
        <Experience />
        <Skills />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <footer className="footer-bar glass">
        <div className="footer-container">
          <div className="footer-copyright">
            <p>&copy; 2026 Kishan Tiwari</p>
          </div>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/kishan-tiwari-991b9b194/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.behance.net/kishantiwari1" target="_blank" rel="noopener noreferrer" aria-label="Behance Portfolio" title="Behance">
              <Github size={20} /> {/* Using Github icon for Behance as placeholder or can use custom SVG if needed, but sticking to lucide */}
            </a>
            <a href="#" aria-label="Dribbble Portfolio" title="Dribbble">
              <Dribbble size={20} />
            </a>
            <a href="#" aria-label="Instagram Profile" title="Instagram">
              <Instagram size={20} />
            </a>
            <a href="mailto:kishant@example.com" aria-label="Send Email" title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
