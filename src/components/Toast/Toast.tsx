import React from 'react';
import {Dimensions} from 'react-native';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

export function Toast() {
  return (
    <Box top={100} {...$boxStyle}>
      <Icon color="success" name="checkRound" />
      <Text style={{flexShrink: 1}} preset="paragraphMedium" bold>
        Toast
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
  maxWidth: Dimensions.get('screen').width * 0.9,
  style: {...$shadowProps},
};
