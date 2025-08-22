import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authService} from '../authService';

interface Params {
  username: string;
}

export function useAuthIsUserNameAvailable({username}: Params) {
  const debouncedUserName = useDebounce(username, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [QueryKeys.IsUserNameAvailable, debouncedUserName],
    queryFn: () => authService.isUserNameAvailable(debouncedUserName),
    retry: false,
    staleTime: 20000,
  });

  return {
    isAvailable: !!data,
    isFetching,
  };
}
