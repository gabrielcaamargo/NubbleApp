import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Box} from '../../../components/Box/Box';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignupScreen'>;

export function SignupScreen(props: ScreenProps) {
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
        <PasswordInput label="Senha" placeholder="Sua senha" />
      </Box>
      <Button title="Criar minha conta" marginTop="s48" onPress={submitForm} />
    </Screen>
  );
}
