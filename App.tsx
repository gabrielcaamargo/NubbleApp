/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 16}}>
          <Text preset="headingMedium" italic>
            Coffstack
          </Text>
          <Button title="Coffstack" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
export default App;
