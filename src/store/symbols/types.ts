export interface IDobbleSymbol {
  id: string;
  image: string;
}

export interface ISymbolsState {
  activeCount: number;
  items: { [id: string]: IDobbleSymbol };
  ids: string[];
}
