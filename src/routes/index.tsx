import { createStackNavigator } from '@react-navigation/stack';
import {} from '@react-navigation/native';
import React from 'react';

import SplashScreen from '@screens/splash';
import HomeScreen from '@screens/home';

import Overboarding from './onboarding';

const MainStack = createStackNavigator();

interface Props {
  isLoading: boolean;
  isOverboardingFinalized: boolean;
}

export default function Routes({ isLoading, isOverboardingFinalized }: Props) {
  if (!isLoading) {
    return <SplashScreen />;
  }

  if (isOverboardingFinalized) {
    <MainStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        gestureDirection: 'vertical',
      }}
      headerMode='none'
      mode='modal'
    >
      <MainStack.Screen name='Home' component={HomeScreen} />
    </MainStack.Navigator>;
  }

  return <Overboarding />;
}
