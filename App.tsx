import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

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

          <TextInput
            placeholder="Digite seu e-mail"
            label="Email"
            boxProps={{marginBottom: 's20'}}
          />
          <TextInput
            placeholder="Digite sua senha"
            label="Senha"
            RightComponent={<Icon color="gray2" name="eyeOn" />}
            boxProps={{marginBottom: 's10'}}
          />
          <Text preset="paragraphSmall" bold color="primary">
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
