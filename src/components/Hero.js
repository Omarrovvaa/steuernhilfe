// src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1>Вернем ваши налоги из Германии быстро и без проблем</h1>
          <button className="cta-btn">Начать сейчас</button>
        </div>
        <div className="hero-image">
          <img
            src="https://flomaster.top/o/uploads/posts/2023-11/1699467549_flomaster-top-p-devushka-s-noutbukom-risunok-pinterest-1.jpg"
            alt="Девушка с ноутбуком"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
