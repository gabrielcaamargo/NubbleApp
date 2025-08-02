import React, {useEffect} from 'react';

import {useToast, useToastService} from '@service';

import {ToastContent} from './components/ToastContent';

const DEFAULT_DURATION = 2000;

export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();

  useEffect(() => {
    if (toast) {
      const toastTimeout = setTimeout(() => {
        hideToast();
      }, toast.duration || DEFAULT_DURATION);

      return () => {
        clearTimeout(toastTimeout);
      };
    }
  }, [toast, hideToast]);

  if (!toast) {
    return null;
  }

  return <ToastContent toast={toast} />;
}
