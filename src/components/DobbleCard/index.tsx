import React from 'react';
import { connect } from 'react-redux';

import { DobbleCardSymbol } from '@/components';
import { IStoreState } from '@/store';
import { IDobbleCardSymbol } from '@/store/cards';
import { IThemeState } from '@/store/theme';
import { dobbleCardStyle } from './style';

interface IOwnProps {
  id?: string;
}

interface IStateProps {
  symbols?: IDobbleCardSymbol[];
  theme: IThemeState;
}

interface IProps extends IOwnProps, IStateProps {}

const PDobbleCard: React.FC<IProps> = ({ id, symbols, theme }) => {
  /* TODO: Go back to using style */
  return (
    <div className={dobbleCardStyle(theme)}>
      {symbols.map(s => <DobbleCardSymbol key={s.symbolId} cardId={id} {...s} />)}
    </div>
  );
};

const makeMapState = (initialState, initialProps) => {
  const { id } = initialProps;

  return (state: IStoreState): IStateProps => {
    const { theme } = state;
    const { symbols } = id !== null ? state.cards.items[id] : { symbols: [] };

    return { symbols, theme };
  };
};

export const DobbleCard = connect(makeMapState)(PDobbleCard);
