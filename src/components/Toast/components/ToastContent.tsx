import React from 'react';
import {Dimensions} from 'react-native';

import {Toast, ToastPosition, ToastType} from '@service';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../../Box/Box';
import {Icon, IconProps} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface ToastContentProps {
  toast: Toast;
}

export function ToastContent({toast}: ToastContentProps) {
  const position: ToastPosition = toast?.position || 'top';
  const type: ToastType = toast?.type || 'success';

  if (!toast) {
    return null;
  }

  return (
    <Box top={100} {...$boxStyle} style={[{[position]: 100}, $shadowProps]}>
      <Icon {...mapTypeToIcon[type]} />
      <Text style={{flexShrink: 1}} preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {color: 'success', name: 'checkRound'},
  error: {color: 'error', name: 'errorRound'},
};

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
