import {create} from 'zustand';

import {AuthCredentialsService} from './authCredentialsTypes';

export function useAuthCredentials(): AuthCredentialsService {
  return useAuthCredentialsZustand();
}

const useAuthCredentialsZustand = create<AuthCredentialsService>(set => ({
  authCredentials: null,
  isLoading: false,
  saveCredentials: async credentials => set({authCredentials: credentials}),
  removeCredentials: async () => set({authCredentials: null}),
}));
