import { useEffect } from 'react';
import { NotFoundBlack } from '../../components/NotFoundBlack';
import { NotFoundWhite } from '../../components/NotFoundWhite';
import { useTheme } from '../../providers/ThemeContext';

export const NotFoundPage = () => {
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="not-found">
      {theme === 'light'
        ? <NotFoundWhite />
        : <NotFoundBlack />}
    </div>
  );
};
