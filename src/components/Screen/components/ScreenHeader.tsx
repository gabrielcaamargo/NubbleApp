import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {ScreenProps} from '../Screen';

type ScreenHeaderProps = Pick<
  ScreenProps,
  'canGoBack' | 'title' | 'HeaderComponent'
>;

const ICON_SIZE = 20;

export function ScreenHeader({
  canGoBack,
  title,
  HeaderComponent,
}: ScreenHeaderProps) {
  const navigation = useNavigation();

  const showBackLabel = !title && !HeaderComponent;

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s24">
      {canGoBack && (
        <TouchableOpacityBox
          marginRight="s10"
          onPress={navigation.goBack}
          flexDirection="row"
          alignItems="center">
          <Icon name="arrowLeft" color="primary" size={ICON_SIZE} />
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}
