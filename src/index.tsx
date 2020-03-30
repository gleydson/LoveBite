import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Provider, useSelector } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import light from '@styles/themes/light';

import Routes from './routes';
import { store, persistor, ApplicationState } from './store';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const isShowOverboarding = useSelector(
    (state: ApplicationState) => state.settings.isShowOverboarding
  );

  function performTimeConsumingTask(): Promise<string> {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('finalized');
      }, 2000)
    );
  }

  useEffect(() => {
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
        <Routes isLoading={isLoading} isShowOverboarding={isShowOverboarding} />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default function StoreProvider() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}
