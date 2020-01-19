import React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '@/store';
import { IDobbleCard, setCardDeck } from '@/store/cards';
import { IDobbleSymbol } from '@/store/symbols';
import { generateCards } from '@/utils/cards';


interface IStateProps {
  symbolIds: string[];
}

interface IDispatchProps {
  onGenerate: (cards: IDobbleCard[]) => void;
}

interface IProps extends IStateProps, IDispatchProps {}

export const PDobbleGenerator: React.FC<IProps> = ({ symbolIds, onGenerate }) => {
  const handleClick = () => {
    onGenerate(generateCards(symbolIds));
  };

  return (
    <div>
      <input type="button" onClick={handleClick} value="Xpahehe" />
    </div>
  );
};

const mapState = (state: IStoreState) => ({
  symbolIds: state.symbols.ids
});

const mapDispatch = dispatch => ({
  onGenerate: (cards: IDobbleCard[]) => dispatch(setCardDeck({ cards }))
});

export const DobbleGenerator = connect(mapState, mapDispatch)(PDobbleGenerator);
