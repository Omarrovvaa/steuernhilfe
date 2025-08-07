import React from 'react';
import './EligibilityInfo.css';

const EligibilityInfo = () => {
  return (
    <section className="eligibility" id="who">
      <div className="eligibility-content">
        <h2>Кому подходит возврат налогов</h2>
        <p className="eligibility-subtitle">Если вы работали в Германии официально — скорее всего, вы можете вернуть налоги.</p>

        <div className="eligibility-grid">
          <div className="eligibility-card">
            <img src="https://img.icons8.com/?size=100&id=80867&format=png&color=000000" alt="Фериенжоб" className="eligibility-icon" />
            <h3>Фериенжоб</h3>
            <p>Если вы были студентом и работали во время каникул — вы имеете право на возврат.</p>
          </div>
          <div className="eligibility-card">
            <img src="https://img.icons8.com/?size=100&id=uyESW79V2opO&format=png&color=000000" alt="Официальная подработка" className="eligibility-icon" />
            <h3>Официальная подработка</h3>
            <p>Любая временная официальная работа — тоже подходит для возврата налогов.</p>
          </div>
          <div className="eligibility-card">
            <img src="https://img.icons8.com/?size=100&id=8Cm91HvffxFH&format=png&color=000000" alt="До 4 лет" className="eligibility-icon" />
            <h3>До 4 лет</h3>
            <p>Можно подать на возврат максимум за 4 предыдущих года — например, в 2025 подаём за 2021–2024.</p>
          </div>
          <div className="eligibility-card">
            <img src="https://img.icons8.com/?size=100&id=81041&format=png&color=000000" alt="Не за текущий год" className="eligibility-icon" />
            <h3>Не за текущий год</h3>
            <p>Если вы работали в 2025 году — подать за него можно только в 2026 году.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityInfo;
