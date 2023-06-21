import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../providers/ThemeContext';

interface Props {
  message: string;
  redirection?: 'favorites' | 'cart' | '';
  isError?: boolean;
}

const NotificationMessage = ({ message, redirection, isError }: Props) => {
  const nav = useNavigate();
  const { theme } = useTheme();
  const themeForNotification = theme === 'dark' || theme === 'light'
    ? theme
    : 'dark';

  const handleClick = () => {
    if (redirection) {
      nav(`/${redirection}`);
      window.scrollTo(0, 0);
    }
  };

  const options: ToastOptions = {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: themeForNotification,
    onClick: handleClick,
  };

  return () => {
    return isError
      ? toast.error(message, options)
      : toast.success(message, options);
  };
};

export default NotificationMessage;
