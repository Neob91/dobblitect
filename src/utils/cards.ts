import { generate, getCardSymbolCount } from 'dobble';
import uuid4 from 'uuid/v4';

import { IDobbleCardSymbol } from '@/store/cards';

export const cardSymbolPositions = [
  [0.48, 0.50],
  [0.47, 0.17],
  [0.65, 0.31],
  [0.79, 0.49],
  [0.77, 0.67],
  [0.58, 0.80],
  [0.32, 0.75],
  [0.18, 0.60],
  [0.18, 0.41],
  [0.29, 0.27],
  [0.43, 0.33],
  [0.60, 0.32],
  [0.61, 0.59],
  [0.37, 0.63]
];

export const generateCards = (symbolIds: string[]) => {
  const n = getCardSymbolCount(symbolIds.length);
  return generate(n)
    .map(symbols => ({
      id: uuid4(),
      symbols: symbols.map((s, idx) =>
        generateSymbol(symbolIds[s], idx)
      )
    }));
}

const generateSymbol = (id, index): IDobbleCardSymbol => {
  const [ leftOffsetFactor, topOffsetFactor ] = cardSymbolPositions[index % cardSymbolPositions.length];
  return {
    symbolId: id,
    leftOffsetFactor, // 0 - left, 1 - right
    topOffsetFactor, // 0 - top, 1 - bottom
    sizeFactor: Math.pow(Math.random(), 4), // 0 - minimum, 1 - maximum
    rotationFactor: Math.random() // 0 - 1
  };
};
