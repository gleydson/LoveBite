import { Server } from 'miragejs';

new Server({
  routes() {
    this.namespace = '/api';
    this.get('/restaurants', () => {
      return {
        restaurants: [
          { id: 1, name: 'Example' },
          { id: 2, name: 'Example' },
          { id: 3, name: 'Example' },
        ],
      };
    });
  },
});
