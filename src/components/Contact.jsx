import { useState } from 'react';
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoYoutube, IoPersonCircle, IoMail, IoCall, IoChatbubbles } from 'react-icons/io5';
import { useLanguage } from '../context/LanguageContext';
import { db } from '../firebase';
import { ref, push, serverTimestamp } from 'firebase/database';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await push(ref(db, 'messages'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

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
              <a href="tel:+6285729874118" className="contact-info">+62-857-2987-4118</a>
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

      <form onSubmit={handleSubmit} className="contact-form reveal-right">
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.phone}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <IoChatbubbles />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : t('contact_form_send')}
        </button>
        {status === 'success' && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}>
            <div style={{
              background: 'var(--bg-secondary)',
              padding: '40px',
              borderRadius: 'var(--radius-12)',
              textAlign: 'center',
              maxWidth: '400px',
              width: '90%',
              border: '2px solid var(--emerald)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
              <div style={{ fontSize: '4rem', color: 'var(--emerald)', marginBottom: '10px' }}>✓</div>
              <h3 className="h3" style={{ marginBottom: '10px', color: 'var(--text-primary)' }}>Berhasil!</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Pesan Anda telah sukses terkirim ke Inbox. Saya akan segera membacanya.</p>
              <button type="button" onClick={() => setStatus('')} className="btn btn-primary" style={{ width: '100%' }}>Tutup</button>
            </div>
          </div>
        )}
        {status === 'error' && <p style={{ color: 'red', marginTop: '1rem' }}>Error sending message. Please try again.</p>}
      </form>
    </section>
  );
};

export default Contact;
