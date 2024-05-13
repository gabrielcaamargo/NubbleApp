import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Box} from '../../../components/Box/Box';
import {Icon} from '../../../components/Icon/Icon';

export function SignupScreen() {
  function submitForm() {}

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>

      <Box gap="s20">
        <TextInput label="Seu username" placeholder="@" />
        <TextInput label="Nome completo" placeholder="Seu nome completo" />
        <TextInput label="Email" placeholder="Seu email" />
        <TextInput
          label="Senha"
          placeholder="Sua senha"
          RightComponent={<Icon color="gray2" name="eyeOn" />}
        />
      </Box>
      <Button title="Criar minha conta" marginTop="s48" onPress={submitForm} />
    </Screen>
  );
}
