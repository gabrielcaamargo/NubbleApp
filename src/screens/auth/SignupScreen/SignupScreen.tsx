import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Box} from '../../../components/Box/Box';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
// import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {useForm} from 'react-hook-form';
import {FormTextInput} from '../../../components/form/FormTextInput/FormTextInput';

type SignupFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignupScreen'>;

export function SignupScreen({}: ScreenProps) {
  // const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignupFormType>({
    defaultValues: {
      email: '',
      fullName: '',
      username: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(signupValues: SignupFormType) {
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
          rules={{
            required: {
              message: 'Username obrigatório',
              value: true,
            },
          }}
        />

        <FormTextInput
          control={control}
          label="Nome completo"
          placeholder="Seu nome completo"
          name="fullName"
          rules={{
            required: {
              message: 'Nome completo obrigatório',
              value: true,
            },
          }}
        />

        <FormTextInput
          control={control}
          name="email"
          label="Email"
          placeholder="Seu email"
          rules={{
            required: {
              message: 'Email obrigatório',
              value: true,
            },
          }}
        />

        <FormTextInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Sua senha"
          rules={{
            required: 'Senha obrigtatória',
            minLength: {
              value: 8,
              message: 'A senha deve ter no mínimo 8 caracteres',
            },
          }}
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
