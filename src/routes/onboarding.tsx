import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import IntroFoodScreen from '@screens/intro_food';
import IntroLocationScreen from '@screens/intro_location';

const MainStack = createStackNavigator();

export default function Overboarding() {
  return (
    <MainStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        gestureDirection: 'vertical',
      }}
      headerMode='none'
      mode='modal'
    >
      <MainStack.Screen name='IntroFood' component={IntroFoodScreen} />
      <MainStack.Screen name='IntroLocation' component={IntroLocationScreen} />
    </MainStack.Navigator>
  );
}
