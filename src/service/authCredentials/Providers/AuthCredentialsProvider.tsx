import React, {createContext, useState} from 'react';

import {AuthCredentials} from '@domain';

import {AuthCredentialsService} from '../authCredentialsTypes';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: false,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function saveCredentials(ac: AuthCredentials) {
    // TODO:
    setAuthCredentials(ac);
  }

  async function removeCredentials() {
    // TODO:
    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{
        authCredentials,
        isLoading,
        removeCredentials,
        saveCredentials,
      }}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
