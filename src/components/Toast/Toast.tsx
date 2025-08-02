import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {Toast as ToastTypes, useToast, useToastService} from '@service';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;
const DEFAULT_DURATION = 2000;

export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();
  const position: Required<ToastTypes['position']> = toast?.position || 'top';

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

  return (
    <Box top={100} {...$boxStyle} style={[{[position]: 100}, $shadowProps]}>
      <Icon color="success" name="checkRound" />
      <Text style={{flexShrink: 1}} preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  backgroundColor: 'background',
  position: 'absolute',
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  gap: 's16',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};
