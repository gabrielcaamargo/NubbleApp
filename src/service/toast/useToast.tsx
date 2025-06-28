import {ToastService} from './toastTypes';
import {useToastContext} from './useToastContext';

export function useToast(): ToastService {
  const {showToast, hideToast, toast} = useToastContext();

  return {showToast, hideToast, toast};
}
