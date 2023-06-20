export type AuthResponse = {
  message?: string,
  email?: string,
  password?: string,
  user?: {
    userName: string,
    email: string,
    password:string,
  }
  accessToken?: string,
  activationToken?: string,
};
