import React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '@/store';
import { IDobbleCardSymbol } from '@/store/cards';
import { IThemeState } from '@/store/theme';
import { dobbleCardSymbolStyle } from './style';

interface IOwnProps {
  symbolId: string;
  leftOffset: number;
  rightOffset: number;
  size: number;
  rotation: number;
}

interface IStateProps {
  image: string;
}

interface IProps extends IOwnProps, IStateProps {}

const PDobbleCardSymbol: React.FC<IProps> = ({ leftOffset, rightOffset, size, rotation, image }) => {
  const style = {
    backgroundImage: `url(${image})`,
    left: `${leftOffset}%`,
    right: `${rightOffset}%`,
    width: `${size}px`,
    height: `${size}px`,
    transform: `rotate(${rotation}deg)`
  };

  return <div className={dobbleCardSymbolStyle} style={style} />
};

const makeMapStateToProps = (initialState, initialProps) => {
  const { symbolId } = initialProps;

  return (state: IStoreState): IStateProps => {
    const { image } = state.symbols.items[symbolId] || {};
    return { image };
  };
};

export const DobbleCardSymbol = connect(makeMapStateToProps)(PDobbleCardSymbol);
