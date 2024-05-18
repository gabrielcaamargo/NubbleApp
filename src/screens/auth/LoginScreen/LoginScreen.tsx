import React from 'react';
import {useForm} from 'react-hook-form';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {FormTextInput} from '../../../components/form/FormTextInput/FormTextInput';
import {zodResolver} from '@hookform/resolvers/zod';
import {loginSchema, LoginSchema} from './loginSchema';
import {FormPasswordInput} from '../../../components/form/FormPasswordInput/FormPasswordInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    delayError: 500,
  });

  function submitForm(event: LoginSchema) {
    console.log(event);
  }

  function navigateToSignupScreen() {
    navigation.navigate('SignupScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen>
      <Text preset="headingLarge" marginBottom="s8">
        Olá!
      </Text>
      <Text preset="paragraphLarge" marginBottom="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite seu e-mail"
        label="Email"
        boxProps={{marginBottom: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
      />

      <Text
        preset="paragraphSmall"
        bold
        color="primary"
        onPress={navigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button
        disabled={!formState.isValid}
        title="Entrar"
        marginTop="s48"
        onPress={handleSubmit(submitForm)}
      />
      <Button
        onPress={navigateToSignupScreen}
        title="Criar uma conta"
        marginTop="s12"
        preset="outline"
      />
    </Screen>
  );
}
