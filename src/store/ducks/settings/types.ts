export enum SettingsTypes {
  SET_IS_SHOW_OVERBOARDING = '@settings/SET_IS_SHOW_OVERBOARDING',
}

export interface SettingsState {
  readonly isShowOverboarding: boolean;
}
