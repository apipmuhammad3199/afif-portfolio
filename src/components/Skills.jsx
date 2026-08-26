import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const { t } = useLanguage();

  const skillsData = [
    { name: 'HTML5', icon: 'html5.png' },
    { name: 'CSS3', icon: 'css3.png' },
    { name: 'JavaScript', icon: 'javascript.png' },
    { name: 'TypeScript', icon: 'typescript.png' },
    { name: 'React', icon: 'react.png' },
    { name: 'Vue', icon: 'vue.png' },
    { name: 'Node.js', icon: 'nodejs.png' },
    { name: 'Python', icon: 'python.png' },
    { name: 'PHP', icon: 'php.png' },
    { name: 'MySQL', icon: 'mysql.png' },
    { name: 'Firebase', icon: 'firebase.png' },
    { name: 'Laravel', icon: 'laravel.png' },
    { name: 'Flutter', icon: 'flutter-icon.svg' },
  ];

  const toolsData = [
    { name: 'Git', icon: 'git.png' },
    { name: 'GitHub', icon: 'github.png' },
    { name: 'Docker', icon: 'docker.png' },
    { name: 'VS Code', icon: 'vs-code.png' },
    { name: 'Postman', icon: 'postman.png' },
    { name: 'Figma', icon: 'figma.png' },
    { name: 'Command Line', icon: 'command.png' },
    { name: 'NPM', icon: 'npm.png' },
  ];

  const securityData = [
    { name: 'Kali Linux', icon: 'kali-color.svg' },
    { name: 'Ubuntu', icon: 'ubuntu-icon.svg' },
    { name: 'Debian', icon: 'debian-color.svg' },
    { name: 'Arch Linux', icon: 'arch-color.svg' },
    { name: 'Linux OS', icon: 'linux-os.svg' },
    { name: 'Wireshark', icon: 'wireshark-color.svg' },
    { name: 'Metasploit', icon: 'metasploit-color.svg' },
    { name: 'Burp Suite', icon: 'burpsuite-color.svg' },
    { name: 'pfSense', icon: 'pfsense-color.svg' },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-content section-content reveal">
        <p className="section-subtitle">{t('skills_subtitle')}</p>

        <h2 className="h3 section-title">
          {t('skills_title')}
        </h2>

        <p className="section-text">
          {t('skills_text')}
        </p>

        <div className="skills-toggle">
          <button 
            className={`toggle-btn ${activeTab === 'skills' ? 'active' : ''}`} 
            onClick={() => setActiveTab('skills')}
          >
            {t('skills_tab_skills')}
          </button>

          <button 
            className={`toggle-btn ${activeTab === 'tools' ? 'active' : ''}`} 
            onClick={() => setActiveTab('tools')}
          >
            {t('skills_tab_tools')}
          </button>

          <button 
            className={`toggle-btn ${activeTab === 'security' ? 'active' : ''}`} 
            onClick={() => setActiveTab('security')}
          >
            {t('skills_tab_security')}
          </button>
        </div>
      </div>

      <div className="skills-box">
        {activeTab === 'skills' && (
          <ul className="skills-list reveal-scale">
            {skillsData.map((skill, index) => (
              <li key={index}>
                <div className="skill-card">
                  <div className="tooltip">{skill.name}</div>
                  <div className="card-icon">
                    <img src={`./assets/images/${skill.icon}`} alt={`${skill.name} logo`} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {activeTab === 'tools' && (
          <ul className="tools-list reveal-scale">
            {toolsData.map((tool, index) => (
              <li key={index}>
                <div className="skill-card">
                  <div className="tooltip">{tool.name}</div>
                  <div className="card-icon">
                    <img src={`./assets/images/${tool.icon}`} alt={`${tool.name} logo`} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {activeTab === 'security' && (
          <ul className="tools-list reveal-scale">
            {securityData.map((sec, index) => (
              <li key={index}>
                <div className="skill-card">
                  <div className="tooltip">{sec.name}</div>
                  <div className="card-icon">
                    <img src={`./assets/images/${sec.icon}`} alt={`${sec.name} logo`} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Skills;

