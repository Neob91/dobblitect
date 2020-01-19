import actionCreatorFactory from 'typescript-fsa';

import { IDobbleCard } from './types';

const actionCreator = actionCreatorFactory('CARDS');

export const setCardDeck = actionCreator<{ cards: IDobbleCard[] }>('SET_CARD_DECK');
export const selectCardSymbol = actionCreator<{ cardId: string, symbolId: string }>('SELECT_CARD_SYMBOL');
export const moveCardSymbol = actionCreator<{ x: number, y: number }>('MOVE_CARD_SYMBOL');
export const resizeCardSymbol = actionCreator<{ delta: number }>('RESIZE_CARD_SYMBOL');
export const rotateCardSymbol = actionCreator<{ delta: number }>('ROTATE_CARD_SYMBOL');
