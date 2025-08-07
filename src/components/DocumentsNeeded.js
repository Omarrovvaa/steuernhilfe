import React from 'react';
import './DocumentsNeeded.css';

const documents = [
  {
    title: 'Доверенность',
    description:
      'Обязательный документ для подачи декларации. Без неё налоговая не примет заявление. Мы подготовили для вас шаблон — просто скачайте и подпишите.',
    downloadLink: '/vollmacht.pdf',
    downloadText: 'Скачать доверенность PDF',
    icon: '📝',
  },
  {
    title: 'Справка о заработной плате (Lohnsteuerbescheinigung)',
    description:
      'Справка от работодателя с информацией о заработке и уплаченных налогах. Можно получить через портал Түндүк или у работодателя.',
    icon: '📄',
  },
  {
    title: 'Справка о доходах в Кыргызстане',
    description:
      'Подтверждение доходов, полученных в Кыргызстане. Можно получить через портал Түндүк.',
    icon: '📃',
  },
  {
    title: 'Ваш банковский счет (IBAN)',
    description: 'На этот счет будут перечислены возвращённые налоги.',
    icon: '🏦',
  },
  {
    title: 'Адрес в Германии и даты пребывания',
    description:
      'Укажите адрес, по которому вы были прописаны, и период проживания.',
    icon: '🏠',
  },
   {
    title: 'Копия паспорта',
    description: 'Понадобится копия вашего ID или загранпаспорта.',
    icon: '🛂',
  },
];

const DocumentsNeeded = () => {
  return (
    <section className="documents-needed" id="documents">
      <h2 className="section-title">Что нужно от вас</h2>
      <p className="intro-text">
        Для подачи налоговой декларации от вашего имени нам понадобятся следующие документы:
      </p>

      <div className="cards-container">
        {documents.map(
          ({ icon, title, description, downloadLink, downloadText }, idx) => (
            <div className="doc-card" key={idx}>
              <div className="icon-circle">{icon}</div>
              <h3 className="doc-title">{title}</h3>
              <p className="doc-desc">{description}</p>
              {downloadLink && (
                <a href={downloadLink} download className="download-btn">
                  {downloadText}
                </a>
              )}
            </div>
          )
        )}
      </div>

      <p className="final-note">
        Соберите эти документы и отправьте нам — мы сделаем всё остальное. Спокойствие и возврат налогов гарантированы!
      </p>
    </section>
  );
};

export default DocumentsNeeded;
