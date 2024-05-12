import React from 'react';
import {Box} from '../Box/Box';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

interface IScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
}

export function Screen({children, canGoBack = false}: IScreenProps) {
  const {top} = useAppSafeArea();

  return (
    <Box paddingHorizontal="s24" style={{paddingTop: top}}>
      {canGoBack && (
        <Box marginBottom="s24" flexDirection="row" alignItems="center">
          <Icon name="arrowLeft" color="primary" />
          <Text preset="paragraphMedium" semiBold marginLeft="s8">
            Voltar
          </Text>
        </Box>
      )}
      {children}
    </Box>
  );
}
