import { Action } from 'redux';
import { isType } from 'typescript-fsa';

import { addSymbols } from './actions';
import { ISymbolsState } from './types';

const initialState: ISymbolsState = {
  items: {},
  ids: [],
};

export const symbolsReducer = (state: ISymbolsState = initialState, action: Action): ISymbolsState => {
  if (isType(action, addSymbols)) {
    const ids = [ ...state.ids ];
    const items = { ...state.items };

    action.payload.images.forEach(image => {
      const { checksum: id, url, width, height } = image;
      if (ids.indexOf(id) === -1) {
        ids.push(id);
        items[id] = { id, url, width, height };
      }
    });

    return { ...state, items, ids };
  }

  return state;
};
