export interface IDobbleCardSymbol {
  symbolId: string;
  leftOffset: number;
  rightOffset: number;
  size: number;
  rotation: number;
}

export interface IDobbleCard {
  id: string;
  symbols: IDobbleCardSymbol[];
}

export interface ICardsState {
  items: { [id: string]: IDobbleCard };
  ids: string[];
}
