import React from 'react';
import { dobbleCardStyle } from './style';

interface IProps {
  id: string;
  borderColor: string;
  backgroundColor: string;
  items: IDobbleCardItem[];
}

const PDobbleCard: React.FC = ({ items }) => {
  <div className={dobbleCardStyle}>

  </div>
};

const makeMapStateToProps = (initialState, initialProps) => {
  const { id } = initialProps;
  return state => ({});
};

export const DobbleCard = connect(makeMapStateToProps)(PDobbleCard);
