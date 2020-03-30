import { action } from 'typesafe-actions';

import { RestaurantsTypes, Restaurant } from './types';

export const loadRequest = () => action(RestaurantsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Restaurant[]) =>
  action(RestaurantsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(RestaurantsTypes.LOAD_FAILURE);
