import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const useScrollReveal = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    let observer;
    const timeoutId = setTimeout(() => {
      const reveals = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale'
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-active');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      reveals.forEach((reveal) => {
        // Manually check if already in viewport to handle re-renders instantly
        const rect = reveal.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          reveal.classList.add('reveal-active');
        }
        observer.observe(reveal);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [lang]);
};

export default useScrollReveal;
