import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <div className="logo">
          <span className="logo-text">KISHAN</span>
          <span className="logo-dot">.</span>
        </div>

        <div className={`nav-links-wrapper ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a></li>
            <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
            <li><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          </ul>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary btn-small hire-me-btn">Hire Me</a>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
