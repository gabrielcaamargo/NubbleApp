import {User, UserAPI} from '../User';

export interface AuthCredentials {
  token: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string; // 'bearer'
    token: string; // '<JWT>'
  };
  user: UserAPI;
}

export interface SigninData {
  username?: string;
  email?: string;
  password: string;
}
