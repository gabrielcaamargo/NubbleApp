import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen({navigation}) {
  function navigateToSignupScreen() {
    navigation.navigate('SignupScreen');
  }

  return (
    <Screen>
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
      <Button
        onPress={navigateToSignupScreen}
        title="Criar uma conta"
        marginTop="s12"
        preset="outline"
      />
    </Screen>
  );
}
