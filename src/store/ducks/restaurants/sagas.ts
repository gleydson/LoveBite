import { call, put, takeLatest, all } from 'redux-saga/effects';

import * as ApiService from '@services/api';

import { loadSuccess, loadFailure } from './actions';
import { RestaurantsTypes } from './types';

function* load() {
  try {
    const { data } = yield call(ApiService.getRestaurants);
    yield put(loadSuccess(data));
  } catch (error) {
    yield put(loadFailure());
  }
}

export default all([takeLatest(RestaurantsTypes.LOAD_REQUEST, load)]);
