import { FormEvent, useContext, useState } from 'react';
import { register } from '../../api/auth';
import { AuthContext } from '../../providers/AuthContext';

export const AutorizationForm = () => {
  const [isRegistrationMode, setIsRegistrationMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { isModalActive, setIsModalActive } = useContext(AuthContext);
  const hasAllData = email && name && password;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await register(name, email, password);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setIsModalActive(false);
    }
    // eslint-disable-next-line no-console
  };

  const toggleRegistrationMode = () => {
    setIsRegistrationMode(!isRegistrationMode);
    setEmail('');
    setPassword('');
    setName('');
  };

  if (!isModalActive) {
    return null;
  }

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal__form">
        <button
          type="button"
          onClick={toggleRegistrationMode}
          className="modal__mode"
        >
          {isRegistrationMode
            ? 'Already have an account?'
            : "I don't have an account yet"}
        </button>

        {isRegistrationMode && (
          <>
            <div className="modal__input">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <div className="modal__input">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="modal__input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="modal__action"
          disabled={!hasAllData}
        >
          {isRegistrationMode ? 'Submit' : 'Log in'}
        </button>

        <button
          className="modal__close"
          type="button"
          onClick={() => setIsModalActive(false)}
        >
          X
        </button>
      </form>
    </div>
  );
};
