import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';
import {SignupScreen} from '../screens/auth/SignupScreen/SignupScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
  // TODO: Success Screen: icon, title, description
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
