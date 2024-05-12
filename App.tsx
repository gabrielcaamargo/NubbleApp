import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SignupScreen} from './src/screens/auth/SignupScreen/SignupScreen';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SignupScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
export default App;
