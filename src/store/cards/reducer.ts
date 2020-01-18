import { ICardsState } from './types';

const initialState: ICardsState = {
  items: {},
  ids: []
};

export const cardsReducer = (state: ICardsState = initialState, action: any): ICardsState => {
  return state;
};
