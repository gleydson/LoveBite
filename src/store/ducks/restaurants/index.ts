import { Reducer } from 'redux';

import { RestaurantsState, RestaurantsTypes } from './types';

const INITIAL_STATE: RestaurantsState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<RestaurantsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RestaurantsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RestaurantsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case RestaurantsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
