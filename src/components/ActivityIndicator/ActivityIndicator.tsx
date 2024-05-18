import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNAcitivityIndicatorProps,
} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

interface ActivityIndicatorPropsProps
  extends Omit<RNAcitivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({
  color,
  ...activityIndicatorProps
}: ActivityIndicatorPropsProps) {
  const {colors} = useAppTheme();
  return (
    <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />
  );
}
