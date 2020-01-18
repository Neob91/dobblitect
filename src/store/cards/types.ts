export interface IDobbleCardSymbol {
  symbolId: string;
  offsetX: number;
  offsetY: number;
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
