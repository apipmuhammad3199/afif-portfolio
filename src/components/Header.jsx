import { useState, useEffect } from 'react';
import { IoVolumeMuteOutline, IoVolumeHighOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { lang, changeLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark_theme');
      document.body.classList.remove('light_theme');
    } else {
      document.body.classList.add('light_theme');
      document.body.classList.remove('dark_theme');
    }
  }, [isDarkTheme]);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  const toggleMusic = () => setIsMusicPlaying(!isMusicPlaying);

  return (
    <header className={`header ${isScrolled ? 'active' : ''}`}>
      <div className="container">
        <h1 className="logo">
          <a href="#">Muhammad Afif<span>.</span></a>
        </h1>

        <div className="navbar-actions">
          <select 
            name="language" 
            id="lang" 
            className="lang-select" 
            value={lang} 
            onChange={(e) => changeLang(e.target.value)}
          >
            <option value="en">En</option>
            <option value="id">Id</option>
          </select>

          <button
            className="music-btn"
            aria-label="Toggle Music"
            title="Toggle Music"
            onClick={toggleMusic}
          >
            {isMusicPlaying ? <IoVolumeHighOutline className="icon" /> : <IoVolumeMuteOutline className="icon" />}
          </button>

          <button
            className="theme-btn"
            aria-label="Change Theme"
            title="Change Theme"
            onClick={toggleTheme}
          >
            {isDarkTheme ? <IoSunnyOutline className="icon" /> : <IoMoonOutline className="icon" />}
          </button>
        </div>

        <button
          className={`nav-toggle-btn ${isNavOpen ? 'active' : ''}`}
          aria-label="Toggle Menu"
          onClick={toggleNav}
        >
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li><a href="#home" className="navbar-link" onClick={() => setIsNavOpen(false)}>{t('nav_home')}</a></li>
            <li><a href="#about" className="navbar-link" onClick={() => setIsNavOpen(false)}>{t('nav_about')}</a></li>
            <li><a href="#skills" className="navbar-link" onClick={() => setIsNavOpen(false)}>{t('nav_skills')}</a></li>
            <li><a href="#experience" className="navbar-link" onClick={() => setIsNavOpen(false)}>{t('nav_experience')}</a></li>
            <li><a href="#projects" className="navbar-link" onClick={() => setIsNavOpen(false)}>{t('nav_projects')}</a></li>
            <li><a href="#contact" className="navbar-link" onClick={() => setIsNavOpen(false)}>{t('nav_contact')}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
