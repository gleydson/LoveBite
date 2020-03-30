import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import App from './src';

import './src/config/mirage';

AppRegistry.registerComponent(appName, () => App);
