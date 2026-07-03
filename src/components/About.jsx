import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="about" id="about">
      <figure className="about-banner reveal-left">
        <img
          src="./assets/images/Afif.jpeg"
          alt="Muhammad Afif Abiyyu"
          className="w-100"
        />
      </figure>

      <div className="about-content section-content reveal-right">
        <p className="section-subtitle">{t('about_subtitle')}</p>

        <h2 className="h3 section-title">
          {t('about_title')}
        </h2>

        <p className="section-text">
          {t('about_text')}
        </p>

        <div className="btn-group">
          <button className="btn btn-secondary">{t('about_btn_hire')}</button>

          <a href="./assets/file/CV Muhammad Afif Abiyyu 2026.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t('about_btn_cv')}</a>
        </div>
      </div>
    </section>
  );
};

export default About;
