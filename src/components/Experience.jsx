import { IoBriefcaseOutline } from 'react-icons/io5';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('exp_0_title'),
      company: t('exp_0_company'),
      date: 'Jan 2026 - Jul 2026',
      datetime: '2026-01',
      description: t('exp_0_desc')
    },
    {
      title: t('exp_1_title'),
      company: t('exp_1_company'),
      date: 'Oct 2025 - Jan 2026',
      datetime: '2025-10',
      description: t('exp_1_desc')
    },
    {
      title: t('exp_2_title'),
      company: t('exp_2_company'),
      date: 'Jun 2023 - Jul 2024',
      datetime: '2023-06',
      description: t('exp_2_desc')
    },
    {
      title: t('exp_3_title'),
      company: t('exp_3_company'),
      date: 'Aug 2021 - Mar 2023',
      datetime: '2021-08',
      description: t('exp_3_desc')
    },
    {
      title: t('exp_4_title'),
      company: t('exp_4_company'),
      date: 'Jan 2021 - Mar 2023',
      datetime: '2021-01',
      description: t('exp_4_desc')
    },
    {
      title: t('exp_5_title'),
      company: t('exp_5_company'),
      date: 'Jan 2021 - Mar 2023',
      datetime: '2021-01',
      description: t('exp_5_desc')
    },
    {
      title: t('exp_6_title'),
      company: t('exp_6_company'),
      date: 'Dec 2019 - Mar 2023',
      datetime: '2019-12',
      description: t('exp_6_desc')
    },
    {
      title: t('exp_7_title'),
      company: t('exp_7_company'),
      date: 'Jul 2019 - Mar 2023',
      datetime: '2019-07',
      description: t('exp_7_desc')
    },
  ];

  return (
    <section className="project" id="experience">
      <div className="project-content section-content reveal">

        <p className="section-subtitle">{t('exp_subtitle')}</p>

        <h2 className="h3 section-title">
          {t('exp_title')}
        </h2>

        <p className="section-text">
          {t('exp_text')}
        </p>
      </div>

      <ul className="project-list-text">
        {experiences.map((exp, index) => (
          <li key={index} className="experience-card reveal-left">

            <div className="exp-icon">
              <IoBriefcaseOutline />
            </div>
            
            <div className="exp-content">
              <h3 className="h4 exp-title">{exp.title}</h3>
              <div className="exp-meta">
                <span className="exp-company">{exp.company}</span>
                <span className="exp-separator">•</span>
                <time className="exp-date" dateTime={exp.datetime}>
                  {exp.date}
                </time>
              </div>
              <p className="exp-description">{exp.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
