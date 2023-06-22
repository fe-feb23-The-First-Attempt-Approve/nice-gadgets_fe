import { FormEvent, useState } from 'react';
import NotificationMessage from '../../components/Notification/Notification';
import { login } from '../../api/auth';

export const SupportPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const successNotification = NotificationMessage({
    message: 'Successful send message',
  });

  const errorEmailNotification = NotificationMessage({
    message: 'User with this Email does not exist',
    isError: true,
  });

  const errorPasswordNotification = NotificationMessage({
    message: 'Password does not match',
    isError: true,
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const loginResponse = await login(email, password);

    if (loginResponse.email) {
      errorEmailNotification();

      return;
    }

    if (loginResponse.password) {
      errorPasswordNotification();

      return;
    }

    if (loginResponse.accessToken) {
      window.localStorage.setItem('token', loginResponse.accessToken);
      successNotification();

      setName('');
      setEmail('');
      setPassword('');
      setMessage('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="support-form">
        <label htmlFor="name">
          Name

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="support-form__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label htmlFor="email">
          E-mail

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="support-form__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label htmlFor="text">
          Subject

          <input
            type="subject"
            id="subject"
            name="subject"
            placeholder="Subject"
            className="support-form__input"
            required
          />
        </label>

        <label htmlFor="message">
          Message

          <textarea
            id="massage"
            name="message"
            placeholder="Your message..."
            className="support-form__textarea support-form__input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          className="support-form__action"
        >
          Send message
        </button>
      </form>
    </div>
  );
};
