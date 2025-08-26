import {User, UserAPI} from '../User';

export interface AuthCredentials {
  token: string;
  user: User;
  refreshToken: string;
  tokenExpiresAt: string;
}

export interface FieldIsAvailableAPI {
  message: string;
  isAvailable: boolean;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string; //'bearer';
    token: string; // 'NA.GCfDf81QRs0q4VxyFSEvWs8kZ-DoZnl5zKLn8UDY8ntedjZCPgxVxfFijlQy';
  };
  user: UserAPI;
  refreshToken: string;
  expires_at: string;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}

export interface SignUpDataAPI {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface ForgotPasswordParam {
  email: string;
}
