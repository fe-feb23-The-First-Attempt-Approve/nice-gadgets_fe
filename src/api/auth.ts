import { client } from "../utils/fetchClient"

export const register = (userName: string, email: string, password: string) => {
  return client.post('/registration', { userName, email, password });
}
