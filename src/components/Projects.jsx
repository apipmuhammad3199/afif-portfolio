import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('proj_1_title'),
      tag: t('proj_1_tag'),
      image: 'RSML.png'
    },
    {
      title: t('proj_2_title'),
      tag: t('proj_2_tag'),
      image: 'Marketplace UMKM.png' // Using the first marketplace image
    },
    {
      title: t('proj_3_title'),
      tag: t('proj_3_tag'),
      image: 'ReDesaign BANK1.png' // Using the first bank redesign image
    },
    {
      title: t('proj_4_title'),
      tag: t('proj_4_tag'),
      image: 'RS Kartini.png'
    },
    {
      title: t('proj_5_title'),
      tag: t('proj_5_tag'),
      image: 'LandingPage.png'
    },
    {
      title: t('proj_6_title'),
      tag: t('proj_6_tag'),
      image: 'carsystem.png'
    },
    {
      title: t('proj_7_title'),
      tag: t('proj_7_tag'),
      image: 'pusatpenjaminmutupoltek.png'
    },
    {
      title: t('proj_8_title'),
      tag: t('proj_8_tag'),
      image: 'eliteagrotrade.png'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-content reveal">
        <p className="section-subtitle">{t('proj_subtitle')}</p>
        <h2 className="h3 section-title">{t('proj_title')}</h2>

        <ul className="project-grid">
          {projects.map((proj, index) => (
            <li className="project-item reveal-scale" key={index}>
              <div className="project-card">
                <figure className="card-banner">
                  <div className="card-banner-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <img src={`./assets/images/${proj.image}`} alt={proj.title} className="w-100" />
                </figure>
                <div className="card-content">
                  <span className="card-tag">{proj.tag}</span>
                  <h3 className="h4 card-title">{proj.title}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
