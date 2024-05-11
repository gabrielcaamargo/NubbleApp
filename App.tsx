/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box paddingHorizontal="s24">
          <Text preset="headingLarge" marginBottom="s8">
            Olá!
          </Text>
          <Text preset="paragraphLarge" marginBottom="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <Box marginBottom="s20">
            <TextInput
              placeholder="Digite seu e-mail"
              style={{
                borderWidth: 1,
                height: 50,
              }}
            />
          </Box>
          <TextInput
            placeholder="Digite sua senha"
            style={{
              borderWidth: 1,
              height: 50,
            }}
          />
          <Text preset="paragraphSmall" bold color="primary" marginTop="s10">
            Esqueci minha senha
          </Text>

          <Button title="Entrar" marginTop="s48" />
          <Button title="Criar uma conta" marginTop="s12" preset="outline" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}
export default App;
