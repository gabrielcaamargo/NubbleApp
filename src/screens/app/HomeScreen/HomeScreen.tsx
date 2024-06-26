import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  function handleNavigateToSettings() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button title="Settings" onPress={handleNavigateToSettings} />
      <Button
        title="Favorite"
        onPress={() => navigation.navigate('FavoriteScreen')}
        mt="s12"
      />
    </Screen>
  );
}
