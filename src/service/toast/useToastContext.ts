import {useContext} from 'react';

import {ToastContext} from './providers/ToastProvider';
import {ToastService} from './toastTypes';

export function useToastContext(): ToastService {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }

  return toastContext;
}
