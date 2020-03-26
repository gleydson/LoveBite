import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';

import light from '@styles/themes/light';

import Routes from './routes';
import useStorage from '@hooks/useStorage';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOverboardingFinalized] = useStorage('@isOverboardingFinalized', false);

  function performTimeConsumingTask(): Promise<string> {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('finalized');
      }, 2000)
    );
  }

  useEffect(() => {
    console.log(isOverboardingFinalized)
    async function checkLoading() {
      const result = await performTimeConsumingTask();
      if (result !== null) {
        setIsLoading(true);
      }
    }
    checkLoading();
  });

  return (
    <ThemeProvider theme={light}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={light.colors.background}
          barStyle='dark-content'
        />
        <Routes isLoading={isLoading} isOverboardingFinalized={isOverboardingFinalized} />
      </NavigationContainer>
    </ThemeProvider>
  );
}
