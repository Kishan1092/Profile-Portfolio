import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Background from './components/Background';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <Background />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <div className="reveal"><Hero /></div>
        <div className="reveal"><Work /></div>
        <div className="reveal"><Experience /></div>
        <div className="reveal"><Education /></div>
        <div className="reveal"><Skills /></div>
        <div className="reveal"><Contact /></div>
      </main>
      <footer className="footer-section glass reveal">
        <div className="container footer-content">
          <p>&copy; 2026 Kishan Tiwari. Built with passion.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/kishan-tiwari-991b9b194/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.behance.net/kishantiwari1" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="#">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
