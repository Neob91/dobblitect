import { ICardsState } from './cards';
import { ISymbolsState } from './symbols';
import { IThemeState } from './theme';

export interface IStoreState {
  cards: ICardsState;
  symbols: ISymbolsState;
  theme: IThemeState;
}
