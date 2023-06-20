import { client } from '../utils/fetchClient';
import { RegistrationResponse } from '../types/Response';

export const register = (userName: string, email: string, password: string) => {
  return client.post<RegistrationResponse>(
    '/registration',
    { userName, email, password },
  );
};
