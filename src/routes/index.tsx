import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from '@screens/home';
import IntroFoodScreen from '@screens/intro_food';
import IntroLocationScreen from '@screens/intro_location';
import SplashScreen from '@screens/splash';

const Stack = createStackNavigator();

interface Props {
  isLoading: boolean;
  isShowOverboarding: boolean;
}

export default function Routes({ isLoading, isShowOverboarding }: Props) {
  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'vertical',
      }}
      headerMode='none'
      mode='modal'
    >
      {isShowOverboarding ? (
        <>
          <Stack.Screen name='IntroFood' component={IntroFoodScreen} />
          <Stack.Screen name='IntroLocation' component={IntroLocationScreen} />
        </>
      ) : (
        <Stack.Screen name='Home' component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
}
