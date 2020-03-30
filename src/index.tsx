import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Provider, useSelector } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import light from '@styles/themes/light';

import Routes from './routes';
import { store, persistor, ApplicationState } from './store';
import { PERSISTENCE_KEY } from './utils/contants';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(!__DEV__);
  const [initialState, setInitialState] = useState();

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
        setIsLoading(false);
      }
    }
    if (isLoading) {
      checkLoading();
    }

    async function restoreState() {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString ?? '');
        setInitialState(state);
      } finally {
        setIsReady(true);
      }
    }

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <ThemeProvider theme={light}>
      <NavigationContainer
        initialState={initialState}
        onStateChange={state =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >
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
