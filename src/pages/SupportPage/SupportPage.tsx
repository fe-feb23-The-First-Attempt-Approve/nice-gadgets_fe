import { FormEvent } from 'react';

export const SupportPage = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
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
            // value={name}
            // onChange={}
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
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label htmlFor="password">
          Password

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="support-form__input"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
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
