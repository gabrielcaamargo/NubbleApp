import React, {createContext, useEffect, useState} from 'react';

import {api} from '@api';
import {AuthCredentials, authService} from '@domain';

import {authApi} from '../../../domain/Auth/authApi';
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
    const interceptor = api.interceptors.response.use(
      response => response,
      async responseError => {
        const failedRequest = responseError.config;
        const hasNotRefreshToken = !authCredentials?.refreshToken;
        const isRefreshTokenRequest =
          authApi.isRefreshTokenRequest(failedRequest);

        if (responseError.response.status === 401) {
          if (
            hasNotRefreshToken ||
            isRefreshTokenRequest ||
            failedRequest.sent
          ) {
            removeCredentials();

            return Promise.reject(responseError);
          }

          failedRequest.sent = true;

          const newAuthCredentials =
            await authService.authenticateByRefreshToken(
              authCredentials?.refreshToken,
            );

          saveCredentials(newAuthCredentials);

          failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

          return api(failedRequest);
        }
      },
    );

    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, [authCredentials?.refreshToken]);

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
