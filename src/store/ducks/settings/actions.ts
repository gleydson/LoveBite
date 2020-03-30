import { action } from 'typesafe-actions';

import { SettingsTypes } from './types';

export const setIsShowOverboarding = (value: boolean) =>
  action(SettingsTypes.SET_IS_SHOW_OVERBOARDING, value);
