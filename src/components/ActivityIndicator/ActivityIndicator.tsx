import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNAcitivityIndicatorProps,
} from 'react-native';
import {Theme, ThemeColors} from '../../theme/theme';
import {useTheme} from '@shopify/restyle';

interface ActivityIndicatorPropsProps
  extends Omit<RNAcitivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({
  color,
  ...activityIndicatorProps
}: ActivityIndicatorPropsProps) {
  const {colors} = useTheme<Theme>();
  return (
    <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />
  );
}
