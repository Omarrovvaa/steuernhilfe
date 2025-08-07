import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <a href="#home" className="logo">Возврат налогов</a>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#how" className="nav-link" onClick={toggleMenu}>Как это работает</a>
          <a href="#who" className="nav-link" onClick={toggleMenu}>Кому подходит</a>
          <a href="#documents" className="nav-link" onClick={toggleMenu}>Документы</a>
          <a href="#form" className="btn-accent" onClick={toggleMenu}>Оставить заявку</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
