import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {RootStackParamList} from '../../../routes/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route: {params}, navigation}: ScreenProps) {
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
