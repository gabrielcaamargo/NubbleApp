import {useState} from 'react';

export interface MutationOptions<TData> {
  onSucess?: (data?: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function mutate(variables: TVariables) {
    try {
      setError(null);
      setLoading(true);
      const data = await mutationFn(variables);

      if (options?.onSucess) {
        options.onSucess(data);
      }
    } catch (mutateError) {
      if (options?.onError) {
        options.onError(options.errorMessage || '');
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {mutate, loading, error};
}
