import React from 'react';
import { connect } from 'react-redux';

import { DobbleCardSymbol } from '@/components';
import { IStoreState } from '@/store';
import { IDobbleCardSymbol } from '@/store/cards';
import { IThemeState } from '@/store/theme';
import { dobbleCardStyle } from './style';

interface IOwnProps {
  id: string;
}

interface IStateProps {
  symbols: IDobbleCardSymbol[];
  theme: IThemeState;
}

interface IProps extends IOwnProps, IStateProps {}

const PDobbleCard: React.FC<IProps> = ({ symbols, theme }) => {
  return (
    <div className={dobbleCardStyle(theme)}>
      {/*symbols.map(s => <DobbleCardSymbol {...s} />)*/}
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
