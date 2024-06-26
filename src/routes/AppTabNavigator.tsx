import React from 'react';

import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  FavoriteScreen,
  HomeScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@screens';
import { Icon, Text } from '@components';
import { AppTabBar } from './AppTabBar';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: undefined;
  NewPostScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

function renderTabBar(props: BottomTabBarProps) {
  return <AppTabBar {...props} />
}

export function AppTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={renderTabBar}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
        tabBarLabel: ({focused}) => <Text semiBold preset='paragraphCaption' color={focused ? 'primary' : 'backgroundContrast'}>Início</Text>,
        tabBarIcon: ({focused}) => <Icon name={focused ? 'homeFill' : 'home'} color={focused ? 'primary' : 'backgroundContrast'}/>
      }} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
}
