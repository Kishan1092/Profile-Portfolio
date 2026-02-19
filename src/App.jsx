import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Background from './components/Background';
import './App.css';

import { Linkedin, Github, Dribbble, Instagram, Mail } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quint',
      delay: 100,
    });
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <Background />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <div data-aos="fade-up"><Hero /></div>
        <About />
        <div data-aos="fade-up" data-aos-delay="200"><Work /></div>
        <div data-aos="fade-up"><Experience /></div>
        <div data-aos="fade-up"><Education /></div>
        <div data-aos="fade-up"><Skills /></div>
        <div data-aos="fade-up"><Contact /></div>
      </main>
      <footer className="footer-bar glass">
        <div className="footer-container">
          <div className="footer-copyright">
            <p>&copy; 2026 Kishan Tiwari</p>
          </div>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/kishan-tiwari-991b9b194/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.behance.net/kishantiwari1" target="_blank" rel="noopener noreferrer" title="Behance">
              <Github size={20} /> {/* Using Github icon for Behance as placeholder or can use custom SVG if needed, but sticking to lucide */}
            </a>
            <a href="#" title="Dribbble">
              <Dribbble size={20} />
            </a>
            <a href="#" title="Instagram">
              <Instagram size={20} />
            </a>
            <a href="mailto:kishant@example.com" title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
