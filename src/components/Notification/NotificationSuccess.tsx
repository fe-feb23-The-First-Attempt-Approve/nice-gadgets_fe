import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../providers/ThemeContext';

interface Props {
  message: string;
  redirection?: 'favorites' | 'cart' | '';
}

const NotificationMessage = ({ message, redirection }: Props) => {
  const nav = useNavigate();
  const { theme } = useTheme();
  const themeForNotification = theme === 'dark' || theme === 'light'
    ? theme
    : 'dark';

  const handleClick = () => {
    nav(`/${redirection}`);
    window.scrollTo(0, 0);
  };

  return () => toast.success(
    message,
    {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: themeForNotification,
      onClick: handleClick,
    },
  );
};

export default NotificationMessage;
