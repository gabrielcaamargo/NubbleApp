import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {IIconProps} from '../components/Icon/Icon';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IIconProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
};

export function Routes() {
  const authenticated = true;
  return (
    <NavigationContainer>
      {authenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
