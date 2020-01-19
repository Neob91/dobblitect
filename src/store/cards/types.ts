export interface IDobbleCardSymbol {
  symbolId: string;
  leftOffsetFactor: number;
  topOffsetFactor: number;
  sizeFactor: number;
  rotationFactor: number;
}

export interface IDobbleCard {
  id: string;
  symbols: IDobbleCardSymbol[];
}

export interface ICardsState {
  items: { [id: string]: IDobbleCard };
  ids: string[];
  selectedCardId: string;
  selectedSymbolId: string;
}
