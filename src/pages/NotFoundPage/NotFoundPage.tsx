import { NotFoundBlack } from '../../components/NotFoundBlack';
import { NotFoundWhite } from '../../components/NotFoundWhite';
import { useTheme } from '../../providers/ThemeContext';

export const NotFoundPage = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === 'light'
        ? <NotFoundWhite />
        : <NotFoundBlack />}
    </>
  );
};
