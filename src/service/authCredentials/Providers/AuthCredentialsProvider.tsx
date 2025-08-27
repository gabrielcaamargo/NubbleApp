import React, {createContext, useEffect, useState} from 'react';

import {registerInterceptor} from '@api';
import {AuthCredentials, authService} from '@domain';

import {authCredentialsStorage} from '../authCredentialsStorage';
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

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const interceptor = registerInterceptor({
      authCredentials,
      saveCredentials,
      removeCredentials,
    });

    return interceptor;
  }, [authCredentials]);

  useEffect(() => {
    startAuthCredentials();
  }, []);

  async function startAuthCredentials() {
    try {
      const ac = await authCredentialsStorage.get();
      if (ac) {
        authService.updateToken(ac.token);
        setAuthCredentials(ac);
      }
    } catch (error) {
      // TODO: handle error
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(ac: AuthCredentials) {
    authService.updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setAuthCredentials(ac);
  }

  async function removeCredentials() {
    authCredentialsStorage.remove();
    authService.removeToken();
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
