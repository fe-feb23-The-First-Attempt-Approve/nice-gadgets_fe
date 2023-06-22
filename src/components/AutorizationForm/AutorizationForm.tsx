import {
  FormEvent, useEffect, useState,
} from 'react';
import { login, register } from '../../api/auth';
import { useAuth } from '../../providers/AuthContext';
import NotificationMessage from '../Notification/Notification';
import { IconClose } from '../Icons/_IconKit';

export const AutorizationForm = () => {
  const [isRegistrationMode, setIsRegistrationMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const {
    isModalActive,
    setIsModalActive,
  } = useAuth();

  useEffect(() => {
    if (isModalActive) {
      document.body.classList.add('scrolling-blocked');
    }
  }, [isModalActive]);

  const notificationEmailError = NotificationMessage({
    message: 'Email is not valid',
    isError: true,
  });

  const notificationPasswordError = NotificationMessage({
    // eslint-disable-next-line max-len
    message: 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
    isError: true,
  });

  const notificationEmailIsTakenError = NotificationMessage({
    message: 'Email is already taken',
    isError: true,
  });

  const notificationSuccessRegistration = NotificationMessage({
    message: 'You will receive activation link for your registration',
  });

  const registerUser = async () => {
    const registrationResponse = await register(name, email, password);

    if (registrationResponse.message) {
      setIsModalActive(false);
      notificationSuccessRegistration();

      return;
    }

    if (registrationResponse.email === 'Email is already taken') {
      notificationEmailIsTakenError();

      return;
    }

    if (registrationResponse.email) {
      notificationEmailError();
    }

    if (registrationResponse.password) {
      notificationPasswordError();
    }
  };

  const successLoggingNotification = NotificationMessage({
    message: 'Successful Login',
  });

  const errorEmailLoggingNotification = NotificationMessage({
    message: 'User with this Email does not exist',
    isError: true,
  });

  const errorPasswordLoggingNotification = NotificationMessage({
    message: 'Password does not match',
    isError: true,
  });

  const errorAuthLoggingNotification = NotificationMessage({
    message: 'You should activate your account',
    isError: true,
  });

  const loginUser = async () => {
    const loginResponse = await login(email, password);

    if (loginResponse.accessToken && loginResponse.user) {
      window.localStorage.setItem('token', loginResponse.accessToken);
      window.localStorage.setItem('user', JSON.stringify(loginResponse.user));
      successLoggingNotification();
      setIsModalActive(false);

      return;
    }

    if (loginResponse.activationToken) {
      errorAuthLoggingNotification();

      return;
    }

    if (loginResponse.email) {
      errorEmailLoggingNotification();
    }

    if (loginResponse.password) {
      errorPasswordLoggingNotification();
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isRegistrationMode) {
      registerUser();

      return;
    }

    loginUser();
  };

  const toggleRegistrationMode = () => {
    setIsRegistrationMode(!isRegistrationMode);
    setEmail('');
    setPassword('');
    setName('');
  };

  if (!isModalActive) {
    document.body.classList.remove('scrolling-blocked');

    return null;
  }

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal__form">
        <button
          className="modal__close"
          type="button"
          onClick={() => setIsModalActive(false)}
        >
          <IconClose />
        </button>

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
                placeholder="Name"
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
            placeholder="Email"
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {isRegistrationMode && (
          <>
            <div className="modal__input modal__input-checkbox">
              <label htmlFor="checkbox">I accept all terms</label>
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                placeholder="Checkbox"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="modal__action"
        >
          {isRegistrationMode ? 'Sign up' : 'Log in'}
        </button>
      </form>
    </div>
  );
};
