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
  const n = getSymbolsOnCard(symbolIds.length);
  const deck = [];

  for (let i = 0; i < n; i++) {
    const symbols = [
      generateSymbol(symbolIds[0], 0)
    ];

    for (let j = 1; j < n; j++) {
      symbols.push(generateSymbol(symbolIds[(n - 1) * i + j], j));
    }

    deck.push({
      id: uuid4(),
      symbols
    });
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      const symbols = [
        generateSymbol(symbolIds[i], 0)
      ];

      for (let k = 1; k < n; k++) {
        symbols.push(
          generateSymbol(symbolIds[n + (n - 1) * (k - 1) + ( ((i - 1) * (k - 1) + (j - 1)) ) % (n - 1)], k)
        );
      }

      deck.push({
        id: uuid4(),
        symbols
      });
    }
  }

  return deck;
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

const getSymbolsOnCard = (totalSymbolCount: number) => {
  for (let i = 0; i < totalSymbolCount; i++) {
    if ((i - 1) * (i - 1) + i > totalSymbolCount) {
      return i - 1;
    }
  }

  return 1;
};
