import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';
import {SignupScreen} from '../screens/auth/SignupScreen/SignupScreen';
import {SuccessScreen} from '../screens/auth/SuccessScreen/SuccessScreen';
import {IIconProps} from '../components/Icon/Icon';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IIconProps, 'name' | 'color'>;
  };
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
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
