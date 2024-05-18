import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Box} from '../../../components/Box/Box';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
// import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {useForm} from 'react-hook-form';
import {FormTextInput, FormPasswordInput} from '@components';
import {SignupSchema, signupSchema} from './signupSchema';
import {zodResolver} from '@hookform/resolvers/zod';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignupScreen'>;

export function SignupScreen({}: ScreenProps) {
  // const {reset} = useResetNavigationSuccess();
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
    console.log(signupValues);
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
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
