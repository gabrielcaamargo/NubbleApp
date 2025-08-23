import {useAuthIsUserNameAvailable} from '@domain';
import {UseFormGetFieldState, UseFormWatch} from 'react-hook-form';

import {SignUpSchema} from './signUpSchema';

type Props = {
  watch: UseFormWatch<SignUpSchema>;
  getFieldState: UseFormGetFieldState<SignUpSchema>;
};

export function useAsyncValidation({watch, getFieldState}: Props) {
  const userName = watch('username');
  const userNameState = getFieldState('username');
  const userNameIsValid = !userNameState.invalid && userNameState.isDirty;

  const userNameQuery = useAuthIsUserNameAvailable({
    username: userName,
    enabled: userNameIsValid,
  });

  return {
    errorMessage: userNameQuery.isUnavailable
      ? 'Nome de usuário não disponível'
      : undefined,
    notReady: userNameQuery.isFetching || userNameQuery.isUnavailable,
    isFetching: userNameQuery.isFetching,
  };
}
