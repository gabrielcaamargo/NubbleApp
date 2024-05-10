import React from 'react';
import {useTheme} from '@shopify/restyle';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {Theme} from '../../theme/theme';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.greenPrimary,
        paddingHorizontal: 20,
        paddingVertical: 14,
        alignItems: 'center',
        borderRadius: 16,
      }}>
      <Text preset="paragraphMedium" bold style={{color: colors.grayWhite}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
