import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import { Server, Model, hasMany, belongsTo } from 'miragejs';

new Server({
  models: {
    restaurants: Model.extend({
      dishes: hasMany(),
    }),
    dishes: Model.extend({
      restaurants: belongsTo(),
    }),
  },
  routes() {
    this.namespace = 'api';
    this.get('/restaurants', schema => {
      return {
        restaurants: [{ id: 1, name: 'Example' }],
      };
    });
  },
});

AppRegistry.registerComponent(appName, () => App);
