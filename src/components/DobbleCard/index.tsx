import React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '@/store';
import { IDobbleCardSymbol } from '@/store/cards';
import { IThemeState } from '@/store/theme';
import { dobbleCardStyle } from './style';

interface IStateProps {
  symbols: IDobbleCardSymbol[];
  theme: IThemeState;
}

interface IOwnProps {
  id: string;
}

interface IProps extends IStateProps, IOwnProps {}

const PDobbleCard: React.FC<IProps> = ({ symbols, theme }) => {
  return (
    <div className={dobbleCardStyle(theme)}>
    </div>
  );
};

const makeMapStateToProps = (initialState, initialProps) => {
  const { id } = initialProps;

  return (state: IStoreState): IStateProps => {
    const { theme } = state;
    const { symbols } = state.cards.items[id] || {};

    return { symbols, theme };
  };
};

export const DobbleCard = connect(makeMapStateToProps)(PDobbleCard);
