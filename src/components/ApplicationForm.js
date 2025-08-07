import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const sendTelegramMessage = async () => {
    const token = '8369319591:AAGeckLrAsR7DGjlhAolURKNa71AaXsE5UY'; // <-- замени на свой токен!
    const chatId = '429960232'; // <-- это твой chat_id
    const message = `💌 *Новая заявка на возврат налогов*\n\n👤 *Имя:* ${name}\n📞 *Телефон:* ${phone}\n📧 *Почта:* ${email}`;

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (res.ok) {
      setStatus('✅ Заявка успешно отправлена!');
      setName('');
      setPhone('');
      setEmail('');
    } else {
      setStatus('❌ Ошибка отправки. Попробуй ещё раз.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      setStatus('⚠️ Пожалуйста, заполните все поля.');
      return;
    }
    sendTelegramMessage();
  };

  return (
    <form className="application-form" id="form" onSubmit={handleSubmit}>
      <h2>Оставьте заявку</h2>
      <input
        type="text"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Электронная почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Отправить</button>
      {status && <p className="status-message">{status}</p>}
    </form>
  );
};

export default ApplicationForm;
