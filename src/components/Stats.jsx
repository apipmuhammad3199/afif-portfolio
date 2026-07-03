import { IoChevronForwardOutline } from 'react-icons/io5';
import { useLanguage } from '../context/LanguageContext';

const Stats = () => {
  const { t } = useLanguage();

  return (
    <section className="stats" id="stats">
      <ul className="stats-list">
        <li className="reveal-scale delay-100">
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img src="./assets/images/stats-card_icon-1.png" alt="Badge icon" />
            </div>
            <h2 className="h2 card-title">
              8+ <strong>{t('stat_years')}</strong>
            </h2>
            <IoChevronForwardOutline />
          </a>
        </li>

        <li className="reveal-scale delay-200">
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img src="./assets/images/stats-card_icon-2.png" alt="Checkmark icon" />
            </div>
            <h2 className="h2 card-title">
              100+ <strong>{t('stat_projects')}</strong>
            </h2>
            <IoChevronForwardOutline />
          </a>
        </li>

        <li className="reveal-scale delay-300">
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img src="./assets/images/stats-card_icon-3.png" alt="Peoples rating icon" />
            </div>
            <h2 className="h2 card-title">
              250+ <strong>{t('stat_clients')}</strong>
            </h2>
            <IoChevronForwardOutline />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Stats;
