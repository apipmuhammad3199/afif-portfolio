import { IoLocationOutline, IoCallOutline, IoMailOutline, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoYoutube, IoPersonCircle, IoMail, IoCall, IoChatbubbles } from 'react-icons/io5';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="contact" id="contact">
      <div className="contact-content section-content reveal-left">

        <p className="section-subtitle">{t('contact_subtitle')}</p>

        <h2 className="h3 section-title">
          {t('contact_title')}
        </h2>

        <p className="section-text">
          {t('contact_text')}
        </p>

        <ul className="contact-list">
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <IoLocationOutline />
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">{t('contact_address')}</h3>
              <address className="contact-info">Jakarta Selatan</address>
            </div>
          </li>

          <li className="contact-list-item">
            <div className="contact-item-icon">
              <IoCallOutline />
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">{t('contact_phone')}</h3>
              <a href="tel:087714001013" className="contact-info">0877-1400-1013</a>
            </div>
          </li>

          <li className="contact-list-item">
            <div className="contact-item-icon">
              <IoMailOutline />
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">{t('contact_email')}</h3>
              <a href="mailto:maffabiyyu@gmail.com" className="contact-info">maffabiyyu@gmail.com</a>
            </div>
          </li>

          <li>
            <ul className="contact-social-list">
              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Facebook</div>
                  <IoLogoFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Twitter</div>
                  <IoLogoTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/m-afif-abiyyu-a57a4a30b" className="contact-social-link" target="_blank" rel="noopener noreferrer">
                  <div className="tooltip">Linkedin</div>
                  <IoLogoLinkedin />
                </a>
              </li>
              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Youtube</div>
                  <IoLogoYoutube />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <form action="" className="contact-form reveal-right">
        <div className="form-wrapper">

          <label htmlFor="name" className="form-label">{t('contact_form_name')}</label>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="e.g John Doe"
              className="input-field"
            />
            <IoPersonCircle />
          </div>
        </div>

        <div className="form-wrapper">
          <label htmlFor="email" className="form-label">{t('contact_form_email')}</label>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="e.g johndoe@mail.com"
              className="input-field"
            />
            <IoMail />
          </div>
        </div>

        <div className="form-wrapper">
          <label htmlFor="phone" className="form-label">{t('contact_form_phone')}</label>
          <div className="input-wrapper">
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              placeholder="Phone Number"
              className="input-field"
            />
            <IoCall />
          </div>
        </div>

        <div className="form-wrapper">
          <label htmlFor="message" className="form-label">{t('contact_form_msg')}</label>
          <div className="input-wrapper">
            <textarea
              name="message"
              id="message"
              required
              placeholder={t('contact_form_msg_ph')}
              className="input-field"
            ></textarea>
            <IoChatbubbles />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">{t('contact_form_send')}</button>
      </form>
    </section>
  );
};

export default Contact;
