export enum RestaurantsTypes {
  LOAD_REQUEST = '@restaurants/LOAD_REQUEST',
  LOAD_SUCCESS = '@restaurants/LOAD_SUCCESS',
  LOAD_FAILURE = '@restaurants/LOAD_FAILURE',
}

export interface Restaurant {
  id: number;
  name: string;
}

export interface RestaurantsState {
  readonly data: Restaurant[];
  readonly loading: boolean;
  readonly error: boolean;
}
