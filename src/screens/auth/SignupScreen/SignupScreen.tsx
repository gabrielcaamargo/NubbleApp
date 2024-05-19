import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {FormTextInput, FormPasswordInput} from '@components';
import {Box, Button, Screen, Text} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {SignupSchema, signupSchema} from './signupSchema';

export function SignupScreen({}: AuthScreenProps<'SignupScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      fullName: '',
      username: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(signupValues: SignupSchema) {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>

      <Box gap="s20">
        <FormTextInput
          label="Nome de usuário"
          control={control}
          name="username"
        />

        <FormTextInput
          control={control}
          label="Nome completo"
          placeholder="Seu nome completo"
          name="fullName"
          autoCapitalize="words"
        />

        <FormTextInput
          control={control}
          name="email"
          label="Email"
          placeholder="Seu email"
        />

        <FormPasswordInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Sua senha"
        />
      </Box>
      <Button
        disabled={!formState.isValid}
        title="Criar minha conta"
        marginTop="s48"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
