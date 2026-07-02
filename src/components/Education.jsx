import { useLanguage } from '../context/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  const certifications = [
    { title: 'Axioo Class Program', issuer: t('cert_1'), img: 'axioo1.png' },
    { title: 'Seagate IT Certification', issuer: t('cert_1'), img: 'seagate.png' },
    { title: 'Flutter Mobile App', issuer: t('cert_2'), img: 'flutter.png' },
    { title: 'Flutter Mobile App Basic', issuer: t('cert_2'), img: 'fluttermobile.png' },
    { title: 'Linux Sys Admin', issuer: t('cert_3'), img: 'linux.png' },
  ];

  return (
    <section className="education" id="education">
      <div className="section-content reveal">
        <p className="section-subtitle">{t('edu_subtitle')}</p>
        <h2 className="h3 section-title">{t('edu_title')}</h2>
        
        <div className="education-wrapper">
          <div className="education-timeline">
            <h3 className="h4 section-title" style={{ marginBottom: '20px' }}>{t('edu_timeline_title')}</h3>
            
            <div className="timeline">
              <div className="timeline-item reveal-right">
                <h4 className="timeline-title">{t('edu_1_school')}</h4>
                <p className="timeline-subtitle">{t('edu_1_degree')} (2020 - Present)</p>
              </div>
              
              <div className="timeline-item reveal-right">
                <h4 className="timeline-title">{t('edu_2_school')}</h4>
                <p className="timeline-subtitle">{t('edu_2_degree')} (2015 - 2018)</p>
              </div>
            </div>
          </div>

          <div className="education-cert">
            <h3 className="h4 section-title" style={{ marginBottom: '20px' }}>{t('edu_cert_title')}</h3>
            
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <div className="cert-card reveal-scale" key={index}>
                  <div className="cert-banner">
                    <div className="placeholder">
                      <span><img src={`/assets/images/${cert.img}`} alt={cert.title} /></span>
                    </div>
                  </div>
                  <div className="cert-content">
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
