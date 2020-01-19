import { Action } from 'redux';
import { isType } from 'typescript-fsa';

import { addLogo } from './actions';
import { IThemeState } from './types';

const initialState: IThemeState = {
  backgroundColor: '#ffffff',
  borderColor: '#555555',
  borderWidth: 3,
  cardSize: 70,
  minSymbolSize: 10,
  maxSymbolSize: 30,
  logoUrl: null,
  logoColor: '#b57692',
  logoBorderColor: '#68369b'
};

export const themeReducer = (state: IThemeState = initialState, action: any): IThemeState => {
  if (isType(action, addLogo)) {
    const { image } = action.payload;
    const { url: logoUrl } = image;

    return { ...state, logoUrl };
  }

  return state;
};
