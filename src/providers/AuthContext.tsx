import {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { User } from '../types/User';

interface AuthContextValue {
  isModalActive: boolean;
  setIsModalActive: (value: boolean) => void;
  user: User | null,
  setUser: (value: User | null) => void;
}

export const AuthContext = createContext<AuthContextValue>({
  isModalActive: false,
  setIsModalActive: () => {},
  user: null,
  setUser: () => {},
});

export const AuthContextProvider: FC = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const contextValue: AuthContextValue = {
    isModalActive,
    setIsModalActive,
    user,
    setUser,
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user') || ''));
    }
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used within a AuthContextValue',
    );
  }

  return context;
};
