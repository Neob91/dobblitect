import { combineReducers } from 'redux';

import { cardsReducer } from './cards';
import { symbolsReducer } from './symbols';
import { themeReducer } from './theme';

export const reducer = combineReducers({
  cards: cardsReducer,
  symbols: symbolsReducer,
  theme: themeReducer
});
