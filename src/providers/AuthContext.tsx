import {
  createContext,
  FC,
  useContext,
  useState,
} from 'react';

interface AuthContextValue {
  isModalActive: boolean;
  setIsModalActive: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextValue>({
  isModalActive: false,
  setIsModalActive: () => {},
});

export const AuthContextProvider: FC = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const contextValue: AuthContextValue = {
    isModalActive,
    setIsModalActive,
  };

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
