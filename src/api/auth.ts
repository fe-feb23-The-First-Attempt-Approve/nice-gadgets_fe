import { client } from '../utils/fetchClient';
import { AuthResponse } from '../types/Response';

export const register = (userName: string, email: string, password: string) => {
  return client.post<AuthResponse>(
    '/registration',
    { userName, email, password },
  );
};

export const login = (email: string, password: string) => {
  return client.post<AuthResponse>(
    '/login',
    { email, password },
  );
};
