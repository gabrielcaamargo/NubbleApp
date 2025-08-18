if (__DEV__) {
  require('./ReactotronConfig');
}

import React from 'react';

import {AuthCredentialsProvider} from '@service';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';

import {Router} from './src/routes/Routes';
import {theme} from './src/theme/theme';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthCredentialsProvider>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <Router />
            <Toast />
          </ThemeProvider>
        </SafeAreaProvider>
      </AuthCredentialsProvider>
    </QueryClientProvider>
  );
}

export default App;
