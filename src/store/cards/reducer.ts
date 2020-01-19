import { Action } from 'redux';
import { isType } from 'typescript-fsa';

import { moveCardSymbol, resizeCardSymbol, rotateCardSymbol, selectCardSymbol, setCardDeck } from './actions';
import { ICardsState } from './types';

const initialState: ICardsState = {
  items: {},
  ids: [],
  selectedCardId: null,
  selectedSymbolId: null
};

const modifyCardSymbol = (state: ICardsState, map) => {
  const { selectedCardId, selectedSymbolId } = state;

  if (selectedCardId !== null && selectedSymbolId !== null) {
    const card = state.items[selectedCardId];
    const symbols = card.symbols.map(s => s.symbolId === selectedSymbolId ? map(s) : s);

    return {
      ...state,
      items: {
        ...state.items,
        [selectedCardId]: { ...card, symbols }
      }
    };
  }
};

export const cardsReducer = (state: ICardsState = initialState, action: Action): ICardsState => {
  if (isType(action, setCardDeck)) {
    const { cards } = action.payload;
    const items = {};
    const ids = [];

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      items[card.id] = card;
      ids.push(card.id);
    }

    return { ...state, items, ids };
  }

  if (isType(action, selectCardSymbol)) {
    const { cardId: selectedCardId, symbolId: selectedSymbolId } = action.payload;
    return { ...state, selectedCardId, selectedSymbolId };
  }

  if (isType(action, moveCardSymbol)) {
    const { x, y } = action.payload;
    return modifyCardSymbol(state, s => ({
      ...s,
      leftOffsetFactor: Math.min(Math.max(s.leftOffsetFactor + x, 0), 1),
      topOffsetFactor: Math.min(Math.max(s.topOffsetFactor + y, 0), 1)
    }));
  }

  if (isType(action, resizeCardSymbol)) {
    const { delta } = action.payload;
    return modifyCardSymbol(state, s => ({
      ...s,
      sizeFactor: Math.min(Math.max(s.sizeFactor + delta, 0), 1),
    }));
  }

  if (isType(action, rotateCardSymbol)) {
    const { delta } = action.payload;
    return modifyCardSymbol(state, s => ({
      ...s,
      rotationFactor: (s.rotationFactor + delta) % 1,
    }));
  }

  return state;
};
