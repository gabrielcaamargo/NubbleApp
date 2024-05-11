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
import {Box} from './src/components/Box/Box';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 16}}>
          <Text preset="headingMedium" italic>
            Coffstack
          </Text>
          <Box marginBottom="s24">
            <Button title="Coffstack" />
          </Box>
          <Button title="Coffstack" loading />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
export default App;
