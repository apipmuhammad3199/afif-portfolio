import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('proj_1_title'),
      image: 'RSML.png'
    },
    {
      title: t('proj_2_title'),
      image: 'Marketplace UMKM.png' // Using the first marketplace image
    },
    {
      title: t('proj_3_title'),
      image: 'ReDesaign BANK1.png' // Using the first bank redesign image
    },
    {
      title: t('proj_4_title'),
      image: 'RS Kartini.png'
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
                  <img src={`/assets/images/${proj.image}`} alt={proj.title} className="w-100" />
                </figure>
                <div className="card-content">
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
