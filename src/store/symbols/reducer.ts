import { ISymbolsState } from './types';

const initialState: ISymbolsState = {
  activeCount: 0,
  items: {},
  ids: []
};

export const symbolsReducer = (state: ISymbolsState = initialState, action: any): ISymbolsState => {
  return state;
};
