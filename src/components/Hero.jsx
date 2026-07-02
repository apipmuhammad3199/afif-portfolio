import { IoLogoLinkedin } from 'react-icons/io5';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <figure className="hero-banner reveal-left">
        <picture>
          <source srcSet="/assets/images/Afif.jpeg" media="(min-width: 768px)" />
          <source srcSet="/assets/images/Afif.jpeg" media="(min-width: 500px)" />
          <img src="/assets/images/Afif.jpeg" alt="Muhammad Afif Abiyyu" className="w-100" />
        </picture>
      </figure>

      <div className="hero-content reveal-right">
        <h2 className="h2 hero-title">{t('hero_title')}</h2>
        <a href="#contact" className="btn btn-primary">{t('hero_btn')}</a>
      </div>

      <ul className="hero-social-list reveal delay-200">
        <li>
          <a href="https://www.linkedin.com/in/m-afif-abiyyu-a57a4a30b" className="hero-social-link" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin />
            <div className="tooltip">Linkedin</div>
          </a>
        </li>
      </ul>

      <a href="#stats" className="scroll-down reveal delay-300">{t('hero_scroll')}</a>
    </section>
  );
};

export default Hero;
