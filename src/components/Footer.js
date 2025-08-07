// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
                    <p className="footer-contact">
                Контакты: <a href="mailto:steuernhilfe.kg@mail.ru">steuernhilfe.kg@mail.ru</a> | <span className="phone-number"> Тел: +996 755 147 258</span>
                </p>

        <div className="footer-socials">

          <a href="https://t.me/+OND53i211y8wZjEy" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram"></i> Telegram
          </a>
        </div>
        <p className="footer-copy">© 2025 Steuernhilfe. Все права защищены.</p>
      </div>
    </footer>
  );

};

export default Footer;
