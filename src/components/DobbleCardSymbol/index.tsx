import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '@/store';
import { IDobbleCardSymbol, selectCardSymbol } from '@/store/cards';
import { IThemeState } from '@/store/theme';
import { calculateImageSize, processSizeFactor } from '@/utils/visuals';
import { getCardSymbolStyle, getCardSymbolCustomizedStyle } from './style';

interface IOwnProps {
  cardId: string;
  symbolId: string;
  leftOffsetFactor: number;
  topOffsetFactor: number;
  sizeFactor: number;
  rotationFactor: number;
}

interface IStateProps {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  minSymbolSize: number;
  maxSymbolSize: number;
  cardSize: number;
}

interface IDispatchProps {
  onSelectSymbol: (cardId, symbolId) => void;
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

const PDobbleCardSymbol: React.FC<IProps> = ({
  cardId,
  symbolId,
  imageUrl,
  imageWidth,
  imageHeight,
  minSymbolSize,
  maxSymbolSize,
  cardSize,
  leftOffsetFactor,
  topOffsetFactor,
  sizeFactor,
  rotationFactor,
  onSelectSymbol
}) => {
  const handleClick = useCallback(() => onSelectSymbol(cardId, symbolId), [cardId, symbolId]);
  const symbolSize = processSizeFactor(minSymbolSize, maxSymbolSize, sizeFactor);
  const leftOffset = processSizeFactor(0, cardSize, leftOffsetFactor);
  const topOffset = processSizeFactor(0, cardSize, topOffsetFactor);

  const { width, height } = calculateImageSize(imageWidth, imageHeight, symbolSize);

  const className = getCardSymbolStyle({ imageUrl });
  const style = getCardSymbolCustomizedStyle({ leftOffset, topOffset, width, height, rotationFactor });

  return <div className={className} style={style} onClick={handleClick} />
};

const mapState = (state: IStoreState, ownProps: IOwnProps): IStateProps => {
  const { minSymbolSize, maxSymbolSize, cardSize } = state.theme;
  const { url, width, height } = state.symbols.items[ownProps.symbolId];
  return {
    imageUrl: url,
    imageWidth: width,
    imageHeight: height,
    minSymbolSize,
    maxSymbolSize,
    cardSize
  };
};

const mapDispatch = dispatch => ({
  onSelectSymbol: (cardId: string, symbolId: string) => dispatch(selectCardSymbol({ cardId, symbolId }))
});

export const DobbleCardSymbol = connect(mapState, mapDispatch)(PDobbleCardSymbol);
