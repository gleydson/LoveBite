import { Reducer } from 'redux';

import { SettingsState, SettingsTypes } from './types';

const INITIAL_STATE: SettingsState = {
  isShowOverboarding: true,
};

const reducer: Reducer<SettingsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SettingsTypes.SET_IS_SHOW_OVERBOARDING:
      return { ...state, isShowOverboarding: action.payload };
    default:
      return state;
  }
};

export default reducer;
