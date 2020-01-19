export interface IDobbleSymbol {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface ISymbolsState {
  items: { [id: string]: IDobbleSymbol };
  ids: string[];
}
