// src/components/WhyChooseUs/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css';

const pros = [
  {
    title: 'Экономия времени',
    desc: 'Вам не нужно читать сайты на немецком и бояться ошибиться в цифрах.',
  },
  {
    title: 'Полное сопровождение',
    desc: 'Проверим документы, подадим декларацию, отследим статус и напомним, если потребуется.',
  },
  {
    title: 'Фиксированная цена',
    desc: '5 000 сом за один год возврата. Никаких процентов от суммы.',
  },
  {
    title: 'Конфиденциальность',
    desc: 'Все ваши данные останутся в безопасности и не передаются третьим лицам.',
  },
];

const cons = [
  {
    title: 'Проблемы с регистрацией',
    desc: 'Нужен активный немецкий номер для подтверждения, а он часто уже недействителен.',
  },
  {
    title: 'Ошибки в заполнении',
    desc: 'Любая неточность — и вы можете не получить деньги или получить меньше.',
  },
  {
    title: 'Медленные ответы от налоговой',
    desc: 'Ответ может прийти через 6–8 месяцев, и без знания немецкого сложно понять, что делать.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className="section-title">Почему лучше делать возврат через нас</h2>

      <div className="benefit-section">
        <h3 className="section-subtitle">Преимущества</h3>
        <div className="cards">
          {pros.map(({ title, desc }, i) => (
            <div className="card" key={i}>
              <h4 className="card-title">{title}</h4>
              <p className="card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="benefit-section">
        <h3 className="section-subtitle">Почему не стоит делать самостоятельно</h3>
        <div className="cards">
          {cons.map(({ title, desc }, i) => (
            <div className="card warning" key={i}>
              <h4 className="card-title">{title}</h4>
              <p className="card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
