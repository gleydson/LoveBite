import { Restaurant } from '@store/ducks/restaurants/types';
import axios, { AxiosResponse } from 'axios';

const baseURL = __DEV__ ? '' : 'https://api.github.com';

const api = axios.create({
  baseURL,
});

export function getRestaurants(): Promise<AxiosResponse<Restaurant[]>> {
  return api.get('/api/restaurants');
}

export default api;
