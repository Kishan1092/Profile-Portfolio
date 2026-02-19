import { useState, useEffect } from 'react';
import { Sun, Moon, Rocket } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-content">
        <a href="#hero" className="logo">
          <div className="logo-icon">KT</div>
          <div className="logo-details">
            <span className="logo-text">Kishan Tiwari</span>
            <span className="logo-tag">Senior Product Designer</span>
          </div>
        </a>

        <div className={`nav-links-wrapper ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#hero" data-text="Home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about-me" data-text="About" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#work" data-text="Work" onClick={() => setIsMenuOpen(false)}>Work</a></li>
            <li><a href="#experience" data-text="Experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
            <li><a href="#skills" data-text="Skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          </ul>
        </div>

        <div className="nav-actions">
          <button
            className={`theme-switch ${theme}`}
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <div className="switch-handle">
              {theme === 'dark' ? <Moon size={14} fill="currentColor" /> : <Sun size={14} fill="currentColor" />}
            </div>
            <Sun className="nav-icon sun" size={16} />
            <Moon className="nav-icon moon" size={16} />
          </button>

          <a href="#contact" className="btn-hire">
            <span>Let's Talk</span>
            <Rocket size={16} />
          </a>

          <button
            className={`menu-toggle-modern ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
