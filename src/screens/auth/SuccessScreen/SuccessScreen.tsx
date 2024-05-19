import React from 'react';

import {Screen, Icon, Text, Button} from '@components';
import {AuthScreenProps} from '@routes';

export function SuccessScreen({
  route: {params},
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
  function goBackToBegin() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...params.icon} />
      <Text preset="headingLarge" marginTop="s24">
        {params.title}
      </Text>
      <Text preset="paragraphLarge" marginTop="s16">
        {params.description}
      </Text>
      <Button
        title="Voltar ao início"
        onPress={goBackToBegin}
        marginTop="s40"
      />
    </Screen>
  );
}
