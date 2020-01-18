import { IThemeState } from './types';

const initialState: IThemeState = {
  backgroundColor: '#ffffff',
  borderColor: '#555555',
  cardSize: 70,
  logoUrl: null
};

export const themeReducer = (state: IThemeState = initialState, action: any): IThemeState => {
  return state;
};
