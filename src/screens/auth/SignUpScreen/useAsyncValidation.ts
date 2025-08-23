import {useAuthIsEmailAvailable, useAuthIsUserNameAvailable} from '@domain';
import {UseFormGetFieldState, UseFormWatch} from 'react-hook-form';

import {SignUpSchema} from './signUpSchema';

type Props = {
  watch: UseFormWatch<SignUpSchema>;
  getFieldState: UseFormGetFieldState<SignUpSchema>;
};

type ReturnValues = {
  errorMessage?: string;
  notReady: boolean;
  isFetching: boolean;
};

export function useAsyncValidation({watch, getFieldState}: Props): {
  userNameValidation: ReturnValues;
  emailValidation: ReturnValues;
} {
  const userName = watch('username');
  const userNameState = getFieldState('username');
  const userNameIsValid = !userNameState.invalid && userNameState.isDirty;

  const userNameQuery = useAuthIsUserNameAvailable({
    username: userName,
    enabled: userNameIsValid,
  });

  const email = watch('email');
  const emailState = getFieldState('email');
  const emailIsValid = !emailState.invalid && emailState.isDirty;

  const emailQuery = useAuthIsEmailAvailable({
    email,
    enabled: emailIsValid,
  });

  return {
    userNameValidation: {
      errorMessage: userNameQuery.isUnavailable
        ? 'Nome de usuário não disponível'
        : undefined,
      notReady: userNameQuery.isFetching || userNameQuery.isUnavailable,
      isFetching: userNameQuery.isFetching,
    },

    emailValidation: {
      errorMessage: emailQuery.isUnavailable
        ? 'E-mail não disponível'
        : undefined,
      notReady: emailQuery.isFetching || emailQuery.isUnavailable,
      isFetching: emailQuery.isFetching,
    },
  };
}
