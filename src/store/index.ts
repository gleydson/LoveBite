import AsyncStorage from '@react-native-community/async-storage';

import { createStore, compose, applyMiddleware, Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import { RestaurantsState } from './ducks/restaurants/types';
import { SettingsState } from './ducks/settings/types';
import sagas from './sagas';

const persistConfig = {
  key: '@LoveBite',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
const composer = compose(applyMiddleware(...middlewares));

export interface ApplicationState {
  restaurants: RestaurantsState;
  settings: SettingsState;
}

const store: Store<ApplicationState> = createStore(persistedReducer, composer);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
